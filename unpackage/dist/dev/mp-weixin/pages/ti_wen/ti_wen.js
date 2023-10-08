"use strict";
const common_vendor = require("../../common/vendor.js");
const zdyBack = () => "../../components/zdyBack.js";
const search = () => "../../components/search.js";
const tiWenContent = () => "../../components/tiWenContent.js";
const _sfc_main = {
  data() {
    return {
      selectorID: 0
    };
  },
  components: {
    search,
    tiWenContent,
    zdyBack
  },
  onBackPress() {
    this.back();
    return true;
  },
  methods: {
    back() {
      common_vendor.index.switchTab({
        url: "/pages/mian_fei_ti_wen/mian_fei_ti_wen"
      });
    },
    /* 获取当前页带参数的url */
    splicePageUrlWithParams(obj) {
      const path = obj.route;
      const query = obj.options;
      var urlWithParams = "/" + path + "?";
      for (let key in query) {
        const value = query[key];
        urlWithParams += key + "=" + value + "&";
      }
      urlWithParams = urlWithParams.substring(0, urlWithParams.length - 1);
      return urlWithParams;
    },
    getPageUrl(lastIndex, withParams = true) {
      const pages = getCurrentPages();
      if (pages.length > 0 && pages.length >= lastIndex) {
        const thePage = pages.splice(-lastIndex, 1)[0];
        if (withParams) {
          return this.splicePageUrlWithParams(thePage);
        } else {
          return `/${thePage.route}`;
        }
      } else {
        console.log("pages are empty or lastIndex error");
        return "";
      }
    },
    pageUpdate() {
      const url = this.getPageUrl(1);
      common_vendor.index.reLaunch({
        url,
        success: () => {
        }
      });
    }
  },
  onLoad(res) {
    console.log(res);
    this.selectorID = Number.parseInt(res.id);
  }
};
if (!Array) {
  const _component_zdyBack = common_vendor.resolveComponent("zdyBack");
  const _component_tiWenContent = common_vendor.resolveComponent("tiWenContent");
  const _component_search = common_vendor.resolveComponent("search");
  (_component_zdyBack + _component_tiWenContent + _component_search)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      url: "/pages/mian_fei_ti_wen/mian_fei_ti_wen",
      title: "消息页面"
    }),
    b: common_vendor.o($options.pageUpdate)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74ed596d"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/pages/ti_wen/ti_wen.vue"]]);
wx.createPage(MiniProgramPage);
