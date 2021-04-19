<template>
  <div class="flex-col row-around height-full">
    <p data-test="ok-message" class="bt-22 text-center">
      {{ curData.form.okMessage }}
    </p>
    <div class="text-center">
      <el-button class="inline btn-base w width-full" @click="closeDialog">{{
        curData.form.button.text
      }}</el-button>
    </div>
  </div>
</template>
<script>
import { ModelStatus } from '@/types/invitation.ts';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      ModelStatus: ModelStatus,
    };
  },
  computed: {
    ...mapGetters('register', {
      curData: 'curData',
      status: 'status',
    }),
  },
  methods: {
    closeDialog() {
      this.$store.commit('register/changeStatus', this.ModelStatus.Initial);
    },
  },
};
</script>
