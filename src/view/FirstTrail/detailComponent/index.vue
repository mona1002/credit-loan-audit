<template>
  <div id="warp">
    <el-button>默认按钮</el-button>
    <el-button type="primary" v-on:click="add_table('vehicle')">车辆信息</el-button>
    <el-button type="text">房产信息</el-button>
    <table class="mytable">
      <thead>
        <tr>
          <th></th>
          <th>房产类型</th>
          <th>产权性质</th>
          <th>建筑面积[m^2]</th>
          <th>建筑单价[元]</th>
          <th>房产地址</th>
          <th>邮政编码</th>
          <th>产权比例</th>
          <th>贷款期限[月]</th>
          <th>抵押状况</th>
          <th>月供[元]</th>
          <th>贷款余额[元]</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <cross-rable v-for="cro in cross_rable_ytablemsg" ytablemsg="vehicle" v-bind:ynum="cro" :key="cro"></cross-rable>
      </tbody>
    </table>
  </div>
</template>
<script>
  import CrossRable from '@/view/FirstTrail/detailComponent/CrossRable'
  export default {
    name: 'index',
    data() {
      return {
        message: '211212',
        cross_rable_ytablemsg: 0
      }
    },
    components: {
      CrossRable
    },
    methods: {
      add_table: function (str) {
        this.cross_rable_ytablemsg += 1;
      }
    }
  }

</script>
<style scoped>
  #warp {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #warp .mesg {
    color: #f00;
  }

  table.mytable {
    font-family: verdana, arial, sans-serif;
    font-size: 14px;
    color: #333333;
    border-width: 1px;
    border-color: #666666;
    border-collapse: collapse;
  }

  table.mytable th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #dedede;
  }

  table.mytable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #ffffff;
  }

</style>
