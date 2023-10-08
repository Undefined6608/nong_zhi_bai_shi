"use strict";
const common_vendor = require("../common/vendor.js");
const common_api = require("../common/api.js");
const _sfc_main = {
  name: "picturePop",
  data() {
    return {
      typeRadio: 0
    };
  },
  methods: {
    change(res) {
      console.log(res);
    },
    bottom() {
      this.$emit("show", false);
    },
    inner() {
    },
    se(res) {
    }
  },
  onLoad() {
    common_vendor.index.$on("type", (res) => {
      this.typeRadio = Number.parseInt(res);
      console.log(res);
    });
  },
  computed: {
    list() {
      return common_api.popList(this.typeRadio);
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
    a: $options.list.avatar,
    b: common_vendor.t($options.list.name),
    c: common_vendor.t($options.list.context),
    d: common_vendor.p({
      title: "动/植物介绍",
      type: "line",
      padding: true
    }),
    e: common_vendor.f($options.list.drug, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.se(index), index)
      };
    }),
    f: common_vendor.p({
      title: "推荐药品",
      type: "line",
      padding: true
    }),
    g: common_vendor.o((...args) => $options.inner && $options.inner(...args)),
    h: common_vendor.o((...args) => $options.bottom && $options.bottom(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-29144246"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/picturePop.vue"]]);
wx.createComponent(Component);
