import Register from '@/views/register/Register.vue';
import store from '@/store';
import getEleByAttri, { getRenderedComponent, mount } from '../TestUtil';
import { ModelStatus } from '@/types/invitation.ts';

describe('Register component test:', () => {
  const wrapper = getRenderedComponent(Register);
  const vm = wrapper.$mount();
  const wrapperMounted = mount(Register);

  it('Register 组件正常渲染', () => {
    expect(wrapperMounted).toMatchSnapshot();
  });

  it('the name input is exists', () => {
    expect(getEleByAttri(wrapperMounted, 'input-name').exists()).toBe(true);
  });

  it('the email input is exists', () => {
    expect(getEleByAttri(wrapperMounted, 'input-email').exists()).toBe(true);
  });

  it('the confirmEmail input is exists', () => {
    expect(getEleByAttri(wrapperMounted, 'input-confirmEmail').exists()).toBe(
      true
    );
  });

  it('get the correct status when click the button', (done) => {
    const respectStatus = ModelStatus.Invitating;
    const btn = getEleByAttri(wrapperMounted, 'register-btn');
    wrapperMounted
      .setData({
        ruleForm: {
          name: 'abc',
          email: 'aaxx@qq.com',
          confirmEmail: 'aaxx@qq.com',
        },
      })
      .then(() => {
        btn.vm.$emit('click');
        vm.$nextTick(() => {
          expect(store.getters['register/status']).toBe(respectStatus);
          done();
        });
      });
  });
});
