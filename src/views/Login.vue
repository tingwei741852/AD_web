<template>
  <div class='body'>
    <div class='left bodyblock'>
      <div class='titleblock'>
        <p class='title1'>報價系統</p>
        <div class='titleline'></div>
        <p class='title2'>請先登入來操作系統功能</p>
      </div>
      <div class='imgblock'><img src='../img/login.png'></div>
    </div>
    <div class='right bodyblock'>
      <div class='loginblock'>
        <p class='logintitle'>LOGIN</p>
        <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm">
          <p class='logintitle1'>Account</p>
          <el-form-item prop="account">
            <p>
              <el-input placeholder="請輸入帳號" v-model="form.account" clearable>
              </el-input>
            </p>
          </el-form-item>
          <p class='logintitle1'>Password</p>
          <el-form-item prop="password">
            <p>
              <el-input type='password' placeholder="請輸入密碼" v-model="form.password" clearable>
              </el-input>
            </p>
          </el-form-item>
        </el-form>
        <button class='loginbtn' @click="loginaction('form')">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
          axios({
            method: 'POST',
            url: 'http://192.168.50.135:8000/accounts/login_api/',
            // url: 'http://192.168.50.135:8000/test',
            data: {
              // csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val(),
              username: this.form.account,
              password: this.form.password
            }
          })
            .then((resp) => {
              console.log(resp.data)
              if (resp.data.status === 'pass') {
                window.location.href = '/prediction'
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
<style>
  @import './style/login.css'
</style>
