<template>
  <div class="prediction">
    <div class="page_title">
      <h2 class="title_text" style="margin-top:15px;">工時預測</h2>
      <!-- <div class="title_line"></div> -->
    </div>
    <div class="btn_block">
      <div class="upload_btn">
        <el-upload class="upload-demo" action="#" :on-change="handleChange" accept=".xls, .xlsx" :auto-upload="false"
          :show-file-list="true" :file-list="fileList">
          <el-button type="primary" :loading="upload_loading">檔案上傳</el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上傳文件，且不超过500kb</div> -->
        </el-upload>
      </div>
      <!-- <el-button type="primary" :disabled="tableData.length <= 0">檔案檢查</el-button> -->
      <el-button :disabled="tableData.length<=0" type="primary" @click="PredictionAction">開始預測</el-button>
      <span style="margin-left:12px; vertical-align: top;display: inline-block;">
        <excel-export :sheet="sheet" filename="PredictionHour_File"><el-button type="primary" :disabled="!ChartShow">下載結果</el-button></excel-export>
      </span>
      <span style="margin-left:12px; vertical-align: top;display: inline-block;">
        <excel-export :sheet="sheet_demo" filename="PredictionHour_Demo"><el-button type="primary">下載樣板</el-button></excel-export>
      </span>
    </div>
    <div class="table_block">
      <el-card class="box-card">
        <!-- <div style="float:right;margin-bottom:15px">
          <el-select value-key="prop" v-model="option_model" multiple collapse-tags  placeholder="請選擇顯示欄位" @change="SelectChange">
            <el-option v-for="item in column_option" :key="item.prop" :label="item.label" :value="item.prop" :disabled="item.disabled">
            </el-option>
          </el-select>
          </div> -->
           <TreeTable
              :col="column_model"
              :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              :loading="loading"
              :show="tableshow"
              :cellstyle="predictstyle">
           </TreeTable>
        <div style="text-align:center; margin-top:15px;">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="tableData.length"
            @current-change="current_change">
          </el-pagination>
        </div>
      </el-card>
      <!-- <div v-if="false">
      <h4 style="margin-top:15px;">預測盒鬚圖</h4>
        <el-divider></el-divider>
        <el-card class="box-card">
          <box-chart
          :data="Boxtdata"
          :yTickCount="10"
          :xKey="'profession'"
          :legend="['AAA', 'BBB', 'CCC']"
          :legendKey="'category'"
          ></box-chart>
        </el-card>
      </div> -->
    </div>
  </div>
</template>

<script>
// import PredictionData from './data/prediction_data.json'
import * as data from './data/prediction_column'
// import FileSaver from 'file-saver'
import xlsx from 'xlsx'
import * as BoxData from './data/Box_data'
import { ExcelExport } from 'pikaz-excel-js'
import { userRequest } from '../axios.js'
import TreeTable from './component/TreeTable'

var FileSaver = require('file-saver')
export default {
  components: {
    ExcelExport,
    TreeTable
  },
  data () {
    return {
      tableData: [],
      column_option: data.HOUR_OPTION_DATA,
      option_model: data.HOUR_COLUMN_KEY,
      column_model: data.HOURCOLUMN_DATA,
      fileList: [],
      tableHeader: [],
      currentPage: 1,
      pagesize: 10,
      upload_loading: false,
      Boxtdata: BoxData.BOX_SAMPLE,
      ChartShow: false,
      loading: false,
      tableshow: true,
      sheet_demo: [{
        tHeader: data.HOUR_COLUMN_KEY.slice(0, 8),
        table: data.HOUR_COLUMN_CHINESE,
        keys: data.HOUR_COLUMN_KEY.slice(0, 8),
        sheetName: 'Sheet1'
      }]
    }
  },
  computed: {
    sheet: function () {
      var cn = []
      var ck = []
      this.column_option.forEach(function (value) {
        cn.push(value.label)
        ck.push(value.prop)
      })
      var output =
      [
        {
          tHeader: cn,
          table: this.tableData,
          keys: ck,
          sheetName: 'Sheet1'
        }
      ]
      return output
    }
  },
  methods: {
    async handleChange (file, fileList) {
      if (fileList.length > 1) {
        fileList.shift()
      }
      this.upload_loading = true
      var data = file.raw
      const excel = await this.readFile(data)
      // 使用xlsx读取二进制数据 生成excel的全部信息
      var workbook = xlsx.read(excel, { type: 'binary' })
      // 通过xlsx转换为可读的表格数据
      // workbook.Sheets[workbook.SheetNames[0]] 获取当前上传的表格的信息,例如总共有几行几列啥的
      // data = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]).map(row => mapKeys(row, (value, key) => key.trim()))
      data = this.getDataRow(workbook.Sheets[workbook.SheetNames[0]])
      // const header = this.getHeaderRow(workbook.Sheets[workbook.SheetNames[0]])
      data.forEach(function (element) {
        element.predict_value = '-'
        element.gen_count = '-'
        element.gen_max = '-'
        element.gen_mean = '-'
        element.gen_min = '-'
        element.comp_count = '-'
        element.comp_max = '-'
        element.comp_mean = '-'
        element.comp_min = '-'
      })
      this.upload_loading = false
      this.tableData = data.slice(1)
    },
    readFile (file) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader()
        // 把文件转为二进制
        reader.readAsBinaryString(file)
        reader.onload = e => {
          // console.log(e.target.result)
          resolve(e.target.result)
        }
      })
    },
    getDataRow (sheet) {
      const data = []
      const range = xlsx.utils.decode_range(sheet['!ref'])
      let C
      let R
      const SR = range.s.r // 開始行
      // 遍歷每列
      for (R = range.s.r + 1; R <= range.e.r; ++R) {
        var obj = {}
        for (C = range.s.c; C <= range.e.c; ++C) {
          const cellname = sheet[xlsx.utils.encode_cell({ c: C, r: SR })]
          const cell = sheet[xlsx.utils.encode_cell({ c: C, r: R })]
          let hdr = '-'
          let ndr = '-'
          if (cell && cell.t) {
            hdr = xlsx.utils.format_cell(cell)
          }
          if (cellname && cellname.t) {
            ndr = xlsx.utils.format_cell(cellname)
          }
          obj[ndr.trim()] = hdr.trim()
        }
        data.push(obj)
      }
      return data
    },
    getHeaderRow (sheet) {
      const headers = []
      // 获取总共的行数和列数
      const range = xlsx.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r // 開始行
      // 遍歷每列
      for (C = range.s.c; C <= range.e.c; ++C) {
        // 找到每列的第一行数据即使表头
        const cell = sheet[xlsx.utils.encode_cell({ c: C, r: R })]
        const cellname = sheet[xlsx.utils.encode_cell({ c: C, r: R + 1 })]
        let hdr = 'UNKNOWN ' + C
        let ndr = 'UNKNOWN ' + C
        if (cell && cell.t) {
          hdr = xlsx.utils.format_cell(cell)
        }
        if (cellname && cellname.t) {
          ndr = xlsx.utils.format_cell(cellname)
        }
        var COLUMN_OPTION = { label: ndr.trim(), prop: hdr.trim() }
        headers.push(COLUMN_OPTION)
      }
      return headers
    },
    DownloadExcel () {
      const defaultCellStyle = { font: { name: 'Verdana', sz: 11, color: 'FF00FF88' }, fill: { fgColor: { rgb: 'FFFFAA00' } } }
      const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary', defaultCellStyle: defaultCellStyle, showGridLines: false }
      const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} }
      const data = this.tableData
      // this.tableData.forEach(function(value){
      //   if("children" in value){
      //     value["children"].tableData.forEach(function(childrenval){
      //       data.
      //     })
      //   }
      // })
      wb.Sheets.Sheet1 = xlsx.utils.json_to_sheet(data)
      // 建立二進位制物件寫入轉換好的位元組流
      const tmpDown = new Blob([this.s2ab(xlsx.write(wb, wopts))], { type: 'application/octet-stream' })
      FileSaver.saveAs(tmpDown, 'Prediction_File.xls')
    },
    s2ab (s) {
      if (typeof ArrayBuffer !== 'undefined') {
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; i++) {
          view[i] = s.charCodeAt(i) & 0xFF
        }
        return buf
      } else {
        var buf1 = new Array(s.length)
        for (var l = 0; l !== s.length; i++) {
          buf1[l] = s.charCodeAt(l) & 0xFF
        }
        return buf1
      }
    },
    current_change (currentPage) {
      this.currentPage = currentPage
    },
    indexMethod (index) {
      return ((this.currentPage - 1) * 10) + index + 1
    },
    PredictionAction () {
      this.loading = true
      userRequest.post('/work_hour_prediction_api', {
        start_predict: 'start_predict',
        data: this.tableData
      })
        .then((response) => {
          console.log(response.data)
          this.tableData = response.data
          this.loading = false
        })
        .catch((error) => console.log(error))
      this.ChartShow = true
    },
    SelectChange (model) {
      this.tableshow = false
      const output = data.HOURCOLUMN_DATA
      output.forEach(function (value) {
        if ('children' in value) {
          value.children.forEach(function (childrenval) {
            console.log('child', childrenval.prop)
            if (model.includes(childrenval.prop)) {
              childrenval.show = true
              console.log(true)
            } else {
              childrenval.show = false
              console.log(false)
            }
          })
        } else {
          console.log('not', value.prop)
          // console.log(this.option_model)
          if (model.includes(value.prop)) {
            value.show = true
            console.log(true)
          } else {
            value.show = false
            console.log(false)
          }
        }
      })
      console.log(output)
      this.column_model = output
      this.tableshow = true
    },
    predictstyle (row, column, rowIndex, columnIndex) {
      if (row.column.property === 'predict_value') {
        console.log(row.row)
        if (row.row.predict_value > row.row.comp_max || row.row.predict_value < row.row.comp_min || row.row.predict_value > row.row.gen_max || row.row.predict_value < row.row.gen_min) {
          return 'color:#DF5E5E'
        }
      }
    }
  }
}

</script>
<style lang="scss">
@import './style/prediction.css'
</style>
