<template>
  <tr class="my_cross_table" v-bind:id="ynum">
    <td v-for="(tab,index) in tablejson[ytablemsg]">
        <div class="td_box" v-if="tab.val == 0 ">
        	{{ynum}}
        </div>
        <div class="td_box" v-if="tab.val == 1 ">
        	<input type="text"/>
        </div>
        <div class="td_box" v-if="tab.val == 2 ">
        	<el-select v-model="y_value">
			    <el-option
			      v-for="item in tab.options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
		</div>
		<div class="td_box td_date" v-if="tab.val == 3 ">
			<el-date-picker
		      v-model="y_valuedate"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions0">
		    </el-date-picker>
		</div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CrossRable',
  data () {
    return {
      msg: '',
      y_value:'',
      y_valuedate:'',
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
      },
      tablejson: {
      	'house_property':[
			    {'val':0},//0为序列，1为input，2为下拉框， 3为日期 
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
      		{'val':1},
      		{'val':1},
      		{'val':1},
      		{'val':1},
      		{'val':1},
      		{'val':1},
      		{'val':2,options:[
              {'value': '1' ,'label':' 已抵押'},
              {'value': '2' ,'label': '未抵押'},
          ]},
      		{'val':1},
      		{'val':1}
      	],
      	'vehicle': [
      		{'val':0},//0为序列，1为input，2为下拉框， 3为日期 
      		{'val':1}, 
      		{'val':2,options:[
      				{'value': '1' ,'label':'是'},
      				{'value': '2' ,'label':'否'}
      			]},
      		{'val':2,options:[
      				{'value': '1' ,'label':'是'},
              {'value': '2' ,'label':'否'}
      			]},
      		{'val':1},
      		{'val':2,options:[
      				{'value': '1' ,'label':'按揭购车'},
              {'value': '2' ,'label':'无按揭购车'}
      			]},
      		{'val':1},
      		{'val':1},
      		{'val':1},
      		{'val':1},
      		{'val':2,options:[
              {'value': '1' ,'label':'是'},
              {'value': '2' ,'label':'否'}
            ]},
      		{'val':3}
      	],
        'card': [
          {'val':0},//0为序列，1为input，2为下拉框， 3为日期 
          {'val':1}, 
          {'val':3},
          {'val':1},
          {'val':1},
          {'val':3},
          {'val':1},
          {'val':1},
          {'val':2,options:[
              {'value': '1' ,'label':'是'},
              {'value': '2' ,'label':'否'}
            ]},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':2,options:[
              {'value': '1' ,'label':'正常'},
              {'value': '2' ,'label':'冻结'},
              {'value': '3' ,'label':'止付'},
              {'value': '4' ,'label':'销户'},
              {'value': '5' ,'label':'呆账'},
              {'value': '6' ,'label':'未激活'},
              {'value': '7' ,'label':'转出'},
              {'value': '8' ,'label':'核销'}
            ]}
        ],
        'loanDetail':[
          {'val':0},//0为序列，1为input，2为下拉框， 3为日期 
          {'val':2,options:[
              {'value': '1' ,'label':'车贷'},
              {'value': '2' ,'label':'房贷'},
              {'value': '1' ,'label':'信用贷'},
              {'value': '2' ,'label':'其他贷款'}
            ]}, 
          {'val':2,options:[
              {'value': '1' ,'label':'信用'},
              {'value': '2' ,'label':'信用+抵押'},
              {'value': '1' ,'label':'抵押'},
              {'value': '2' ,'label':'质押'},
              {'value': '2' ,'label':'抵押+质押'}
            ]},
          {'val':2,options:[
              {'value': '1' ,'label':'正常'},
              {'value': '2' ,'label':'逾期'},
              {'value': '1' ,'label':'结清'}
            ]},
          {'val':2,options:[
              {'value': '1' ,'label':'1个月'},
              {'value': '2' ,'label':'3个月'},
              {'value': '1' ,'label':'一次性还清'}
            ]},
          {'val':3},
          {'val':3},
          {'val':1},
          {'val':3},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':3},
          {'val':1},
          {'val':1},
          {'val':1}
        ],
        'turnover':[
          {'val':0},//0为序列，1为input，2为下拉框， 3为日期 
          {'val':2,options:[
              {'value': '1' ,'label':' 工资流水'},
              {'value': '2' ,'label': '常用流水'},
              {'value': '3' ,'label': '对公流水'}
            ]}, 
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':1}
        ],
        'people':[
          {'val':0},//0为序列，1为input，2为下拉框， 3为日期 
          {'val':1}, 
          {'val':2,options:[
              {'value': '1' ,'label':' 家庭联系人'},
              {'value': '2' ,'label': '工作证明人'},
              {'value': '3' ,'label': '其他联系人'}
            ]},
          {'val':2,options:[
              {'value': '1' ,'label': '夫妻'},
              {'value': '2' ,'label': '父母'},
              {'value': '3' ,'label': '子女'},
              {'value': '4' ,'label': '兄弟'},
              {'value': '5' ,'label': '姐妹'},
              {'value': '6' ,'label': '兄妹'},
              {'value': '7' ,'label': '姐弟'},
              {'value': '8' ,'label': '朋友'},
              {'value': '9' ,'label': '同事'},
              {'value': '10' ,'label':'房东'},
              {'value': '11' ,'label': '亲属'},
              {'value': '12' ,'label': '其他'}
            ]},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':2,options:[
            {'value': '1' ,'label': '身份证'}
          ]},
          {'val':1},
          {'val':1},
          {'val':1},
          {'val':1}
        ]
      },
      house_property:document.getElementsByClassName("house_property"),
    }
  },
  props: ['ytablemsg','ynum'],
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
