
<template>
<div>
    <internal-match-list :title="title1"></internal-match-list>
    <internal-match-list :title="title2"></internal-match-list>
    <internal-match-list :title="title3"></internal-match-list>
    <internal-match-textarea></internal-match-textarea>  

</div>
</template>


<script>
export default {
  data: function() {
    return {
      title1: "移动号码类(手机号和联系人)|同事 1380013800 王五{{}}",
      title2: "固定电话类(家电、单电)|单位电话 888-88888888 诺远(住宅电话此项无)",
      title3: "单位名称|诺远 888-8888888"
    };
  },
  components: {
    "internal-match-list": {
      template:
        '\
            <div>\
                <div class="title-bar">\
                    {{title}}\
                </div>\
                <el-table\
                :data="tableData"\
                height="250"\
                border\
                style="width: 100%"\
                @row-click="itemClick"\
                >\
                    <el-table-column\
                    prop="name"\
                    label="命中号码姓名">\
                    </el-table-column>\
                    <el-table-column\
                    prop="phoneType"\
                    label="电话类型">\
                    </el-table-column>\
                    <el-table-column\
                    prop="inNumber"\
                    label="进件编号">\
                    </el-table-column>\
                    <el-table-column\
                    prop="custName"\
                    label="客户名称">\
                    </el-table-column>\
                    <el-table-column\
                    prop="idNumber"\
                    label="身份证号">\
                    </el-table-column>\
                    <el-table-column\
                    prop="inCompany"\
                    label="进件单位">\
                    </el-table-column>\
                    <el-table-column\
                    prop="busState"\
                    label="业务状态">\
                    </el-table-column>\
                    <el-table-column\
                    prop="mark" width="200"fit="false" class="mark-cell"\
                    label="备注">\
                    </el-table-column>\
                </el-table>\
                \
                <div class="block tool-bar">\
                \
                    <el-pagination\
                     @size-change="handleSizeChange"\
                      @current-change="handleCurrentChange"\
                     :current-page="currentPage"\
                    :page-sizes="[5, 10, 20, 30]"\
                    :page-size="100"\
                    layout="total, sizes, prev, pager, next, jumper"\
                    :total="tableData.length">\
                </el-pagination>\
                </div>\
                \
            </div>\
            ',
      props: ["title"],
      data: function() {
        return {
          tableData: [
            {
              name: "姓名1",
              phoneType: "电话类型1",
              inNumber: "进件编号1",
              custName: "客户1",
              idNumber: "身份证号1",
              inCompany: "进件单位1",
              busState: "业务状态1",
              mark: "备注1"
            },
            {
              name: "姓名2",
              phoneType: "电话类型2",
              inNumber: "进件编号2",
              custName: "客户2",
              idNumber: "身份证号2",
              inCompany: "进件单位2",
              busState: "业务状态2",
              mark: "备注2"
            },
            {
              name: "姓名3",
              phoneType: "电话类型3",
              inNumber: "进件编号3",
              custName: "客户3",
              idNumber: "身份证号3",
              inCompany: "进件单位3",
              busState: "业务状态3",
              mark: "备注3"
            },
            {
              name: "姓名4",
              phoneType: "电话类型4",
              inNumber: "进件编号4",
              custName: "客户4",
              idNumber: "身份证号4",
              inCompany: "进件单位4",
              busState: "业务状态4",
              mark: "备注4"
            },
            {
              name: "姓名6",
              phoneType: "电话类型6",
              inNumber: "进件编号6",
              custName: "客户6",
              idNumber: "身份证号6",
              inCompany: "进件单位6",
              busState: "业务状态6",
              mark: "备注6"
            },
            {
              name: "姓名7",
              phoneType: "电话类型7",
              inNumber: "进件编号7",
              custName: "客户7",
              idNumber: "身份证号7",
              inCompany: "进件单位7",
              busState: "业务状态7",
              mark: "备注7"
            },
            {
              name: "姓名2",
              phoneType: "电话类型2",
              inNumber: "进件编号2",
              custName: "客户2",
              idNumber: "身份证号2",
              inCompany: "进件单位2",
              busState: "业务状态2",
              mark: "备注2"
            },
            {
              name: "姓名3",
              phoneType: "电话类型3",
              inNumber: "进件编号3",
              custName: "客户3",
              idNumber: "身份证号3",
              inCompany: "进件单位3",
              busState: "业务状态3",
              mark: "备注3"
            },
            {
              name: "姓名4",
              phoneType: "电话类型4",
              inNumber: "进件编号4",
              custName: "客户4",
              idNumber: "身份证号4",
              inCompany: "进件单位4",
              busState: "业务状态4",
              mark: "备注4"
            },
            {
              name: "姓名6",
              phoneType: "电话类型6",
              inNumber: "进件编号6",
              custName: "客户6",
              idNumber: "身份证号6",
              inCompany: "进件单位6",
              busState: "业务状态6",
              mark: "备注6"
            },
            {
              name: "姓名7",
              phoneType: "电话类型7",
              inNumber: "进件编号7",
              custName: "客户7",
              idNumber: "身份证号7",
              inCompany: "进件单位7",
              busState: "业务状态7",
              mark: "备注7"
            },
            {
              name: "姓名2",
              phoneType: "电话类型2",
              inNumber: "进件编号2",
              custName: "客户2",
              idNumber: "身份证号2",
              inCompany: "进件单位2",
              busState: "业务状态2",
              mark: "备注2"
            },
            {
              name: "姓名3",
              phoneType: "电话类型3",
              inNumber: "进件编号3",
              custName: "客户3",
              idNumber: "身份证号3",
              inCompany: "进件单位3",
              busState: "业务状态3",
              mark: "备注3"
            },
            {
              name: "姓名4",
              phoneType: "电话类型4",
              inNumber: "进件编号4",
              custName: "客户4",
              idNumber: "身份证号4",
              inCompany: "进件单位4",
              busState: "业务状态4",
              mark: "备注4"
            },
            {
              name: "姓名6",
              phoneType: "电话类型6",
              inNumber: "进件编号6",
              custName: "客户6",
              idNumber: "身份证号6",
              inCompany: "进件单位6",
              busState: "业务状态6",
              mark: "备注6"
            },
            {
              name: "姓名7",
              phoneType: "电话类型7",
              inNumber: "进件编号7",
              custName: "客户7",
              idNumber: "身份证号7",
              inCompany: "进件单位7",
              busState: "业务状态7",
              mark: "备注7"
            },
            {
              name: "姓名2",
              phoneType: "电话类型2",
              inNumber: "进件编号2",
              custName: "客户2",
              idNumber: "身份证号2",
              inCompany: "进件单位2",
              busState: "业务状态2",
              mark: "备注2"
            },
            {
              name: "姓名3",
              phoneType: "电话类型3",
              inNumber: "进件编号3",
              custName: "客户3",
              idNumber: "身份证号3",
              inCompany: "进件单位3",
              busState: "业务状态3",
              mark: "备注3"
            },
            {
              name: "姓名4",
              phoneType: "电话类型4",
              inNumber: "进件编号4",
              custName: "客户4",
              idNumber: "身份证号4",
              inCompany: "进件单位4",
              busState: "业务状态4",
              mark: "备注4"
            },
            {
              name: "姓名6",
              phoneType: "电话类型6",
              inNumber: "进件编号6",
              custName: "客户6",
              idNumber: "身份证号6",
              inCompany: "进件单位6",
              busState: "业务状态6",
              mark: "备注6"
            },
            {
              name: "姓名7",
              phoneType: "电话类型7",
              inNumber: "进件编号7",
              custName: "客户7",
              idNumber: "身份证号7",
              inCompany: "进件单位7",
              busState: "业务状态7",
              mark: "备注7"
            },
            {
              name: "姓名2",
              phoneType: "电话类型2",
              inNumber: "进件编号2",
              custName: "客户2",
              idNumber: "身份证号2",
              inCompany: "进件单位2",
              busState: "业务状态2",
              mark: "备注2"
            },
            {
              name: "姓名3",
              phoneType: "电话类型3",
              inNumber: "进件编号3",
              custName: "客户3",
              idNumber: "身份证号3",
              inCompany: "进件单位3",
              busState: "业务状态3",
              mark: "备注3"
            },
            {
              name: "姓名4",
              phoneType: "电话类型4",
              inNumber: "进件编号4",
              custName: "客户4",
              idNumber: "身份证号4",
              inCompany: "进件单位4",
              busState: "业务状态4",
              mark: "备注4"
            },
            {
              name: "姓名6",
              phoneType: "电话类型6",
              inNumber: "进件编号6",
              custName: "客户6",
              idNumber: "身份证号6",
              inCompany: "进件单位6",
              busState: "业务状态6",
              mark: "备注6"
            },
            {
              name: "姓名7",
              phoneType: "电话类型7",
              inNumber: "进件编号7",
              custName: "客户7",
              idNumber: "身份证号7",
              inCompany: "进件单位7",
              busState: "业务状态7",
              mark: "备注7"
            }
          ],
          currentPage: 0,
          title1: "移动号码类(手机号和联系人)|同事 1380013800 王五{{}}",
          title2: "固定电话类(家电、单电)|单位电话 888-88888888 诺远(住宅电话此项无)",
          title3: "单位名称|诺远 888-8888888"
        };
      },
      methods: {
        itemClick(row, event, column) {
          // console.log(row,event,column);
          console.log(
            row.name,
            row.phoneType,
            row.inNumber,
            row.custName,
            row.idNumber,
            row.busState,
            row.mark
          );
        },
        handleSizeChange(val) {
          console.log("每页 ${val}条", val);
        },
        handleCurrentChange(val) {
          console.log("当前页: ${val}", val);
        }
      }
    },
    "internal-match-textarea": {
      template:
        '\
            <el-form label-width="100px" class="demo-ruleForm">\
            <el-form-item label="活动形式" class="mark-title">\
            </el-form-item>\
            <el-input type="textarea" v-model="ruleForm.desc" class="mark-textarea" resize="none" :rows="5"></el-input>\
            <el-form-item class="mark-button">\
                <el-button type="primary" @click="submitForm()">确认</el-button>\
            </el-form-item>\
            </el-form>\
            ',
      data() {
        return {
          mark: "",
          ruleForm: {
            type: []
          }
        };
      },
      methods: {
          submitForm:function(){
              console.log('click button')
          }
      }
    }
  }
};
</script>



<style lang="css">
/* 表头 */
.title-bar {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
/* 分页 */
.tool-bar {
  width: 100%;
  text-align: center;
  padding: 10px 0 0 10px;
}
/* 匹配结论 */
.mark-title {
  width: 100%;
  margin: 0;
}
.mark-title label{
    text-align: left;
}
.mark-textarea{
    margin: 10px;
    width: 98.5%;
}

.mark-textarea textarea{
    min-height: 100px;
    max-height: 100px;
}

/* 确认按钮 */
.mark-button{
    text-align: right;
    margin-right: 0px;
    margin-top: 20px;
}

/* 行高 */
thead tr{
    height: 40px;
}

/* 表头 header 颜色 */
.el-table thead tr{
    background-color: #f5f7fa;
}

/* 备注 width*/
.mark-cell{
  overflow: hidden;
  overflow-wrap: break-word;
}
</style>
