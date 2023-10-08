"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "banner",
  data() {
    return {
      banner: ["../static/banner-1.jpeg", "../static/banner-2.jpeg", "../static/banner-3.jpeg"]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.banner, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d42d60d2"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/banner.vue"]]);
wx.createComponent(Component);
