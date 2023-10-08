"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "chaxun",
  data() {
    return {
      s_text: "",
      isShow: false
    };
  },
  watch: {
    s_text() {
      if (this.s_text == "") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(!$data.isShow ? "input_no" : "input"),
    b: $data.s_text,
    c: common_vendor.o(($event) => $data.s_text = $event.detail.value),
    d: common_vendor.n(!$data.isShow ? "show" : "")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-04e6e7f9"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/chaxun.vue"]]);
wx.createComponent(Component);
