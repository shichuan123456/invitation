<template>
  <section class="flex-col align-center row-center main-bg w">
    <div class="padding-s">
      <h3 data-test="title" class="text-center">
        A better way to Enjoy every day.
      </h3>
      <div class="margin-top-l">
        <p data-test="description" class="text-center">
          Be the first to know when we launch.
        </p>
      </div>
      <div class="text-center margin-top-l">
        <el-button
          data-test="btn-invite"
          class="inline btn-base w border-none"
          @click="openDialog"
          >Request an invite</el-button
        >
      </div>
      <rgDialog></rgDialog>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ModelStatus } from '@/types/invitation';
import rgDialog from '../register/RegisterDialog.vue';
@Component({
  components: {
    rgDialog,
  },
})
export default class MainContent extends Vue {
  ModelStatus: typeof ModelStatus = ModelStatus;
  openDialog(): void {
    this.$store.commit('register/changeStatus', this.ModelStatus.Toinvitate);
  }
}
</script>
<style lang="scss">
.main-bg {
  background-image: url(../../assets/images/preload.png);
  background-size: cover;
}
</style>
