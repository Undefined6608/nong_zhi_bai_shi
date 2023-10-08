"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "pictureSelect",
  data() {
    return {
      imageStyles: {
        width: 100,
        height: 100,
        margin: "0 auto",
        border: {
          color: "#e7eaf5",
          width: 2,
          style: "dashed",
          radius: "2px"
        }
      },
      radio: 0
    };
  },
  methods: {
    radioChange(res) {
      console.log(res);
      this.radio = Number.parseInt(res.detail.value);
      common_vendor.index.$emit("type", this.radio);
    },
    select(res) {
      console.log(res);
      this.$emit("show", true);
    }
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.select),
    b: common_vendor.p({
      limit: "1",
      ["image-styles"]: $data.imageStyles
    }),
    c: common_vendor.o((...args) => $options.radioChange && $options.radioChange(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf8bab18"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/pictureSelect.vue"]]);
wx.createComponent(Component);
