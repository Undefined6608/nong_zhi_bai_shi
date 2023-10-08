"use strict";
const common_vendor = require("../../common/vendor.js");
const pictureSelect = () => "../../components/pictureSelect.js";
const ziZhenContent = () => "../../components/ziZhenContent.js";
const picturePop = () => "../../components/picturePop.js";
const _sfc_main = {
  data() {
    return {
      popDisplay: false
    };
  },
  methods: {
    popShow(type) {
      this.popDisplay = type;
    }
  },
  components: {
    pictureSelect,
    ziZhenContent,
    picturePop
  }
};
if (!Array) {
  const _component_pictureSelect = common_vendor.resolveComponent("pictureSelect");
  const _component_ziZhenContent = common_vendor.resolveComponent("ziZhenContent");
  const _component_picturePop = common_vendor.resolveComponent("picturePop");
  (_component_pictureSelect + _component_ziZhenContent + _component_picturePop)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.popShow),
    b: common_vendor.o($options.popShow),
    c: $data.popDisplay,
    d: common_vendor.o($options.popShow)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/pages/zhi_neng_zi_zhen/zhi_neng_zi_zhen.vue"]]);
wx.createPage(MiniProgramPage);
