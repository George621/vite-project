import antdLocale from 'ant-design-vue/es/locale/zh_CN';
import { genMessage } from '../helper';

const modulesFiles = import.meta.glob<any>('./zh-CN/**/*.json', { eager: true });

export default {
  message: {
    ...genMessage(modulesFiles, 'zh-CN'),
    antdLocale,
  },
};
