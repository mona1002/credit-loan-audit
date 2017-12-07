import apiService from '../../util/http2'
import appConstant from '../../util/constant'

var URL = {
  // 用户管理-------------------------------------------
  // 请求数据接口
  getRoles: "roleMgr/getRolesByPage",
  // 根据 id 查询角色
  getRoleById: "get::roleMgr/getRoleById",
  // 编辑角色
  updateRole: "roleMgr/updateRole",
  // 启用停用角色
  updateValidFlag: "get::roleMgr/updateValidFlag",
  // 新增角色
  addRole: "roleMgr/addRole",
  // 授权角色
  grantRes: "roleMgr/grantRes",
  
  // 资源管理-------------------------------------------
  // 查询资源列表
  getResTree: "res/getResTree",
  // 查看某一条资源
  getResItem: "get::res/get",
  // 添加一条资源
  add: "res/add",
  // 修改一条资源
  update: "res/update",


  
};

var systemManageHttp = apiService(appConstant.baseUrl_user).build(URL);

export default systemManageHttp