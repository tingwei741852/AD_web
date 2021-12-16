<template>
  <!-- <el-dialog title="新增待預測資料" :visible="dialogFormVisible" @close="onClose" width="80%">
  <el-card> -->
  <el-container vertical>
    <el-main>
      <table>
        <!-- <tr v-for="(form, idx) in forms" v-bind:key="idx"> -->
        <tr>
           <td>
            美金匯率
            <el-input type="number" v-model="form.exchange_rate" placeholder="請輸入美金匯率"></el-input>
          </td>
          <td>
            鋁
            <el-input type="number" v-model="form.aluminum" placeholder="請輸入鋁價格"></el-input>
          </td>
          <td>
            銅
            <el-input type="number" v-model="form.copper" placeholder="請輸入銅價格"></el-input>
          </td>
          <td>
            鎳
            <el-input type="number" v-model="form.Ni" placeholder="請輸入鎳價格"></el-input>
          </td>
          <td>
            鉛
            <el-input type="number" v-model="form.Pb" placeholder="請輸入鉛價格"></el-input>
          </td>
          <td>
            白銀
            <el-input type="number" v-model="form.silver" placeholder="請輸入白鐵價格"></el-input>
          </td>
          <td>
            錫
            <el-input type="number" v-model="form.Sn" placeholder="請輸入錫價格"></el-input>
          </td>
        </tr>
      </table>
    </el-main>
    <el-footer>
      <div class="footer-block">
        <el-button type="primary" @click="InsertFunction">確認</el-button>
      </div>
    </el-footer>
  </el-container>
  <!-- </el-card> -->
</template>

<script>
export default {
  name: 'Insertdialog',
  props: {
    InsertFunction: Function,
    VisibleFunction: Function,
    form: Object
  }
}
</script>
<style>
  .el-select {
    width: 100%;
  }
  td{
    padding-left: 5px;
    padding-right: 5px;
  }
  .footer-block{
    float: right;
    margin-top: 20px;
    /* border: 1px solid #000; */
  }
</style>
