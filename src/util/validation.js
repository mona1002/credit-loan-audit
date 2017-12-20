import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
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
};
Vue.use(VeeValidate, config);
