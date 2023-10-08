"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/mian_fei_ti_wen/mian_fei_ti_wen.js";
  "./pages/zhi_neng_zi_zhen/zhi_neng_zi_zhen.js";
  "./pages/find/find.js";
  "./pages/bing_chong_hai_zao_zhi_dao/bing_chong_hai_zao_zhi_dao.js";
  "./pages/ti_wen/ti_wen.js";
  "./pages/bchInner/bchInner.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
