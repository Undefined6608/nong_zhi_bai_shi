"use strict";
const common_api = require("../common/api.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "ziZhenContent",
  data() {
    return {};
  },
  methods: {
    pop(id) {
      this.$emit("show", true);
    }
  },
  computed: {
    list() {
      return common_api.ziZhenList();
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  _easycom_uni_section2();
}
const _easycom_uni_section = () => "../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  _easycom_uni_section();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.list, (item, index, i0) => {
      return {
        a: common_vendor.f(item.inner, (item2, index2, i1) => {
          return {
            a: item2.icon,
            b: common_vendor.t(item2.name),
            c: index2,
            d: common_vendor.o(($event) => $options.pop(item2.id), index2)
          };
        }),
        b: index,
        c: "c9580966-0-" + i0,
        d: common_vendor.p({
          title: item.name,
          type: "line",
          padding: true
        })
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c9580966"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/ziZhenContent.vue"]]);
wx.createComponent(Component);
