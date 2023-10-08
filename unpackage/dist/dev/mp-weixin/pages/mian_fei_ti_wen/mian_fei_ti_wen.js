"use strict";
const common_api = require("../../common/api.js");
const common_vendor = require("../../common/vendor.js");
const mftwContent = () => "../../components/mftwContent.js";
const _sfc_main = {
  data() {
    return {
      selector: 0
    };
  },
  methods: {
    selectorClick(index) {
      this.selector = index;
    }
  },
  computed: {
    list() {
      return common_api.mftwList();
    }
  },
  components: {
    mftwContent
  }
};
if (!Array) {
  const _component_mftwContent = common_vendor.resolveComponent("mftwContent");
  _component_mftwContent();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.selector),
        b: common_vendor.n($data.selector == index ? "s_title" : ""),
        c: index,
        d: common_vendor.o(($event) => $options.selectorClick(index), index)
      };
    }),
    b: common_vendor.p({
      i: $data.selector
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a2b5ee1"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/pages/mian_fei_ti_wen/mian_fei_ti_wen.vue"]]);
wx.createPage(MiniProgramPage);
