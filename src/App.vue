<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/"><img src="./views/static/images/logo.png" style="width:30px;padding-bottom:5px;padding-right:5px"> AIDC預測系統</router-link>
        <div class='avator'>
          <el-popover placement="top-start" width="150" trigger="hover">
              <p class='user_title'>您好!</p>
              <ul class="UserList">
                <li @click="logout()"><i class="fas fa-sign-out-alt" style="margin-right:15px;" ></i>登出</li>
                <li @click="toback()"><i class="fas fa-table" style="margin-right:15px;" ></i>後台</li>
              </ul>
              <div class="avator" slot="reference"><i class="fas fa-user-circle fa-2x"></i></div>
            </el-popover>
        </div>
        <ul class='NavList' id="NavList">
            <!-- <router-link to="/setting"><li>
              SETTING
            </li></router-link> -->
            <router-link to="/Prediction_Hour"><li>
              工時預測
            </li></router-link>
            <router-link to="/Prediction_ROM"><li>
              物料報價
            </li></router-link>
             <router-link to="/Train"><li>
              模型訓練
            </li></router-link>
            <!-- <li>
              <el-dropdown>
                <span class="el-dropdown-link" style="font-weight:bold">
                  報價預測
                </span>
                <el-dropdown-menu slot="dropdown">
                  <router-link to="/Prediction_ROM"><el-dropdown-item>ROM報價</el-dropdown-item></router-link>
                  <router-link to="/Prediction_Hour"><el-dropdown-item>工時預測</el-dropdown-item></router-link>
                </el-dropdown-menu>
              </el-dropdown>
            </li> -->
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// import axios from 'axios'
import { userRequest, baseURL } from './axios.js'
export default {
  methods: {
    logout () {
      userRequest.post('/accounts/logout_api/')
        .then((resp) => {
          if (resp.data.status === 'notpass') {
            window.location.href = '/'
          } else {
            this.$alert('登出失敗', '登出錯誤', {
              confirmButtonText: '確定'
            })
          }
        })
        .catch((error) => console.log(error))
    },
    toback () {
      window.open(baseURL + '/admin/', '_blank')
    }
  }
}
</script>
<style lang="scss">
  @font-face {
    font-family: custom-sans-serif;
    src: local("Heiti TC"), local("微軟正黑體"), local("Microsoft JhengHei");
    unicode-range: U+4E00-9FFF;
  }

  @font-face {
    font-family: custom-sans-serif;
    src: local(Helvetica), local(Segoe UI);
    unicode-range: U+00-024F;
  }

  #app {
    font-family: custom-sans-serif;
    //   -webkit-font-smoothing: antialiased;
    //   -moz-osx-font-smoothing: grayscale;
    //   text-align: center;
    //   color: #2c3e50;
  }

  body {
    margin: 0
  }

  #nav {
    padding: 15px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: rgb(127, 16, 132);
    color: #ffffff;

    a {
      font-weight: bold;
      color: #ffffff;
      text-decoration: none;

      &.router-link-exact-active {
        color: #ffffff;
      }
    }

    .NavList {
      float: right;
      margin: 0;
    }

    .NavList li {
      display: inline-block;
      margin: 0;
      padding: 0;
      margin-right: 15px;
      cursor: pointer;

      i {
        color: #ffffff;
        font-size: 20px;
      }
    }
  }

  .avator {
    font-size: 20px;
    float: right;
    cursor: pointer;
    // display: inline-block;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
    font-size: 20px;
    padding: 0;
  }

  .user_title {
    font-weight: bold;
    font-size: 18px;
    padding-left: 12px;
    padding-top: 12px;
  }

  .UserList{
    padding: 0;
  }
  .UserList li {
    list-style-type: none;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    text-align: left;
    cursor: pointer;
    margin: 0;
    transition-duration: .2s;
  }
  .UserList li:hover {
    background: rgba(96, 62, 116, .1);
    color: rgb(96, 62, 116);
  }
  .el-popover {
    padding: 0 !important;
  }

</style>
