import apiService from '../../util/apiServer'
import appConstant from '../../util/constant'

var URL = { 
  // 查询流程监控
  getProcessMonitorList: "/creauditInfo/approvalTrajectory",
  // 转分派任务轨迹
  getTransmitHistoryList: "get::/creauditInfo/getTransmitHistoryList",
  // 查询审批流程轨迹
  getProcessTraceList: "get::/creauditInfo/getProcessTraceList",
  // 转办任务
  transmitTask: "/creauditInfo/transmitTask",
};

// var processMoniSer = apiService(appConstant.baseUrl_common2).build(URL);
var processMoniSer = apiService(appConstant.baseUrl_common).build(URL);

export default processMoniSer