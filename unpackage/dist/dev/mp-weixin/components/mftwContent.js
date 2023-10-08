"use strict";
const common_vendor = require("../common/vendor.js");
const common_api = require("../common/api.js");
const _sfc_main = {
  name: "mftwContent",
  data() {
    return {
      s_i: 0,
      array: []
    };
  },
  computed: {
    list() {
      return common_api.mftwList();
    }
  },
  methods: {
    update(val) {
      this.array = this.list[Number.parseInt(val)].rows;
    },
    tw(val) {
      common_vendor.index.navigateTo({
        url: "/pages/ti_wen/ti_wen?id=" + val
      });
    }
  },
  props: ["i"],
  watch: {
    i(curVal, oldVal) {
      this.s_i = Number.parseInt(curVal);
      this.update(this.s_i);
    }
  },
  mounted() {
    this.update(0);
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
    a: common_vendor.f($data.array, (item, index, i0) => {
      return {
        a: common_vendor.f(item.inner, (item1, index1, i1) => {
          return {
            a: item1.icon,
            b: common_vendor.t(item1.name),
            c: common_vendor.t(item1.type),
            d: common_vendor.t(item1.context),
            e: common_vendor.t(!item1.is ? "+关注" : "已关注"),
            f: common_vendor.n(item1.is ? "ygz" : ""),
            g: common_vendor.o(($event) => $options.tw(item1.id), index1),
            h: index1
          };
        }),
        b: index,
        c: "6a622a4f-0-" + i0,
        d: common_vendor.p({
          title: item.type,
          type: "line",
          padding: true
        })
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a622a4f"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/mftwContent.vue"]]);
wx.createComponent(Component);
