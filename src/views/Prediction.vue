<template>
  <div class="home">
    <div class="page_title">
      <h2 class="title_text" style="margin-top:15px;">報價預測</h2>
      <div class="title_line"></div>
    </div>
    <div class="btn_block">
      <div class="upload_btn">
        <el-upload class="upload-demo" action="#" :on-change="handleChange" accept=".xls, .xlsx" :auto-upload="false"
          :show-file-list="true" :file-list="fileList" :multiple="false">
          <el-button type="primary" :loading="upload_loading">檔案上傳</el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上傳文件，且不超过500kb</div> -->
        </el-upload>
      </div>
      <!-- <el-button type="primary" :disabled="tableData.length <= 0">檔案檢查</el-button> -->
      <el-button type="primary" :disabled="tableData.length <= 0" @click="PredictionAction">開始預測</el-button>
      <el-button type="primary" :disabled="!ChartShow">下載結果</el-button>
    </div>
    <div class="table_block">
      <el-card class="box-card">
        <div style="float:right;margin-bottom:15px">
          <el-select value-key="prop" v-model="column_model" multiple collapse-tags  placeholder="請選擇顯示欄位">
            <el-option v-for="item in column_option" :key="item.prop" :label="item.label" :value="item" :disabled="item.disabled">
            </el-option>
          </el-select>
          </div>
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column v-for="item in column_model" :key="item.prop" :prop="item.prop" :label="item.label" :fixed="item.fixed">
          </el-table-column>
        </el-table>
        <div style="text-align:center; margin-top:15px;">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="tableData.length"
            @current-change="current_change">
          </el-pagination>
        </div>
      </el-card>
      <div v-if="ChartShow">
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
      </div>
    </div>
  </div>
</template>

<script>
import * as data from './data/prediction_column'
// import FileSaver from 'file-saver'
import xlsx from 'xlsx'
import * as BoxData from './data/Box_data'
import Box from './chart/Box'
export default {
  data () {
    return {
      tableData: [],
      column_option: data.COLUMN_DATA,
      column_model: data.COLUMN_DATA,
      fileList: [],
      tableHeader: [],
      currentPage: 1,
      pagesize: 10,
      upload_loading: false,
      Boxtdata: BoxData.BOX_SAMPLE,
      ChartShow: false
    }
  },
  components: {
    'box-chart': Box
  },
  created: function () {
    console.log(this.Boxtdata)
  },
  methods: {
    async handleChange (file, fileList) {
      this.upload_loading = true
      var data = file.raw
      const excel = await this.readFile(data)
      // 使用xlsx读取二进制数据 生成excel的全部信息
      var workbook = xlsx.read(excel, { type: 'binary' })
      // 通过xlsx转换为可读的表格数据
      // workbook.Sheets[workbook.SheetNames[0]] 获取当前上传的表格的信息,例如总共有几行几列啥的
      // data = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]).map(row => mapKeys(row, (value, key) => key.trim()))
      data = this.getDataRow(workbook.Sheets[workbook.SheetNames[0]])
      const header = this.getHeaderRow(workbook.Sheets[workbook.SheetNames[0]])
      console.log(header)
      console.log(data)
      this.tableData = data.slice(1)
      this.upload_loading = false
      this.column_option = header
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
          let hdr = 'UNKNOWN ' + C
          let ndr = 'UNKNOWN ' + C
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
    current_change (currentPage) {
      this.currentPage = currentPage
    },
    indexMethod (index) {
      return ((this.currentPage - 1) * 10) + index + 1
    },
    PredictionAction () {
      var datalist = this.tableData
      for (var k in datalist) {
        var upper = parseInt(Math.random() * (500 - 50 + 1) + 50, 10)
        var lower = parseInt(Math.random() * (upper - 40 + 1) + 40, 10)
        var standard = parseInt(Math.random() * (10 - 2 + 1) + 2, 10)
        var avg = (upper + lower) / 2
        var q1 = (avg + lower) / 2
        var q3 = (avg + upper) / 2
        datalist[k].prediction = avg
        datalist[k].upper = upper
        datalist[k].lower = lower
        datalist[k].standard = standard
        datalist[k].q1 = q1
        datalist[k].q3 = q3
      }
      this.ChartShow = true
    }
  }
}

</script>
<style>
@import './style/prediction.css'
</style>
