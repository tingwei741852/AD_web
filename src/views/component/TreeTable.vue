<template>
  <div class="TreeTable">
    <el-table :cell-style="cellstyle" :data="data" style="width: 100%" element-loading-text="計算中..."  v-loading="loading" v-if="show">
       <el-table-column
            type="index"
            :index="indexMethod"
            label="#">
        </el-table-column>
      <TreeTableColumn v-for="(item,index) in col" :key="index" :col="item"></TreeTableColumn>
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
    }
  }
}
</script>
