<template>
  <div>
      import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN'
import messages from '../assets/js/zh_CN';


Validator.updateDictionary({
    zh_CN: {
        messages
    }
});


Validator.extend('phone', {
    messages: {
      zh_CN:field => field + '手机号必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  });

  Validator.extend('blank', {
    messages: {
      required:(field)=> "请选择"
    },
    validate: value => {
        if(value =="") {
            return false;
        } 
        return true;
    
    }
  });

const config = {
  locale: 'zh_CN', 
  strict: true,
  // events: 'input|blur',
  delay: 1000, 

};

Vue.use(VeeValidate, config);

  </div>
</template>
