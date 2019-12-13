var baseUrl = "/api";
// var baseUrl = "";
//登录
var login = baseUrl + '/login'
//退出登录
var exit = baseUrl + '/exit'
//查询管理员
var findManage = baseUrl + '/findManage'
//添加管理员
var addManage = baseUrl + '/addManage'
//删除管理员
var delManage = baseUrl + '/delManage'
//更新管理员
var updateManage = baseUrl + '/updateManage'
//获取首页轮播图
var banner = baseUrl + '/banner'
//添加轮播图
var addBanner = baseUrl + '/addBanner'
//删除轮播图
var delBanner = baseUrl + '/delBanner'
//删除家教轮播
var delTeacherBanner = baseUrl + '/delTeacherBanner'
//获取家教轮播
var teacherBanner = baseUrl + '/teacherBanner'
//添加家教轮播
var addTeacherBanner = baseUrl + '/addTeacherBanner'
//添加家教类型
var addTeacherType = baseUrl + '/addTeacherType'
//获取类型
var teacherType = baseUrl + '/teacherType'
//删除类型
var delTeacherType = baseUrl + '/delTeacherType'
//获取排行
var teacherTop = baseUrl + '/teacherTop'
//添加排行
var addTeacherTop = baseUrl + '/addTeacherTop'
//删除排行
var delTeacherTop = baseUrl + '/delTeacherTop'
//添加水站
var addWater = baseUrl + '/addWater'
//获取水站
var findWater = baseUrl + '/findWater'
//删除水站
var delWater = baseUrl + '/delWater'
//更新水站
var updateWater = baseUrl + '/updateWater'
//获取水站评论
var findComment = baseUrl + '/findComment'
//删除评论
var delComment = baseUrl + '/delComment'
//添加水站评论
var addComment = baseUrl + '/addComment'
//添加维修
var addRepair = baseUrl + '/addRepair'
//获取维修列表
var findRepair = baseUrl + '/findRepair'
//删除维修
var delRepair = baseUrl + '/delRepair'
//更新维修
var updateRepair = baseUrl + '/updateRepair'
//获取维修评论
var findRepairComment = baseUrl + '/findRepairComment'
//删除维修评论
var delRepairComment = baseUrl + '/delRepairComment'
// 添加家政轮播图
var addHomeBanner = baseUrl + '/addHomeBanner'
// 获取家政轮播图
var homeBanner = baseUrl + '/homeBanner'
// 删除轮播图
var delHomeBanner = baseUrl + '/delHomeBanner'
// 添加员工信息
var addHomeWorker = baseUrl + '/addHomeWorker'
// 获取员工信息
var findHomeWorker = baseUrl + '/findHomeWorker'
// 删除员工信息
var delHomeWorker = baseUrl + '/delHomeWorker'
// 更新员工信息
var updateHomeWorker = baseUrl + '/updateHomeWorker'
//获取资格证书接口
var getQualification = baseUrl + '/getQualification'
//获取家政服务类型
var getHomeType = baseUrl + '/getHomeType'
//修改密码
var changePassManage = baseUrl + '/changePassManage'
export default {
  changePassManage,
  getQualification,
  getHomeType,
  findHomeWorker,
  delHomeWorker,
  updateHomeWorker,
  addHomeWorker,
  delHomeBanner,
  homeBanner,
  addHomeBanner,
  login,
  exit,
  findManage,
  addManage,
  delManage,
  updateManage,
  banner,
  addBanner,
  delBanner,
  delTeacherBanner,
  teacherBanner,
  addTeacherBanner,
  addTeacherType,
  teacherType,
  delTeacherType,
  teacherTop,
  addTeacherTop,
  delTeacherTop,
  updateWater,
  addWater,
  findWater,
  delWater,
  addComment,
  delComment,
  findComment,
  updateRepair,
  delRepair,
  findRepair,
  addRepair,
  delRepairComment,
  findRepairComment,
}
