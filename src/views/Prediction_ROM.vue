<template>
  <div class="prediction">
    <div class="page_title">
      <h2 class="title_text" style="margin-top:15px;">報價預測</h2>
      <!-- <div class="title_line"></div> -->
    </div>
    <div class="btn_block">
      <div class="upload_btn">
        <el-upload class="upload-demo" action="#" :on-change="handleChange" accept=".xls, .xlsx" :auto-upload="false"
          :show-file-list="false" :file-list="fileList">
          <el-button type="primary" :loading="upload_loading">檔案上傳</el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上傳文件，且不超过500kb</div> -->
        </el-upload>
      </div>
      <el-button  type="primary" @click="dialogFormVisible=true">手動新增資料</el-button>
      <el-button  type="primary" @click="price_dialogFormVisible=true">輸入市場金屬價格</el-button>
      <!-- <el-button type="primary" :disabled="tableData.length <= 0">檔案檢查</el-button> -->
      <span style="margin-left:12px; vertical-align: top;display: inline-block;">
        <excel-export :sheet="sheet_demo" filename="Prediction_Demo"><el-button type="primary">下載樣板</el-button></excel-export>
      </span>
      <span style="margin-left:12px; vertical-align: top;display: inline-block;">
        <excel-export :sheet="sheet" filename="Prediction_File"><el-button type="primary" :disabled="!ChartShow">下載結果</el-button></excel-export>
      </span>
      <span style="margin-left:12px;">
        <el-button :disabled="tableData.length<=0" type="primary" @click="DataCheck()">資料檢查</el-button>
      </span>
      <span style="margin-left:12px;">
        <el-button :disabled="!data_flag" type="primary" @click="PredictionAction">開始預測</el-button>
      </span>
    </div>
    <div style="margin-top:15px;vertical-align:bottom">
      <div style="display: inline-block;margin-left:10px; width:180px">
        <div>統計數據年份範圍:</div>
        <el-select v-model="time_period" placeholder="請選擇預測年份範圍">
          <el-option
            key=""
            label="全部"
            value="">
          </el-option>
          <el-option
            v-for="item in 10"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <div class = "errordatarow" v-show="errordatarow.length > 0" @click="error_row_detail = true">
        <div>錯誤資料ID:</div>
        {{errordatarow}}
      </div>
      <!-- <div style="display: inline-block;margin-left:10px; width:180px;font-weight: bold;" v-show="errordatarow.length > 0">
        <div>有錯誤資料的頁數:</div>
        {{errordatapage}}
      </div> -->
    </div>
    <div class="table_block">
      <el-card class="box-card">
        <div style="margin-bottom:15px">
          <span style="vertical-align: top;display: inline-block;">
            <el-button  type="primary" @click="deleteselect"  :disabled="tableSelection.length===0">刪除選取資料</el-button>
          </span>
          <span style="vertical-align: top;display: inline-block;margin-left:15px">
            <el-button  type="primary" @click="deleterrordata" :disabled="errordatarow.length===0">刪除錯誤資料</el-button>
          </span>
          <span style="vertical-align: top;display: inline-block;margin-left:15px">
            <el-button  type="primary">刪除所有資料</el-button>
          </span>
           <span style="vertical-align: top;display: inline-block; float:right;">
            <el-select value-key="prop" v-model="column_model" multiple collapse-tags  placeholder="請選擇顯示欄位">
              <el-option v-for="item in column_option" :key="item.prop" :label="item.label" :value="item" :disabled="item.disabled">
              </el-option>
            </el-select>
          </span>
          </div>
          <div class='filterblock'>
          資料篩選
          <el-form ref="filterform" :model="filterform" :inline="true">
            <el-form-item label="類別">
              <!-- <el-input v-model="filterform.category" placeholder="請選擇顯示類別"></el-input> -->
              <!-- {{filterform.category}} -->
               <el-select @change='changeSelect("category")' v-model="filterform.category" multiple collapse-tags filterable  placeholder="請選擇顯示類別">
                <!-- <el-option label='全選' value='' @click.native='selectAll("category")'></el-option> -->
                 <el-checkbox v-model="filtercheck.category" @change='selectAll("category")'>全選</el-checkbox>
                <el-option
                  v-for="item in filteroption.category"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="標準材質">
              <!-- <el-input v-model="filterform.std_mat" placeholder="請選擇標準材質"></el-input> -->
              <el-select @change='changeSelect("std_mat")' v-model="filterform.std_mat" multiple collapse-tags filterable  placeholder="請選擇顯示標準材質">
                <!-- <el-option label='全選' value='' @click.native='selectAll("std_mat")'></el-option> -->
               <el-checkbox v-model="filtercheck.std_mat" @change='selectAll("std_mat")'>全選</el-checkbox>
                <el-option
                  v-for="item in filteroption.std_mat"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="標準規範">
              <!-- <el-input v-model="filterform.std_reg" placeholder="請選擇標準規範"></el-input> -->
              <el-select @change='changeSelect("std_reg")'  v-model="filterform.std_reg"  multiple collapse-tags filterable  placeholder="請選擇顯示標準規範">
                <!-- <el-option label='全選' value='' @click.native='selectAll("std_reg")'></el-option> -->
                <el-checkbox v-model="filtercheck.std_reg" @change='selectAll("std_reg")'>全選</el-checkbox>
                <el-option
                  v-for="item in filteroption.std_reg"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="厚">
              <!-- <el-input v-model="filterform.std_reg" placeholder="請選擇標準規範"></el-input> -->
              <el-select @change='changeSelect("thickness")'  v-model="filterform.thickness"  multiple collapse-tags filterable  placeholder="請選擇顯示厚度">
                <!-- <el-option label='全選' value='' @click.native='selectAll("thickness")'></el-option> -->
                <el-checkbox v-model="filtercheck.thickness" @change='selectAll("thickness")'>全選</el-checkbox>
                <el-option
                  v-for="item in filteroption.thickness"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="寬">
              <el-select @change='changeSelect("width")'  v-model="filterform.width"  multiple collapse-tags filterable  placeholder="請選擇顯示寬度">
                 <!-- <el-option label='全選' value='' @click.native='selectAll("width")'></el-option> -->
                <el-checkbox v-model="filtercheck.width" @change='selectAll("width")'>全選</el-checkbox>
                <el-option
                  v-for="item in filteroption.width"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
             <el-form-item label="長">
              <el-select @change='changeSelect("length")'  v-model="filterform.length"  multiple collapse-tags filterable  placeholder="請選擇顯示長度">
                 <!-- <el-option label='全選' value='' @click.native='selectAll("length")'></el-option> -->
                <el-checkbox v-model="filtercheck.length" @change='selectAll("length")'>全選</el-checkbox>
                <el-option
                  v-for="item in filteroption.length"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <!-- {{error_msg}} -->
        <el-table  :data="displaytabledata"  :header-cell-style="{ background: '#f5f7fa' }" :cell-style="predictstyle" :row-style="{height: '70px'}" style="width: 100%" v-loading="loading" element-loading-text="計算中..."  @selection-change="handleSelectionChange">
          <el-table-column
          type="selection"
          width="55">
          </el-table-column>
          <af-table-column label="ID" prop="id">
          </af-table-column>
          <af-table-column v-for="item in column_option.filter(item => item.show == true)" :key="item.prop" :prop="item.prop" :label="item.label" :fixed="item.fixed">
            <template slot-scope="scope">
              {{scope.row[item.prop]}}
              <!-- <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right" v-show="error_msg['error_message'][item.prop]['item'].indexOf(scope.$index) > 0"> -->
                <span v-if="error_msg['error_message'][item.prop]" style="color:#DF5E5E">
                  <el-tooltip class="item" effect="dark" :content="error_msg['error_message'][item.prop]['msg']" placement="right" v-show="error_msg['error_message'][item.prop]['item'].indexOf(scope.row['id']) >= 0">
                <i class="el-icon-warning"></i>
               </el-tooltip></span>
            </template>
          </af-table-column>
        </el-table>
        <div style="text-align:center; margin-top:15px;">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="filtertabledata.length"
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
    <el-dialog title="新增待預測資料" :visible.sync="dialogFormVisible"  width="80%">
      <insert-dialog :form="dialogform" :InsertFunction="InsertFunction" :VisibleFunction="VisibleFunction"  :options="insertoptions"></insert-dialog>
    </el-dialog>
    <el-dialog title="輸入金屬價格" :visible.sync="price_dialogFormVisible"  width="80%">
      <insert-price-dialog :form="price_dialogform" :InsertFunction="price_InsertFunction"></insert-price-dialog>
    </el-dialog>
    <el-dialog title="錯誤筆數詳細資訊" :visible.sync="error_row_detail"  width="80%">
      <el-table :data="error_row_tableData">
        <el-table-column
        prop="row"
        label="錯誤ID">
        </el-table-column>
        <el-table-column
        prop="excel_row"
        label="Excel顯示錯誤筆數">
        </el-table-column>
        <el-table-column
        prop="reason"
        label="錯誤原因">
        </el-table-column>
      </el-table>
     <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="error_row_detail = false">確 定</el-button>
      </span>
    </el-dialog>
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
import Insertdialog from './component/InsertPredict'
import InsertPricedialog from './component/InsertMatPrice'

var FileSaver = require('file-saver')
export default {
  components: {
    ExcelExport,
    'insert-dialog': Insertdialog,
    'insert-price-dialog': InsertPricedialog
  },
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
      ChartShow: false,
      loading: false,
      sheet_demo: [{
        tHeader: data.COLUMN_KEY,
        table: data.COLUMN_CHINESE,
        keys: data.COLUMN_KEY,
        sheetName: 'Sheet1'
      }],
      excelstyle: [],
      dialogform: {
        category: '',
        std_mat: '',
        std_reg: '',
        thickness: '',
        width: '',
        length: '',
        reg_sup: '',
        id: 0
      },
      price_dialogform: {
        exchange_rate: '',
        aluminum: '',
        copper: '',
        Ni: '',
        Pb: '',
        silver: '',
        Sn: ''
      },
      dialogFormVisible: false,
      price_dialogFormVisible: false,
      insertoptions: { category: [], std_mat: [], std_reg: [] },
      tableSelection: [],
      deletebtndisabled: true,
      filterform: { category: [], std_mat: [], std_reg: [], thickness: [], width: [], length: [] },
      filteroption: { category: [], std_mat: [], std_reg: [], thickness: [], width: [], length: [] },
      filtercheck: { category: true, std_mat: true, std_reg: true, thickness: true, width: true, length: true },
      time_period: '',
      data_flag: false,
      error_msg: data.PRICE_ERROR_MSG,
      error_row_detail: false,
      error_row_tableData: [],
      errordatarow: []
      // dataindex: 0
    }
  },
  computed: {
    sheet: function () {
      var cn = []
      var ck = []
      data.COLUMN_DATA.forEach(function (value) {
        cn.push(value.label)
        ck.push(value.prop)
      })
      var output =
      [
        {
          tHeader: cn,
          table: this.tableData,
          keys: ck,
          sheetName: 'Sheet1',
          cellStyle: this.excelstyle
        }
      ]
      return output
    },
    displaytabledata: function () {
      // console.log(data, (this.filterDataByCategory(this.filterDataByStdMat(this.filterDataByStdReg(this.filterDataBythickness(this.filterDataBywidth(this.filterDataBylength(this.tableData))))))).slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize))
      return (this.filterDataByCategory(this.filterDataByStdMat(this.filterDataByStdReg(this.filterDataBythickness(this.filterDataBywidth(this.filterDataBylength(this.tableData))))))).slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
    },
    filtertabledata: function () {
      return (this.filterDataByCategory(this.filterDataByStdMat(this.filterDataByStdReg(this.filterDataBythickness(this.filterDataBywidth(this.filterDataBylength(this.tableData)))))))
    },
    // errordatarow: function () {
    //   var error_array = this.error_msg.error_message
    //   var errordatarow = []
    //   var errortabledatarow = []
    //   for (var key in error_array) {
    //     error_array[key].item.forEach(function (value, index, array) {
    //       if (errordatarow.indexOf(value) === -1) {
    //         errordatarow.push(value + 1)
    //       }
    //       var errortabledatarow_ele = { row: key, excel_row: key + 2, reason: error_array[key].msg }
    //       errortabledatarow.push(errortabledatarow_ele)
    //     })
    //   }
    //   errordatarow.sort(function (a, b) {
    //     return a - b
    //   })
    //   errortabledatarow.sort(function (a, b) {
    //     return a - b
    //   })
    //   this.error_row_tableData = errortabledatarow
    //   return errordatarow
    // },
    errordatapage: function () {
      var error_page_array = this.errordatarow
      var errordatarow = []
      for (var key in error_page_array) {
        var value = Math.floor(error_page_array[key] / this.pagesize) + 1
        if (errordatarow.indexOf(value) === -1) {
          errordatarow.push(value)
        }
      }
      errordatarow.sort(function (a, b) {
        return a - b
      })
      return errordatarow
    }
  },
  watch: {
    'dialogform.category': function (value) {
      this.dialogform.std_mat = ''
      this.dialogform.std_reg = ''
      userRequest.post('/get_std_mat/', {
        category: value
      })
        .then((response) => {
          this.insertoptions.std_mat = response.data
        })
        .catch((error) => console.log(error))
    },
    'dialogform.std_mat': function (value) {
      this.dialogform.std_reg = ''
      userRequest.post('/get_std_reg/', {
        category: this.dialogform.category,
        std_mat: value
      })
        .then((response) => {
          this.insertoptions.std_reg = response.data
        })
        .catch((error) => console.log(error))
    },
    error_msg: function (value) {
      var error_array = value.error_message
      console.log(error_array)
      var errordatarow = []
      var errortabledatarow = []
      for (var key in error_array) {
        error_array[key].item.forEach(function (value, index, array) {
          if (errordatarow.indexOf(value) === -1) {
            errordatarow.push(value)
          }
          var errortabledatarow_ele = { row: value, excel_row: value + 2, reason: error_array[key].msg }
          errortabledatarow.push(errortabledatarow_ele)
        })
      }
      errordatarow.sort(function (a, b) {
        return a - b
      })
      errortabledatarow.sort(function (a, b) {
        return a - b
      })
      this.error_row_tableData = errortabledatarow
      this.errordatarow = errordatarow
    },
    tableData: function (value) {
      // console.log(this.column_option)
      this.column_option[3].show = false
      const setcategory = new Set()
      const setstdmat = new Set()
      const setstdreg = new Set()
      const setthickness = new Set()
      const setwidth = new Set()
      const setlength = new Set()
      const stylearray = []
      value.forEach(function (element, index, array) {
        setcategory.add(element.category)
        setstdmat.add(element.std_mat)
        setstdreg.add(element.std_reg)
        setthickness.add(element.thickness)
        setwidth.add(element.width)
        setlength.add(element.length)
        if (element.predict_value > element.max || element.predict_value < element.min) {
          const styleobj = { cell: 'H' + (index + 2), font: { color: { rgb: 'DF5E5E' } } }
          stylearray.push(styleobj)
          console.log(stylearray)
          // this.excelstyle.append(styleobj)
        }
      })
      if (Array.from(setcategory).indexOf('E')) {
        this.column_option[3].show = true
      }
      this.excelstyle = stylearray
      this.filteroption.category = Array.from(setcategory).sort()
      this.filteroption.std_reg = Array.from(setstdreg).sort()
      this.filteroption.std_mat = Array.from(setstdmat).sort()
      this.filteroption.thickness = Array.from(setthickness).sort()
      this.filteroption.width = Array.from(setwidth).sort()
      this.filteroption.length = Array.from(setlength).sort()
      this.filterform.category = Array.from(setcategory).sort()
      this.filterform.std_reg = Array.from(setstdreg).sort()
      this.filterform.std_mat = Array.from(setstdmat).sort()
      this.filterform.thickness = Array.from(setthickness).sort()
      this.filterform.width = Array.from(setwidth).sort()
      this.filterform.length = Array.from(setlength).sort()
      this.error_msg = data.PRICE_ERROR_MSG
      this.data_flag = false
    }
  },
  mounted () {
    userRequest.get('/get_category/')
      .then((response) => {
        this.insertoptions.category = response.data
      })
      .catch((error) => console.log(error))
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
      data = data.slice(1)
      console.log(data)
      // const header = this.getHeaderRow(workbook.Sheets[workbook.SheetNames[0]])
      data.forEach(function (value, index, array) {
        array[index].id = index + 1
      })
      console.log(data)
      this.tableData = data
      // this.tableData = data
      // console.log(this.tableData)
      this.upload_loading = false
      // this.column_option = header
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
      var check_mark = true
      for (const [key, value] of Object.entries(this.price_dialogform)) {
        if (value === '') {
          check_mark = false
        }
      }
      if (check_mark) {
        this.loading = true
        userRequest.post('/price_prediction_api/', {
          start_predict: 'start_predict',
          time_period: this.time_period,
          market_price_info: this.price_dialogform,
          data: this.tableData
        })
          .then((response) => {
          // console.log('response', response.data)
            this.tableData = response.data
            this.loading = false
          })
          .catch((error) => console.log(error))
        this.ChartShow = true
      } else {
        this.$alert('請輸入市場金屬價格', '提醒', {
          confirmButtonText: '確定',
          callback: action => {
            this.price_dialogFormVisible = true
          }
        })
      }
    },
    predictstyle (row) {
      if (row.column.property === 'predict_value') {
        if (row.row.predict_value > row.row.max || row.row.predict_value < row.row.min) {
          // this.excelstyle.push(styleobj)
          return 'color:#DF5E5E'
        }
      }
    },
    VisibleFunction () {
      this.dialogFormVisible = false
    },
    price_VisibleFunction () {
      this.price_dialogFormVisible = false
    },
    price_InsertFunction () {
      this.price_dialogFormVisible = false
    },
    InsertFunction () {
      this.tableData.push(this.dialogform)
      var id = this.dialogform.id + 1
      this.dialogform = {
        category: '',
        std_mat: '',
        std_reg: '',
        thickness: '',
        width: '',
        length: '',
        reg_sup: '',
        id: id
      }
      this.dataindex += 1
      this.dialogFormVisible = false
    },
    onClose () {
      this.$emit('update:dialogVisible', false)
    },
    handleSelectionChange (val) {
      this.tableSelection = val
      console.log(this.tableData)
      if (val.length > 0) {
        this.deletebtndisabled = false
      } else {
        this.deletebtndisabled = true
      }
      console.log(this.tableSelection)
    },
    deleteselect () {
      // if (this.tableSelection.length === 0) {
      //   this.$alert('請勾選欲刪除資料', '提醒', {
      //     confirmButtonText: '確定'
      //   })
      // }
      var index = 0
      this.tableData.forEach(tablevalue => {
        console.log(this.tableSelection)
        this.tableSelection.forEach(selectvalue => {
          if (tablevalue.id === selectvalue.id) {
            this.tableData.splice(index, 1)
          }
        })
        index += 1
      })
    },
    // TabledataFilter () {
    //   return this.tableData.filter(
    //     data => (!this.filterform.category) || (this.data.category.toLowerCase().includes(this.filterform.category.toLowerCase()))
    //   ).slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
    // },
    filterDataByCategory: function (data) {
      return data.filter(data => this.filterform.category.some(el => data.category === el))
    },
    filterDataByStdMat: function (data) {
      return data.filter(data => this.filterform.std_mat.some(el => data.std_mat === el))
    },
    filterDataByStdReg: function (data) {
      return data.filter(data => this.filterform.std_reg.some(el => data.std_reg === el))
    },
    filterDataBythickness: function (data) {
      return data.filter(data => this.filterform.thickness.some(el => data.thickness === el))
    },
    filterDataBywidth: function (data) {
      return data.filter(data => this.filterform.width.some(el => data.width === el))
    },
    filterDataBylength: function (data) {
      return data.filter(data => this.filterform.length.some(el => data.length === el))
    },
    selectAll (prop) {
      this.filterform[prop] = []
      if (this.filtercheck[prop]) {
        this.filteroption[prop].map((item) => {
          this.filterform[prop].push(item)
        })
      } else {
        this.filterform[prop] = []
      }
    },
    changeSelect (prop) {
      if (this.filterform[prop].length === this.filteroption[prop].length) {
        this.filtercheck[prop] = true
      } else {
        this.filtercheck[prop] = false
      }
    },
    DataCheck () {
      this.loading = true
      userRequest.post('/price_data_check_api/', {
        data: this.tableData
      })
        .then((response) => {
          // console.log('response', response.data)
          this.data_flag = response.data.flag
          this.error_msg = response.data
          this.loading = false
          if (response.data.flag === true) {
            this.$alert('資料檢查通過，可開始進行預測', '資料檢查', {
              confirmButtonText: '確定'
            })
          } else {
            this.$alert('輸入欄位有誤，請修正後再進行檢查', '資料檢查', {
              confirmButtonText: '確定'
            })
          }
        })
        .catch((error) => console.log(error))
    },
    deleterrordata () {
      var index = 0
      this.tableData.forEach(tablevalue => {
        this.errordatarow.forEach(errorvalue => {
          if (tablevalue.id === errorvalue) {
            this.tableData.splice(index, 1)
          }
        })
        index += 1
      })
    }
  }
}

</script>
<style>
@import './style/prediction.css'
</style>
