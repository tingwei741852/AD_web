<template>
  <el-table-column
  :prop="col.prop"
  :label="col.label"
  :fixed="col.fixed"
  :key="col.prop"
  >
    <template>
      {{col.prop}}
      <TreeTableColumn v-for="(item, index) in col.children"
                 :key="index"
                 :col="item"
                 :error_msg="error_msg"></TreeTableColumn>
    </template>
    <template slot-scope="scope">
      {{scope.row[col.prop]}}
      <!-- <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right" v-show="error_msg['error_message'][item.prop]['item'].indexOf(scope.$index) > 0"> -->
        <span v-if="error_msg['error_message'][col.prop]" style="color:#DF5E5E">
          <el-tooltip class="item" effect="dark" :content="error_msg['error_message'][col.prop]['msg']" placement="right" v-show="error_msg['error_message'][col.prop]['item'].indexOf(scope.row['id']) >= 0">
        <i class="el-icon-warning"></i>
        </el-tooltip></span>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TreeTableColumn',
  props: {
    col: {
      type: Object
    },
    error_msg: {
      type: Object
    },
    pagesize: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  }
}
</script>
