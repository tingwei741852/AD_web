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
  created: function () {
    
  },
  methods: {
    loginaction (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          window.location.href = '/prediction'
        }
      })
    }
  }
}
</script>
<style>
  @import './style/login.css'
</style>
