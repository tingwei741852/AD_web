<template>
  <div class="TreeTable">
    <el-table :cell-style="cellstyle" :data="data" style="width: 100%" element-loading-text="計算中..."  v-loading="loading" v-if="show" @selection-change="handleSelectionChange">
       <!-- <el-table-column
            type="index"
            :index="indexMethod"
            label="#">
        </el-table-column> -->
        <el-table-column
          type="selection"
          width="55">
          </el-table-column>
          <el-table-column label="ID" prop="id">
          </el-table-column>
        <!-- <el-table-column>
          {{col.filter(item => item.show == true)}}
        </el-table-column> -->
      <TreeTableColumn v-for="(item,index) in col.filter(item => item.show == true)" :key="index" :col="item" :error_msg="error_msg" :pagesize="pagesize" :currentPage="currentPage"></TreeTableColumn>
    </el-table>
  </div>
</template>

<script>
import TreeTableColumn from './TreeTableColumn'
export default {
  components: {
    TreeTableColumn
  },
  props: {
    col: {
      type: Array
    },
    data: {
      type: Array
    },
    loading: {
      type: Boolean
    },
    indexMethod: {
      type: Number
    },
    show: {
      type: Boolean
    },
    cellstyle: {
      type: Function
    },
    error_msg: {
      type: Object
    },
    pagesize: {
      type: Number
    },
    currentPage: {
      type: Number
    },
    handleSelectionChange: {
      type: Function
    }
  }
}
</script>
