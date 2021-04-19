import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import en_element from 'element-ui/lib/locale/lang/en';
import zh_element from 'element-ui/lib/locale/lang/zh-CN';
import en from '@/locales/en';
import zh from '@/locales/zh';

const messages = {
  en: {
    ...en,
    ...en_element,
  },
  zh: {
    ...zh,
    ...zh_element,
  },
};

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh',
  messages,
});

locale.i18n((key: string, values?: string[] | { [key: string]: string }) =>
  i18n.t(key, values)
);

export default i18n;
