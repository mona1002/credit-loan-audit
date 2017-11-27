<template>
  <tr>
    <td>1</td>
    <td>
      <el-select v-model="y_value">
        <el-option
          v-for="item in house_property[0].options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </td>
    <td>
      <el-select v-model="y_value">
        <el-option
          v-for="item in house_property[1].options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
    <td>
      <el-select v-model="y_value">
        <el-option
          v-for="item in house_property[2].options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
    <td>
      <el-input v-model="y_value"></el-input>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CrossRable2',
  data () {
    return {
      msg: '',
      y_value1:'',
      y_value2:'',
      y_value3:'',
      y_value4:'',
      y_value5:'',
      y_value6:'',
      y_value7:'',
      y_value8:'',
      y_value9:'',
      y_value10:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_value:'',
      y_valuedate:'',
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
      },
      house_property:[
            {'val':2,options:[
                {'value': '1' ,'label':' 商业按揭购房'},
                {'value': '2' ,'label': '公积金按揭购房'},
                {'value': '3' ,'label': '无按揭购房'},
                {'value': '4' ,'label': '自建房'}
              ]}, 
            {'val':2,options:[
                {'value': '1' ,'label':' 宅基地'},
                {'value': '2' ,'label': '自建房'},
                {'value': '3' ,'label': '小产权'},
                {'value': '4' ,'label': '期房'},
                {'value': '5' ,'label': '公租房'},
                    {'value': '6' ,'label': '经济适用房'},
                    {'value': '7' ,'label': '土地证'},
                    {'value': '8' ,'label': '大产权'}
              ]},
            
            {'val':2,options:[
                {'value': '1' ,'label':' 已抵押'},
                {'value': '2' ,'label': '未抵押'},
            ]}
          ],
      //house_property:document.getElementsByClassName("house_property"),
    }
  },
  created () {

  },
  methods:{
   
  },

}
</script>

<style scoped>
  .my_cross_table td{
    width:130px;height:30px;
    border: 1px solid #d8dce5;
  }
</style>
