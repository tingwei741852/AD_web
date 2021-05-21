<template>
  <div class="home">
    <div class="page_title">
      <h2 class="title_text">報價預測</h2>
      <div class="title_line"></div>
    </div>
    <div class="btn_block">
      <div class="output_btn">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange"
          :file-list="fileList">
          <el-button type="primary">檔案上傳</el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上傳文件，且不超过500kb</div> -->
        </el-upload>
      </div>
      <el-button type="primary" disabled>檔案檢查</el-button>
      <el-button type="primary" disabled>開始預測</el-button>
      <el-button type="primary" disabled>下載結果</el-button>
    </div>
    <div class="table_block">
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="no" label="#" width="180">
        </el-table-column>
        <el-table-column prop="id" label="零件代碼" width="180">
        </el-table-column>
        <el-table-column prop="Material" label="標準材質">
        </el-table-column>
        <el-table-column prop="specification" label="標準規範">
        </el-table-column>
        <el-table-column prop="thick" label="厚">
        </el-table-column>
        <el-table-column prop="width" label="寬">
        </el-table-column>
        <el-table-column prop="length" label="長">
        </el-table-column>
        <el-table-column prop="prediction" label="Prediction">
        </el-table-column>
        <el-table-column prop="Upper" label="Upper Bound">
        </el-table-column>
        <el-table-column prop="Lower" label="Lower Bound">
        </el-table-column>
        <el-table-column prop="standard" label="Standard">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  }
}

</script>
<style>
  .home {
    padding-left: 20px;
    padding-right: 20px;
  }

  .page_title {
    text-align: center;
  }

  .title_line {
    width: 35px;
    border: 2px solid #613F75;
    margin-left: auto;
    margin-right: auto;
  }

  .btn_block {
    display: inline;
    /* padding-left: 20px; */
  }

  .output_btn {
    display: inline-block;
    margin-right: 12px;
  }

  .table_block {
    margin-top: 15px;
  }

</style>
