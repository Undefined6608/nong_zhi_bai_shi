"use strict";
const common_vendor = require("../common/vendor.js");
const common_api = require("../common/api.js");
const leftMsg = () => "./leftMsg.js";
const rightMsg = () => "./rightMsg.js";
const _sfc_main = {
  data() {
    return {
      msg_list: []
    };
  },
  methods: {
    getMsgList() {
      this.msg_list = common_api.msgList();
    }
  },
  computed: {},
  onLoad() {
    common_vendor.index.$on("update", (update) => {
      this.getMsgList();
    });
  },
  mounted() {
    this.getMsgList();
  },
  components: {
    leftMsg,
    rightMsg
  }
};
if (!Array) {
  const _component_leftMsg = common_vendor.resolveComponent("leftMsg");
  const _component_rightMsg = common_vendor.resolveComponent("rightMsg");
  (_component_leftMsg + _component_rightMsg)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msg_list, (item, index, i0) => {
      return common_vendor.e({
        a: !item.load
      }, !item.load ? {
        b: "d3b1aa8c-0-" + i0,
        c: common_vendor.p({
          avatar: item.avatar,
          name: item.name,
          message: item.message
        })
      } : {
        d: "d3b1aa8c-1-" + i0,
        e: common_vendor.p({
          avatar: item.avatar,
          name: item.name,
          message: item.message
        })
      }, {
        f: index
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d3b1aa8c"], ["__file", "D:/ProjectDocumentStorage/UniApp/nong_zhi_bai_shi01/components/tiWenContent.vue"]]);
wx.createComponent(Component);
