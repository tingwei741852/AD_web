  <template>
    <el-dialog title="修改資料" :visible.sync="dialogFormVisible"  width="40%">
      <el-form :model="form" label-width="80px" size="medium" label-position="top">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="共同編碼">
              <el-input v-model="form.code"></el-input>
            </el-form-item>
            </el-col>
          <el-col :span="12">
            <el-form-item label="標準材質">
              <el-input v-model="form.material" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="類別" >
                <el-select v-model="form.category" placeholder="請選擇類別">
                  <el-option label="金屬板" value="金屬板"></el-option>
                  <el-option label="金屬片" value="金屬片"></el-option>
                  <el-option label="金屬管" value="金屬管"></el-option>
                  <el-option label="金屬桿" value="金屬桿"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="d  ">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">確 定</el-button>
      </div>
    </el-dialog>
  </template>
  

<script>
export default {
  name: 'Editdialog',
  props: {
    dialogFormVisible: Boolean,
    form: {
      code: String,
      material: String,
      category: String
    }
  }
}
</script>
