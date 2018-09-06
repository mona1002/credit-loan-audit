<template>
  <!-- 同盾设备画像 -->
  <div class="SocialSecurity min_width_1550">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">申请信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">银行卡号：</label>
                <span>{{applyInf.bankCard}}</span>
              </li>
              <li>
                <label class="label_width_130">设备id：</label>
                <span>{{applyInf.appId}}</span>
              </li>
              <li>
                <label class="label_width_130">进件编号：</label>
                <span>{{applyInf.applyNo}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">姓名：</label>
                <span>{{applyInf.name}}</span>
              </li>
              <li>
                <label class="label_width_130">电话：</label>
                <span>{{applyInf.tel}}</span>
              </li>
              <li>
                <label class="label_width_130">申请时间：</label>
                <span>{{applyInf.applyTime}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_130">身份证号：</label>
                <span>{{applyInf.idNumber}}</span>
              </li>
              <li>
                <label class="label_width_130">类型编号：</label>
                <span>{{applyInf.typeCode}}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">业务信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class="clearFix">
              <li>
                <label class="label_width_130">tokenId：</label>
                <span>{{businessInf.tokenId}}</span>
              </li>
              <li>
                <label class="label_width_130">版本：</label>
                <span>{{businessInf.fpVersion}}</span>
              </li>
              <li>
                <label class="label_width_130">设备id：</label>
                <span>{{businessInf.deviceId}}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">设备信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">apkMD5：</label>
                <span>{{deviceInfo.apkMD5}}</span>
              </li>
              <li>
                <label class="label_width_130">cpu使用频率：</label>
                <span>{{deviceInfo.cpuFrequency}}</span>
              </li>
              <li>
                <label class="label_width_130">dns地址：</label>
                <span>{{deviceInfo.dnsAddress}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">是否允许mock：</label>
                <span>{{deviceInfo.allowMockLocation}}</span>
              </li>
              <li>
                <label class="label_width_130">vpn地址：</label>
                <span>{{deviceInfo.vpnIp}}</span>
              </li>
              <li>
                <label class="label_width_130">语言：</label>
                <span>{{deviceInfo.language}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">设备名称：</label>
                <span>{{deviceInfo.deviceName}}</span>
              </li>
              <li>
                <label class="label_width_130">apk版本：</label>
                <span>{{deviceInfo.apkVersion}}</span>
              </li>
              <li>
                <label class="label_width_130">wifi地址：</label>
                <span>{{deviceInfo.wifiIp}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">基础band版本：</label>
                <span>{{deviceInfo.basebandVersion}}</span>
              </li>
              <li>
                <label class="label_width_130">wifi网关：</label>
                <span>{{deviceInfo.wifiNetmask}}</span>
              </li>
              <li>
                <label class="label_width_130">剩余电量：</label>
                <span>{{deviceInfo.batteryTemp}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">blueMac：</label>
                <span>{{deviceInfo.blueMac}}</span>
              </li>
              <li>
                <label class="label_width_130">手机ip：</label>
                <span>{{deviceInfo.cellIp}}</span>
              </li>
              <li>
                <label class="label_width_130">主机：</label>
                <span>{{deviceInfo.host}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">手机型号：</label>
                <span>{{deviceInfo.model}}</span>
              </li>
              <li>
                <label class="label_width_130">cpu硬件：</label>
                <span>{{deviceInfo.cpuHardware}}</span>
              </li>
              <li>
                <label class="label_width_130">品牌：</label>
                <span>{{deviceInfo.brand}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">安卓id：</label>
                <span>{{deviceInfo.androidId}}</span>
              </li>
              <li>
                <label class="label_width_130">硬件：</label>
                <span>{{deviceInfo.hardware}}</span>
              </li>
              <li>
                <label class="label_width_130">启动时间：</label>
                <span>{{deviceInfo.bootTime}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">激活时长（小时）：</label>
                <span id="activeTime">{{deviceInfo.activeTime}}</span>
              </li>
              <li>
                <label class="label_width_130">代理：</label>
                <span>{{deviceInfo.proxyInfo}}</span>
              </li>
              <li>
                <label class="label_width_130">时区：</label>
                <span>{{deviceInfo.timeZone}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">串行号：</label>
                <span>{{deviceInfo.serialNo}}</span>
              </li>
              <li>
                <label class="label_width_130">标签：</label>
                <span>{{deviceInfo.tags}}</span>
              </li>
              <li>
                <label class="label_width_130">当前时间：</label>
                <span>{{deviceInfo.currentTime}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">deviceSVN：</label>
                <span>{{deviceInfo.deviceSVN}}</span>
              </li>
              <li>
                <label class="label_width_130">内核版本：</label>
                <span>{{deviceInfo.kernelVersion}}</span>
              </li>
              <li>
                <label class="label_width_130">字体哈希：</label>
                <span>{{deviceInfo.fontHash}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">sdk版本：</label>
                <span>{{deviceInfo.sdkVersion}}</span>
              </li>
              <li>
                <label class="label_width_130">cpu类型：</label>
                <span>{{deviceInfo.cpuType}}</span>
              </li>
              <li>
                <label class="label_width_130">bssid：</label>
                <span>{{deviceInfo.bssid}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">routerVendor：</label>
                <span>{{deviceInfo.routerVendor}}</span>
              </li>
              <li>
                <label class="label_width_130">ssid：</label>
                <span>{{deviceInfo.ssid}}</span>
              </li>
              <li>
                <label class="label_width_130">totalStorage：</label>
                <span>{{deviceInfo.totalStorage}}</span>
              </li>
            </div>

            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">vpn网关：</label>
                <span>{{deviceInfo.vpnNetmask}}</span>
              </li>
              <li>
                <label class="label_width_130">root：</label>
                <span>{{deviceInfo.root}}</span>
              </li>
              <li>
                <label class="label_width_130">md5签名：</label>
                <span>{{deviceInfo.signMD5}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">包名：</label>
                <span>{{deviceInfo.packageName}}</span>
              </li>
              <li>
                <label class="label_width_130">网络类型：</label>
                <span>{{deviceInfo.networkType}}</span>
              </li>
              <li>
                <label class="label_width_130">电池级别：</label>
                <span>{{deviceInfo.batteryLevel}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">屏幕分辨率：</label>
                <span>{{deviceInfo.screenRes}}</span>
              </li>
              <li>
                <label class="label_width_130">产品：</label>
                <span>{{deviceInfo.product}}</span>
              </li>
              <li>
                <label class="label_width_130">wifi供应商：</label>
                <span>{{deviceInfo.wifiVendor}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">系统：</label>
                <span>{{deviceInfo.os}}</span>
              </li>
              <li>
                <label class="label_width_130">正式版本：</label>
                <span>{{deviceInfo.releaseVersion}}</span>
              </li>
              <li>
                <label class="label_width_130">展示名：</label>
                <span>{{deviceInfo.display}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">app系统：</label>
                <span>{{deviceInfo.appOs}}</span>
              </li>
              <li>
                <label class="label_width_130">行时长（小时）：</label>
                <span>{{deviceInfo.upTime}}</span>
              </li>
              <li>
                <label class="label_width_130">gpd纬度：</label>
                <span>{{deviceInfo.gpsLocation.latitude}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">gpd经度：</label>
                <span>{{deviceInfo.gpsLocation.longitude}}</span>
              </li>
              <li>
                <label class="label_width_130">屏幕亮度：</label>
                <span>{{deviceInfo.brightness}}</span>
              </li>
              <li>
                <label class="label_width_130">总内存：</label>
                <span>{{deviceInfo.totalMemory}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_130">可用内存：</label>
                <span>{{deviceInfo.availableMemory}}</span>
              </li>
              <li>
                <label class="label_width_130">sdkMD5：</label>
                <span>{{deviceInfo.sdkMD5}}</span>
              </li>
              <li>
                <label class="label_width_130">电池状态：</label>
                <span>{{deviceInfo.batteryStatus}}</span>
              </li>

            </div>
            <div>
              <li>
                <label class="label_width_130">wifiMac：</label>
                <span>{{deviceInfo.wifiMac}}</span>
              </li>
              <li>
                <label class="label_width_130">网关：</label>
                <span>{{deviceInfo.gateway}}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">通话信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="telephonyInfos" style="width:100%;" highlight-current-row border>
            <el-table-column prop="carrier" label="运营商" width="80">
            </el-table-column>
            <el-table-column prop="phoneType" label="通话类型" width="80">
            </el-table-column>
            <el-table-column prop="mnc" label="mnc" width="180">
            </el-table-column>
            <el-table-column prop="phoneNumber" label="电话" width="180">
            </el-table-column>
            <el-table-column prop="countryIso" label="国家" width="100">
            </el-table-column>
            <el-table-column prop="simOperator" label="sim卡类型" width="100">
            </el-table-column>
            <el-table-column prop="imei" label="imei" width="160">
            </el-table-column>
            <el-table-column prop="imsi" label="imsi" width="160">
            </el-table-column>
            <el-table-column prop="mcc" label="mcc" width="160">
            </el-table-column>
            <el-table-column prop="simSerial" label="simSerial" min-width="180">
            </el-table-column>
            <!-- 待确定是否存在 -->
            <!-- <el-table-column prop="radioType" label="radioType" min-width="160">
            </el-table-column> -->
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  import utils from '../../../util/utils';
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4'],
        applyInf: {},
        businessInf: {},
        deviceInfo: {
          gpsLocation: {}
        },
        telephonyInfos: []
      }
    },
    props: {
      applySubNo: {
        default: '',
        type: String,
        required: true
      }
    },
    methods: {
      getInf() {
        this.post(baseurl.DataUrl + '/thirdrisk/tdDevicePortraitAction!notSession_findByApplySubNo.action', {
          applySubNo: this.applySubNo
          // applySubNo : 'PHDX6409598026121217'
        }).then(res => {
          if (res) {
            if (!res.data) return;
            var result = $.parseJSON(res.data);
            if (result && result.result && result.result['10108']) {
              //  申请信息   
              result['result']['10108']['reqInfo'] ? this.applyInf = result['result']['10108']['reqInfo'] : '';
              this.applyInf.applyTime = this.stringToDate(this.applyInf.applyTime)
              if (result['result']['10108']['bizInfo']['reason_code'] == '200') {
                //  业务信息
                result['result']['10108']['bizInfo']['data'] ? this.businessInf = result['result']['10108'][
                  'bizInfo'
                ]['data'] : '';
                // 设备信息
                result['result']['10108']['bizInfo']['data']['deviceInfo'] ? this.deviceInfo = result['result'][
                  '10108'
                ]['bizInfo']['data']['deviceInfo'] : '';
                // 通话信息 
                result['result']['10108']['bizInfo']['data']['deviceInfo']['telephonyInfos'] ? this.telephonyInfos =
                  result['result']['10108']['bizInfo']['data']['deviceInfo']['telephonyInfos'] : '';
                this.deviceInfo.currentTime = this.tranDate(this.deviceInfo.currentTime);
                this.deviceInfo.bootTime = this.tranDate(this.deviceInfo.bootTime);
                this.deviceInfo.activeTime = this.millsToHours(this.deviceInfo.activeTime);
                this.deviceInfo.upTime = this.millsToHours(this.deviceInfo.upTime);
              }
            }
          }
        });
      },
      tranDate(t) {
        var date = new Date(Number(t));
        return date ? date.toLocaleDateString() + date.toLocaleTimeString() : '';
      },
      millsToHours(t) {
        var mills = Number(t);
        if (mills) {
          var hours = (mills / (3600 * 1000)).toFixed(2);
        }
        return hours ? hours : '';
      },
      stringToDate(t) {
        if (t) {
          var d = new Date(t.substring(0, 4), t.substring(4, 6), t.substring(6, 8), t.substring(8, 10),
            t.substring(10, 12), t.substring(12, 14));
        }
        return d ? d.toLocaleDateString() + d.toLocaleTimeString() : '';
      }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
