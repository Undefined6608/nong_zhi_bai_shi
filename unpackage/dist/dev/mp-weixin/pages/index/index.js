"use strict";
const common_vendor = require("../../common/vendor.js");
const banner = () => "../../components/banner.js";
const tuiJian = () => "../../components/tuiJian.js";
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  components: {
    banner,
    tuiJian
  }
};
if (!Array) {
  const _component_banner = common_vendor.resolveComponent("banner");
  const _component_tuiJian = common_vendor.resolveComponent("tuiJian");
  (_component_banner + _component_tuiJian)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
