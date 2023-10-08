"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    url: {
      type: String,
      default: () => {
        return "";
      }
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    /**
     * @description: H5 App通用方案 解决H5刷新返回失败问题
     * @param {*} params
     */
    navigateBack() {
      common_vendor.index.switchTab({
        url: this.url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.navigateBack && $options.navigateBack(...args)),
    b: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-252536d8"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/zdyBack.vue"]]);
wx.createComponent(Component);
