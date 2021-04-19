<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      custom-class="rsDialog"
      :title="curData.form.title"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @close="closeDialog"
    >
      <register
        v-if="
          status == ModelStatus.Toinvitate ||
          status == ModelStatus.Invitating ||
          status == ModelStatus.InvitatedError
        "
        ref="register"
      ></register>
      <registerSuccess
        v-if="status == ModelStatus.InvitatedOk"
      ></registerSuccess>
    </el-dialog>
  </div>
</template>
<script>
import register from './Register.vue';
import { ModelStatus } from '@/types/invitation';
import registerSuccess from './RegisterSuccess.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    register,
    registerSuccess,
  },
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
    dialogVisible: {
      get: function () {
        return this.curData.isVisible;
      },
      set: function () {
        // return this.curData.isVisible
      },
    },
  },
  methods: {
    resetForm() {
      this.$refs.register.$refs.ruleForm.resetFields();
    },
    closeDialog() {
      if (
        this.status != this.ModelStatus.InvitatedOk &&
        this.status != this.ModelStatus.Initial
      ) {
        this.resetForm();
      }
      this.$store.commit('register/changeStatus', this.ModelStatus.Initial);
    },
  },
};
</script>
<style lang="scss">
.rsDialog {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto !important;
  height: 44rem;
  width: 50%;
  @include phone {
    width: 85%;
  }
  .el-dialog__body {
    height: calc(100% - 7rem);
  }
  .el-dialog__header {
    background: $bg-p1;
    height: 7rem;
    padding: 0;
    line-height: 7rem;
    text-align: center;
    .el-dialog__headerbtn {
      line-height: 7rem;
      top: 0;
      .el-dialog__close {
        color: white;
      }
    }
    .el-dialog__title {
      color: white;
      font-weight: bold;
      font-size: 2.5rem;
    }
  }
}
</style>
