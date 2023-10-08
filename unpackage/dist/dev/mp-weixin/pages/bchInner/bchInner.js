"use strict";
const common_api = require("../../common/api.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: 0,
      list: {
        id: 0,
        name: "",
        icon: "",
        type: "",
        context: "",
        prevention_and_cure: "暂无防治方法"
      }
    };
  },
  methods: {
    getLsit(id) {
      let array = common_api.getNyList();
      setTimeout(() => {
        for (var i = 0; i < array.length; i++) {
          for (var j = 0; j < array[i].rows.length; j++) {
            if (array[i].rows[j].id == id) {
              this.list = array[i].rows[j];
            }
          }
        }
      }, 500);
    }
  },
  onLoad(res) {
    this.id = Number.parseInt(res.id);
    this.getLsit(this.id);
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
    a: $data.list.icon,
    b: common_vendor.t($data.list.name),
    c: common_vendor.t($data.list.type),
    d: common_vendor.p({
      title: "类型",
      type: "circle",
      padding: true
    }),
    e: common_vendor.t($data.list.context),
    f: common_vendor.p({
      title: "物品介绍",
      type: "line",
      padding: true
    }),
    g: common_vendor.t($data.list.prevention_and_cure),
    h: common_vendor.p({
      title: "防治方法",
      type: "square",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bad237a0"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/pages/bchInner/bchInner.vue"]]);
wx.createPage(MiniProgramPage);
