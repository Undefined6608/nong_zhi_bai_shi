"use strict";
const common_vendor = require("../common/vendor.js");
const common_api = require("../common/api.js");
const _sfc_main = {
  name: "search",
  data() {
    return {
      msg1: {
        load: true,
        avatar: "../static/uni.png",
        name: "用户",
        message: ""
      },
      msg2: {
        load: false,
        avatar: "../static/uni.png",
        name: "电脑",
        message: "暂无回答"
      }
    };
  },
  methods: {
    req() {
      common_api.msglist.push(this.msg1);
      common_api.msglist.push(this.msg2);
      common_vendor.index.$emit("update", "");
      this.$emit("pChangeType");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.msg1.message,
    b: common_vendor.o(($event) => $data.msg1.message = $event.detail.value),
    c: common_vendor.o((...args) => $options.req && $options.req(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5fd12acd"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/search.vue"]]);
wx.createComponent(Component);
