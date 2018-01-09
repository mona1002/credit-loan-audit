import apiService from '../../util/apiServer'
import appConstant from '../../util/constant'

var URL = {
  // 工作流接口-------------------------------------------
  // 查询流程监控
  getProcessMonitorList: "bpmService/getProcessMonitorList",
  // 转分派任务轨迹
  getTransmitHistoryList: "bpmService/getTransmitHistoryList",
  // 查询流程轨迹
  getProcessTraceList: "bpmService/getProcessTraceList",
  // 转办任务
  transmitTask: "bpmService/transmitTask",
 
};

var processMoniSer = apiService(appConstant.baseUrl_common2).build(URL);

export default processMoniSer