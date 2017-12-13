<template>

  <div class="test">
    <!-- <p>
      <label class="Family_label">
        <span class="red"> * </span> 可以承受的月还款[元]： </label>
      <el-input type="text" style="width:100px" placeholder="请输入内容" v-model="iloanBefore" name="Paymonth" v-validate="'required'">
      </el-input>
      <span v-show="errors.has('Paymonth')" class="help is-danger">{{ errors.first('Paymonth') }}</span>
    </p>
    <button @click="abc"> 提交</button> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkData: [],
        iloanBefore: "",
        value: '',
        selected: '',
        loanBefore: [{
          value: '',
          label: 'fou'
        }],
        beexEcuted: [{ //（上网查询信息）客户在人法网是否有被执行信
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],

      }
    },
    methods: {
      abc(){
        console.log(";akdls")
         this.$validator.validate('Paymonth').then((result) => {
          // this.discounted = result;
          console.log("提交成功")
        });
      },
      Csave() {
        this.$validator.validate('Paymonth', this.coupon).then((result) => {
          this.discounted = result;
          console.log("提交成功")
        });
      },
      NewPage() {

      },
      commentShow1() {

      }
    },
    mounted() {

      // this.ajax("/roleMgr/getRolesByPage", {
      //   roleCode: this.roleCode,
      //   roleName_la: this.roleName_la
      // }).then(res => {
      //   console.log(res);
      // });

    },
    // methods: {
    //   validateBeforeSubmit() {
    //     this.$validator.validateAll().then((result) => {
    //       if (result) {
    //         // eslint-disable-next-line
    //         // alert('From Submitted!');
    //         alert('提交成功!');

    //         return;
    //       }

    //       // alert('Correct them errors!');
    //       alert(' 请按要求填写！');

    //     });
    //   }
    // }
  }

</script>
<style scoped>

</style>
