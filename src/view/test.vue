<template>

  <div class="test">
    <!-- <div class="warp"> -->
    <!-- <ul>
        <li>asdjf;alkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>asdjf;alkfjalkfj暗精灵打开房间爱的代价阿富汗</li>
        <li>
     
        <li>
          </li>
      </ul>
    </div> -->
    <p>mu demo</p>
    <select name="blank" v-validate="'required'">
      <option value="">请选择</option>
      <option value="1">1</option>
    </select>
    <span v-show="errors.has('blank')" class="help is-danger">{{ errors.first('blank') }}</span>
    <button @click="validateBeforeSubmit">tijiao</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkData: [],
        iloanBefore: "",
        loanBefore: [{
          value: '01',
          label: 'fou'
        }]

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
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            // alert('From Submitted!');
            alert('提交成功!');
            
            return;
          }

          // alert('Correct them errors!');
          alert(' 请按要求填写！');
          
        });
      }
    }
  }
</script>
<style scoped>
  .warp {
    background: green;
    height: 48px;
    line-height: 48px;
    /* overflow: hidden; */
    /* overflow: hidden; =======================================================================================*/
    /* position: relative; */
  }

  .warp ul {
    background: orangered;
    margin: 0 50px;
    /* width: 700px; */
    height: 48px;
    position: relative;
    /* overflow: visi; */
    /* text-overflow:ellipsis; */
    white-space: nowrap;
    /* left: -200px; */
    /* position: absolute; */
    /* left: -100px; */
  }

  li {
    /* float: left; */
    /* font-weight: bold; */
    /* background: orchid; */
    /* position: absolute; */
    /* left: -200px; */
    /* margin-left: -50px; */
  }

</style>
