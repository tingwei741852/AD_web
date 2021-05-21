<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/"><i class="fas fa-search-dollar"></i>報價預測</router-link>
        <div class='avator'>
          <el-popover placement="top-start" width="150" trigger="click">
              <p class='user_title'>您好! 小翔</p>
              <ul class="UserList">
                <li><i class="fas fa-sign-out-alt" style="margin-right:15px;"></i>登出</li>
              </ul>
              <div class="avator" slot="reference"><i class="fas fa-user-circle fa-2x"></i></div>
            </el-popover>
        </div>
        <ul class='NavList' id="NavList">
          <li>
            PREDICTION
          </li>
          <li>
            SETTING
          </li>
          <!-- <li>
            <el-popover placement="top-start" width="150" trigger="click">
              <p class='user_title'>您好! 小翔</p>
              <ul class="UserList">
                <li><i class="fas fa-sign-out-alt" style="margin-right:15px;"></i>登出</li>
              </ul>
              <div class="avator" slot="reference"><i class="fas fa-user-circle fa-2x"></i></div>
            </el-popover>
          </li> -->
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

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
    background-color: #613F75;
    color: #ffffff;
    font-size: 20px;

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
  }

  .UserList {
    padding: 0;
  }

  .UserList li {
    list-style-type: none;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
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
