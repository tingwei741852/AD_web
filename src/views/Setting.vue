<template>
  <div class="setting">
    <div class="page_title">
      <h2 class="title_text" style="margin-top:15px;">材質對照表</h2>
      <div class="title_line"></div>
    </div>
    <div class="btn_block">
      <div class="upload_btn">
        <el-upload class="upload-demo" action="#" accept=".xls, .xlsx" :auto-upload="false"
          :show-file-list="true" :file-list="fileList" :multiple="false">
          <el-button type="primary" :loading="upload_loading">檔案上傳批次更新</el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上傳文件，且不超过500kb</div> -->
        </el-upload>
      </div>
      <!-- <el-button type="primary" :disabled="tableData.length <= 0">檔案檢查</el-button> -->
      <el-button type="primary">修改勾選資料</el-button>
      <el-button type="primary">刪除勾選資料</el-button>
      <span style="margin-left:12px; vertical-align: top;display: inline-block;">
        <excel-export :sheet="sheet_demo" filename="Setting_Demo"><el-button type="primary">下載樣板</el-button></excel-export>
      </span>
    </div>
    <div class="table_block">
      <el-card class="box-card">
        <el-table ref="multipleTable" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"   style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod"
            width="40">
          </el-table-column>
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="code"
            label="共同編碼">
          </el-table-column>
          <el-table-column
            prop="category"
            label="類別">
          </el-table-column>
          <el-table-column
            prop="material"
            label="標準材質">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="編輯" placement="bottom">
                  <el-button type="primary" icon="el-icon-edit" size="small" @click="EditRowDate(scope.row)" circle></el-button>
                </el-tooltip>
              <el-tooltip class="item" effect="dark" content="檢視紀錄" placement="bottom">
                <el-button type="primary" icon="el-icon-tickets" size="small" @click="EditRowDate(scope.row)" circle></el-button>
              </el-tooltip>
            </template>
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
    </div>
    <edit-dialog :dialogFormVisible="dialogFormVisible" :form="dialogform"></edit-dialog>
  </div>
</template>
<script>
import * as data from './data/setting_column'
import SettingData from './data/setting_data.json'
import { ExcelExport } from 'pikaz-excel-js'
import Editdialog from './MessageBox/EditMaterial'

export default {
  components: {
    ExcelExport,
    'edit-dialog': Editdialog
  },
  data () {
    return {
      tableData: SettingData,
      fileList: [],
      upload_loading: false,
      currentPage: 1,
      pagesize: 10,
      dialogFormVisible: false,
      dialogform: {
        code: '',
        material: '',
        category: ''
      },
      sheet_demo: [{
        tHeader: data.COLUMN_KEY,
        table: data.COLUMN_CHINESE,
        keys: data.COLUMN_KEY,
        sheetName: 'Sheet1'
      }]
    }
  },
  methods: {
    current_change (currentPage) {
      this.currentPage = currentPage
    },
    indexMethod (index) {
      return ((this.currentPage - 1) * 10) + index + 1
    },
    EditRowDate (data) {
      // this.$alert({  })
      this.dialogform.code = data.code
      this.dialogform.material = data.material
      this.dialogform.category = data.category
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
@import './style/prediction.css'
</style>
