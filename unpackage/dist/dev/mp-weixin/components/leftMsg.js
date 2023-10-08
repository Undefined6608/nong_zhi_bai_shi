"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "leftMsg",
  data() {
    return {};
  },
  props: ["avatar", "name", "message"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.avatar,
    b: common_vendor.t($props.name),
    c: common_vendor.t($props.message)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fd2b4231"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/leftMsg.vue"]]);
wx.createComponent(Component);
