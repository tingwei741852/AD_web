<template>
  <div class="setting">
    <div class="page_title">
      <h2 class="title_text" style="margin-top:15px;">模型訓練</h2>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <h3 class="type_title">物料報價模型</h3>
           <el-button  type="primary" @click="price_dialogVisible = true">重新訓練</el-button>
           <span style="margin-left:15px;font-weight:bold">最新金屬價格資料日期:{{price_date}}</span>
           <el-card class="box-card">
              <el-table v-loading="price_loading" element-loading-text="模型訓練中" element-loading-spinner="el-icon-loading"  style="width: 100%" :data="price_data.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <el-table-column
                  type="index"
                  :index="indexMethod"
                  width="40">
                </el-table-column>
                <el-table-column
                prop="model"
                label="模型名稱">
                </el-table-column>
                <el-table-column
                prop="mape"
                label="MAPE">
                </el-table-column>
              </el-table>
              <div style="text-align:center; margin-top:15px;">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="price_data.length"
                  @current-change="current_change">
                </el-pagination>
              </div>
           </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <h3 class="type_title">工時預測模型</h3>
           <el-button  type="primary" @click="hour_dialogVisible=true">重新訓練</el-button>
           <el-card class="box-card">
              <el-table v-loading="hour_loading" element-loading-text="模型訓練中" element-loading-spinner="el-icon-loading"  style="width: 100%" :data="hour_data.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <el-table-column
                  type="index"
                  :index="indexMethod"
                  width="40">
                </el-table-column>
                <el-table-column
                prop="model"
                label="模型名稱">
                </el-table-column>
                <el-table-column
                prop="mape"
                label="MAPE">
                </el-table-column>
              </el-table>
           </el-card>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="price_dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>請確定已更新資料庫中的物料報價資料再重新訓練模型，當前資料庫中最新金屬價格資料日期為:{{price_date}}，確定要重新訓練模型嗎?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="price_dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="price_retrain">確 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="hour_dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>請確定已更新資料庫中的工時資料再重新訓練模型，確定要重新訓練模型嗎?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="hour_dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="hour_retrain">確 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { userRequest } from '../axios.js'
export default {
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      price_data: [],
      hour_data: [],
      price_date: '',
      price_dialogVisible: false,
      hour_dialogVisible: false,
      hour_loading: false,
      price_loading: false
    }
  },
  methods: {
    indexMethod (index) {
      return ((this.currentPage - 1) * 10) + index + 1
    },
    current_change (currentPage) {
      this.currentPage = currentPage
    },
    price_retrain () {
      this.price_dialogVisible = false
      this.price_loading = true
      userRequest.post('/price_train/')
        .then((response) => {
          this.price_loading = false
        })
        .catch((error) => console.log(error))
    },
    hour_retrain () {
      this.hour_dialogVisible = false
      this.hour_loading = true
      userRequest.post('/work_hour_train_api/', {
        train_type: 'train'
      })
        .then((response) => {
          this.hour_loading = false
        })
        .catch((error) => console.log(error))
    }
  },
  mounted () {
    userRequest.get('/get_price_model/')
      .then((response) => {
        this.price_data = response.data
      })
      .catch((error) => console.log(error))
    userRequest.get('/get_hour_model/')
      .then((response) => {
        this.hour_data = response.data
      })
      .catch((error) => console.log(error))
    userRequest.get('/get_newest_market_price/')
      .then((response) => {
        console.log(response.data)
        this.price_date = response.data.max_date
      })
      .catch((error) => console.log(error))
  }
}
</script>

<style>
@import './style/train.css'
</style>
