"use strict";
const common_vendor = require("../common/vendor.js");
const common_api = require("../common/api.js");
const _sfc_main = {
  name: "tuiJian",
  data() {
    return {};
  },
  methods: {
    go(load_url, index) {
      if (index == 1) {
        common_vendor.index.navigateTo({
          url: load_url
        });
        return;
      }
      common_vendor.index.switchTab({
        url: load_url
      });
    }
  },
  computed: {
    list() {
      return common_api.TuiJianList();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.list, (item, index, i0) => {
      return {
        a: item.avatar,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.content),
        d: common_vendor.n(index % 2 == 0 ? "back_ground1" : "back_ground2"),
        e: index,
        f: common_vendor.o(($event) => $options.go(item.url, index), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab1cbd58"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/tuiJian.vue"]]);
wx.createComponent(Component);
