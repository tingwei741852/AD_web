<style>
  @import './style/aidclogin.css';

</style>
<template>
  <div class="body">
    <div class='logincard'>
      <div style='padding:10px'>
        <img src="./static/images/AIDC_Taiwan_logo.svg" style="width:200px;height:240px;padding:3px;" />
        <h1 class="center" style="text-align: center;font-family: 微軟正黑體; font-weight:bold: center">
          漢翔航空工業股份有限公司</h1>
        <h1 class="center" style="text-align: center;font-family: 微軟正黑體; font-weight:bold: center">
          報價預測系統</h1>
        </div>
      <h3 style="background-color:black;color:white; font-size:30px">AI BOM System</h3>
      <div class='formblock'>
        <el-form :model="form" :rules="rules" ref="form" label-position="left" label-width="80px">
          <el-form-item label="帳號" prop="account">
              <el-input placeholder="請輸入帳號" v-model="form.account" clearable>
              </el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="password">
              <el-input type='password' placeholder="請輸入密碼" v-model="form.password" clearable>
              </el-input>
          </el-form-item>
        </el-form>
        <button class='loginbtn' @click="loginaction('form')">登入</button>
      </div>
      <div style="padding-top:5rem"></div>
    </div>
  </div>
</template>

<script>
import { userRequest } from '../axios.js'
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '請輸入帳號', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    loginaction (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userRequest.post('/accounts/login_api/', {
            username: this.form.account,
            password: this.form.password
          })
            .then((resp) => {
              console.log(resp.data)
              if (resp.data.status === 'pass') {
                window.location.href = '/'
              } else {
                this.$alert('帳號或密碼錯誤', '登入錯誤', {
                  confirmButtonText: '確定'
                })
              }
            })
            .catch((error) => console.log(error))
        }
      })
    }
  }
}
</script>
