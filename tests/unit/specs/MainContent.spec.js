import MainContent from '@/views/home/MainContent.vue';
import store from '@/store';
import getEleByAttri, { getRenderedComponent, mount } from '../TestUtil';
import { ModelStatus } from '@/types/invitation.ts';

describe('MainContent component test:', () => {
  const wrapper = getRenderedComponent(MainContent);
  const vm = wrapper.$mount();
  const wrapperMounted = mount(MainContent);

  it('MainContent 组件正常渲染', () => {
    expect(wrapperMounted).toMatchSnapshot();
  });
  it('render title text', () => {
    const text = 'A better way to Enjoy every day.';
    expect(getEleByAttri(wrapperMounted, 'title').text()).toBe(text);
  });

  it('render description text', () => {
    const text = 'Be the first to know when we launch.';
    expect(getEleByAttri(wrapperMounted, 'description').text()).toBe(text);
  });

  it('the button to show the dialog exists', () => {
    expect(getEleByAttri(wrapperMounted, 'btn-invite').exists()).toBe(true);
  });

  it('renders the dialog when click the button', (done) => {
    const respectStatus = ModelStatus.Toinvitate;
    const btn = getEleByAttri(wrapperMounted, 'btn-invite');
    btn.vm.$emit('click');
    vm.$nextTick(() => {
      expect(store.getters['register/status']).toBe(respectStatus);
      done();
    });
  });
});
