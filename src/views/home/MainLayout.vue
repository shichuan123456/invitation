<template>
  <el-container class="content-full">
    <el-header class="bg-p1 w align-center">
      <h5 data-test="name" class="text-left">BROCCOLI & CO</h5>
    </el-header>
    <el-main data-test="content" class="flex-row">
      <router-view class="flex-1"></router-view>
    </el-main>
    <el-footer class="bg-p1 w flex-col row-center">
      <p data-test="address" class="text-center">Made with in Melbourne.</p>
      <p data-test="detail" class="text-center">
        @ 2016 Broccli & Co. All rights reserved.
      </p>
    </el-footer>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class MainLayout extends Vue {}
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  height: 6rem;
  h5 {
    height: 6rem;
    line-height: 6rem;
  }
}
</style>
