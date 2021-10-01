<template>
  <!-- <el-dialog title="新增待預測資料" :visible="dialogFormVisible" @close="onClose" width="80%">
  <el-card> -->
  <el-container vertical>
    <el-main>
      <table>
        <!-- <tr v-for="(form, idx) in forms" v-bind:key="idx"> -->
        <tr>
          <td>
            類別
            <el-select v-model="form.category" filterable   placeholder="請選擇類別">
              <el-option
                v-for="item in options.category"
                :key="item.value"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select>
            <!-- <el-input v-model="form.category" placeholder="請輸入類別"></el-input> -->
          </td>
          <td>
            標準材質
            <el-select v-model="form.std_mat" filterable   placeholder="請選擇標準材質">
              <el-option
                v-for="item in options.std_mat"
                :key="item.value"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select>
            <!-- <el-input v-model="form.std_mat" placeholder="請輸入標準材質"></el-input> -->
          </td>
          <td>
            標準規範
            <el-select v-model="form.std_reg" filterable  placeholder="請選擇標準規範">
              <el-option
                v-for="item in options.std_reg"
                :key="item.value"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select>
            <!-- <el-input v-model="form.std_reg" placeholder="請輸入標準規範"></el-input> -->
          </td>
          <td>
            厚
            <el-input type="number" v-model="form.thickness" placeholder="請輸入厚"></el-input>
          </td>
          <td>
            寬
            <el-input type="number" v-model="form.width" placeholder="請輸入寬"></el-input>
          </td>
          <td>
            長
            <el-input type="number" v-model="form.length" placeholder="請輸入長"></el-input>
          </td>
          <td>
            規範附註
            <el-input v-model="form.reg_sup" placeholder="請輸入規範附註"></el-input>
          </td>
        </tr>
      </table>
    </el-main>
    <el-footer>
      <div class="footer-block">
        <el-button @click="VisibleFunction">取 消</el-button>
        <el-button type="primary" @click="InsertFunction">新增</el-button>
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
    form: Object,
    options: Object
  },
  methods: {
    querySearch (queryString, cb) {
      var category = this.options.category
      console.log('category', category)
      var results = queryString ? category.filter(this.createFilter(queryString)) : category
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (category) => {
        return (category.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    }
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
