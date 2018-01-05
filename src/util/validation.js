import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN'
import messages from '../assets/js/zh_CN';
Validator.updateDictionary({
    zh_CN: {
        messages
    }
});
const config = {
  locale: 'zh_CN', 
  strict: true,
  delay: 1000, 
  errorBagName: 'errorBags',
  fieldsBagName: 'fieldBags'
};
Vue.use(VeeValidate, config);

