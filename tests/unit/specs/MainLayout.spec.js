import { shallowMount } from '@vue/test-utils';
import MainLayout from '@/views/home/MainLayout.vue';

import getEleByAttri from '../TestUtil';

describe('MainLayout component test:', () => {
  const wrapper = shallowMount(MainLayout);
  it('MainLayout 组件正常渲染', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders header text', () => {
    const text = 'BROCCOLI & CO';
    expect(getEleByAttri(wrapper, 'name').text()).toBe(text);
  });

  it('renders content element', () => {
    expect(getEleByAttri(wrapper, 'content').exists()).toBe(true);
  });

  it('renders footer firstline text', () => {
    const text = 'Made with in Melbourne.';
    expect(getEleByAttri(wrapper, 'address').text()).toBe(text);
  });

  it('renders footer secondline text', () => {
    const text = '@ 2016 Broccli & Co. All rights reserved.';
    expect(getEleByAttri(wrapper, 'detail').text()).toBe(text);
  });
});
