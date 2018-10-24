<template>
  <!--  运营商报告   -->
  <div class="SocialSecurity debitCardReport">
    <el-tabs type="border-card">
        <el-tab-pane label="聚信立"> <carrierReport1 :applySubNo='applySubNo'> </carrierReport1></el-tab-pane>
        <el-tab-pane label="立木"> <carrierReport2 :applySubNo='applySubNo'> </carrierReport2></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script> 
  import carrierReport1 from './carrierReport1.vue';
  import carrierReport2 from './carrierReport2.vue';
  export default {
    data() {
      return {
      }
    },
    components: {
      carrierReport1,
      carrierReport2
    },
    props: {
      applySubNo: {
        default: '',
        type: String,
        required: true
      }
    },
  }

</script>
