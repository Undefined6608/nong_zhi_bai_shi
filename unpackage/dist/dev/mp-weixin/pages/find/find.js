"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
const chaxun = () => "../../components/chaxun.js";
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    positioning(val) {
      common_vendor.index.pageScrollTo({
        selector: "#item" + val,
        duration: 500
      });
    }
  },
  computed: {
    list() {
      return common_api.getFind();
    }
  },
  components: {
    chaxun
  }
};
if (!Array) {
  const _component_chaxun = common_vendor.resolveComponent("chaxun");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_component_chaxun + _easycom_uni_section2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  _easycom_uni_section();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.positioning(item.id), index)
      };
    }),
    b: common_vendor.f($options.list, (item, index, i0) => {
      return {
        a: common_vendor.f(item.rows, (item1, index1, i1) => {
          return {
            a: item1.icon,
            b: common_vendor.t(item1.name),
            c: common_vendor.t(item1.context),
            d: common_vendor.t(item1.using),
            e: index1
          };
        }),
        b: "item" + item.id,
        c: index,
        d: "1c765c2e-1-" + i0,
        e: common_vendor.p({
          id: "item" + item.id,
          title: item.name,
          padding: true,
          type: "line"
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c765c2e"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/pages/find/find.vue"]]);
wx.createPage(MiniProgramPage);
