<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <el-row :gutter="20" class="padding-left-s padding-right-s">
      <el-col>
        <el-form-item prop="name">
          <el-input
            data-test="input-name"
            autocapitalize="off"
            autocorrect="off"
            clearable
            v-model="ruleForm.name"
            :placeholder="'Full Name'"
            show-word-limit
            :maxlength="60"
            :minlength="3"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="padding-left-s padding-right-s margin-top-s">
      <el-col>
        <el-form-item prop="email">
          <el-input
            data-test="input-email"
            autocapitalize="off"
            autocorrect="off"
            clearable
            v-model="ruleForm.email"
            :maxlength="60"
            :minlength="1"
            :placeholder="'Email'"
            show-word-limit
            @blur="validConfirmEmail('ruleForm')"
          >
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="padding-left-s padding-right-s margin-top-s">
      <el-col>
        <el-form-item prop="confirmEmail">
          <el-input
            data-test="input-confirmEmail"
            :disabled="!ruleForm.email"
            autocapitalize="off"
            autocorrect="off"
            clearable
            v-model="ruleForm.confirmEmail"
            :maxlength="60"
            :minlength="1"
            :placeholder="'Confirm Email'"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="padding-left-s padding-right-s margin-top-l">
      <el-col>
        <el-button
          data-test="register-btn"
          class="inline width-full btn-base w"
          @click="formValidate('ruleForm')"
          v-loading="curData.form.button.loading"
          >{{ curData.form.button.text }}</el-button
        >
      </el-col>
      <p
        v-if="status == ModelStatus.InvitatedError"
        class="padding-left-s padding-right-s r"
      >
        {{ errorMsg }}
      </p>
    </el-row>
  </el-form>
</template>
<script>
import { ModelStatus } from '@/types/invitation.ts';
import { mapGetters } from 'vuex';
import { RegExpEmail } from '@/utils/tools';
export default {
  data() {
    var validateConfirmEmail = (rule, value, callback) => {
      if (value && this.ruleForm.email && this.ruleForm.email != value) {
        callback(new Error('Confirm email failed!'));
      }
      callback();
    };
    return {
      ModelStatus: ModelStatus,
      errorMsg: '',
      ruleForm: {
        name: '',
        email: '',
        confirmEmail: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input name.',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 60,
            message: 'min length is 3.',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: 'Please input email.',
            trigger: 'blur',
          },
          {
            pattern: RegExpEmail,
            message: 'Email is invalid!',
            trigger: ['blur'],
          },
        ],
        confirmEmail: [
          {
            required: true,
            message: 'Please input confirm email.',
            trigger: 'blur',
          },
          {
            pattern: RegExpEmail,
            message: 'Confirm Email is invalid!',
            trigger: ['blur'],
          },
          {
            validator: validateConfirmEmail,
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters('register', {
      curData: 'curData',
      status: 'status',
    }),
  },
  methods: {
    formValidate() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.toRegister();
        }
      });
    },
    validConfirmEmail() {
      if (this.ruleForm.confirmEmail) {
        this.$refs.ruleForm.validateField('confirmEmail');
      }
    },
    async toRegister() {
      this.$store.commit('register/changeStatus', this.ModelStatus.Invitating);
      let param = {
        name: this.ruleForm.name,
        email: this.ruleForm.email,
      };
      try {
        const result = await this.$store.dispatch(
          'register/getInvitation',
          param
        );
        if (result == 'Registered') {
          this.status === this.ModelStatus.Invitating &&
            this.$nextTick(() => {
              this.$store.commit(
                'register/changeStatus',
                this.ModelStatus.InvitatedOk
              );
            });
        }
      } catch (error) {
        if (this.status === this.ModelStatus.Invitating) {
          this.errorMsg = error;
          this.$nextTick(() => {
            this.$store.commit(
              'register/changeStatus',
              this.ModelStatus.InvitatedError
            );
          });
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
