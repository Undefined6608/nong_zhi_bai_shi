"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    go(id) {
      common_vendor.index.navigateTo({
        url: "/pages/bchInner/bchInner?id=" + id
      });
    }
  },
  computed: {
    list() {
      return common_api.getNyList();
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  _easycom_uni_section2();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  _easycom_uni_section();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.list, (item, index, i0) => {
      return {
        a: common_vendor.f(item.rows, (item1, index1, i1) => {
          return {
            a: item1.icon,
            b: common_vendor.t(item1.name),
            c: common_vendor.o(($event) => $options.go(item1.id), index)
          };
        }),
        b: index,
        c: index,
        d: "18587b8b-0-" + i0,
        e: common_vendor.p({
          title: item.type,
          type: "line",
          padding: true
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-18587b8b"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/pages/bing_chong_hai_zao_zhi_dao/bing_chong_hai_zao_zhi_dao.vue"]]);
wx.createPage(MiniProgramPage);
