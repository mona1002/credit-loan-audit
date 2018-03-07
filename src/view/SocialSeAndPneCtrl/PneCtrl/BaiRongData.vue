<template>
  <div class="SSComp">
    <!-- 大数据风控-风险决策 -->
    <h1 class="top_title"> <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">百融个人不良信息</h1>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">产品输出标识
          </span>
        </template>
        <div class="lists">
          <ul>
            <li>
              <p>
                <label style="width:240px;">个人不良信息查询高级版产品计费标识：</label>
                 <!-- <b>{{outputAndParam.flagCrimeinfoProTxt}}</b> -->
              </p>
            </li>
          </ul>

        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">返回参数
          </span>
        </template>
        <div class="lists">
          <ul>
            <li>
              <p>
                <label>提交状态码说明：</label>
                 <!-- <b>{{outputAndParam.apiDesc}}</b> -->
              </p>
              <p>
                <label>返回结果码说明： </label>
                 <!-- <b>{{outputAndParam.resultDesc}}</b> -->                
              </p>
              <p>
                <label>核验代码描述： </label>
                 <!-- <b>{{outputAndParam.checkMsg}}</b> -->
              </p>
            </li>
            <li>
              <p>
                <label>前科案件数量： </label>
                 <!-- <b>{{outputAndParam.checkCount}}</b> -->
              </p>
            </li>
          </ul>

        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">案件说明</span>
        </template>
        <div class="tes">
          <div class="tab_wrap">
            <el-table :data="tableData" border height="100%" style="width: 100%">
              <el-table-column prop="caseType" label="案件类别 " align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="caseTime" label="案发时间 " align="center" min-width="70">
              </el-table-column>
              <el-table-column prop="caseSource" label="案件来源 " align="center" min-width="100">
              </el-table-column>
              <el-table-column prop="caseLevel" label="案件级别 " align="center" min-width="100">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn'
  export default {
    data() {
      return {
        localInf: null,
        productID:null,
        caseID:null,
        outputAndParam:null,
        activeNames: ['1', "2", "3"],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    mounted() {
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
      } else if (this.judgeFlag.flag == '02') {
        this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
      } else if (this.judgeFlag.flag == '03') {
        this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
      } else if (this.judgeFlag.flag == '04') {
        this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
      } else if (this.judgeFlag.flag == '05') {
        this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
      } else if (this.judgeFlag.flag == '06') {
        this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议经理
      }
      // console.log(baseurl+"/rmMxSecFundQryAction!notSession_getBrRecord.action")
     // “百融记录调用查询接口”
      this.post(baseurl +
        '/rmCreAuditOpinionAction!notSession_getBrRecord.action?applyId=b14455f1-5531-4cf2-883b-f6dc0049e3bb', {
          // applyId: this.localInf.applyId,     
          // applyId:'b14455f1-5531-4cf2-883b-f6dc0049e3bb'   
        }).then(res => {
        console.log(res)
        if (res.success == true) {
          this.productID = res.obj;
          // console.log( this.productID )
          if (this.productID) {
            // =======================================================
            console.log("产品输出标识")
            this.post(baseurl + '/rmCreAuditOpinionAction!notSession_getTdFraudApiResponse.action?requestId=d2fa5ffd-8016-41fe-85fa-9668908121c9', {
              // requestId: this.productID,
              // requestId: "e6e78dcb-0752-4e2d-b9b3-42d1d7535b44"
            }).then(res => {
              console.log(res)
              if (res.success == true) {
                this.outputAndParam = res.obj;
                this.caseID = res.obj.id
//  if (this.caseID) {
                  // ------------------------------------------
                  console.log("案件说明")
                  this.post(baseurl + '/rmCreAuditOpinionAction!notSession_getTdPolicyRules.action?crimeInfoProId=bc501e16-7196-42a8-8e1b-aae1180b09fb', {
                    // crimeInfoProId: this.caseID,
                    // crimeInfoProId:"1477532710850326F313512DA9061430",
                  }).then(res => {
                    console.log(res)
                    if (res.success == true) {
                      this.tableData = res.obj.rows;
                      console.log( this.tableData )
                    }
                  });
                  // -----------------------------------------------------
//  }
              } else {
                this.$message.error(res.msg);
              }
            });
            // ================================================================
          }
        } else {
          this.$message.error(res.msg);
        }
      });




    }
  }

</script>
<style scoped>
  .SSComp {
    overflow-x: hidden;
    height: 100%;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px;
  }
.top_title{
      border: 1px solid silver;
    background: #eef0f9;
    border: 1px solid #e6eaee;
    font-size: 16px;
    color: #1f2d3d;
    padding-left: 44px;
    height: 40px;
    line-height: 40px;
    position: relative;
}
  .lists {
    padding: 10px 0 0 21px;
  }

  .SSComp p {
    float: left;
    width: 33.3%;
    margin-bottom: 10px;
  }

  .SSComp label {
    display: inline-block;
    width: 105px;
    text-align: right;
  }

  .tab_wrap {
    margin: 10px;
    border-radius: 4px;

    overflow-x: hidden;
    /* border: 1px solid red; */
  }

  .tes {
    /* max-height: 500px; */
    /* border: 3px solid green; */
  }

</style>
