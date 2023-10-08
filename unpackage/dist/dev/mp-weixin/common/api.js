"use strict";
function TuiJianList() {
  let list = [
    {
      title: "免费提问",
      content: "描述症状、快速解决",
      avatar: "../static/wen_hao.png",
      url: "/pages/mian_fei_ti_wen/mian_fei_ti_wen"
    },
    {
      title: "病虫害早知道",
      content: "学习农业技术",
      avatar: "../static/zhi_liao.png",
      url: "/pages/bing_chong_hai_zao_zhi_dao/bing_chong_hai_zao_zhi_dao"
    },
    {
      title: "智能自诊",
      content: "系统自动诊断，准确率高",
      avatar: "../static/zi_zhen.png",
      url: "/pages/zhi_neng_zi_zhen/zhi_neng_zi_zhen"
    }
  ];
  return list;
}
let msglist = [
  {
    load: false,
    avatar: "../static/uni.png",
    name: "电脑",
    message: "jdaskjdkjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjkdhsfjkh"
  },
  {
    load: false,
    avatar: "../static/uni.png",
    name: "电脑",
    message: "jdaskjdkjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjkdhsfjkh"
  },
  {
    load: true,
    avatar: "../static/uni.png",
    name: "用户",
    message: "jdaskjdkjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjkdhsfjkh"
  },
  {
    load: false,
    avatar: "../static/uni.png",
    name: "电脑",
    message: "jdaskjdkjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjkdhsfjkh"
  },
  {
    load: true,
    avatar: "../static/uni.png",
    name: "用户",
    message: "jdaskjdkjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjjhdkhdjkfhasjkdhfjkdhsfjkh"
  }
];
function msgList() {
  return msglist;
}
function popList(type, index) {
  let animalList = [
    {
      id: 1,
      avatar: "../static/popImg/a/img/a1.jpg",
      name: "蛴螬",
      context: "蛴螬对果园苗圃、幼苗及其他作物的危害主要是春秋两季最重。蛴螬咬食幼苗嫩茎，薯芋类块根被钻成孔眼，当植株枯黄而死时，它又转移到别的植株继续危害。此外，因蛴螬造成的伤口还可诱发病害。其中植食性蛴螬食性广泛，危害多种农作物、经济作物和花卉苗木，喜食刚播种的种子、根、块茎以及幼苗，是世界性的地下害虫，危害很大。",
      drug: [
        {
          icon: "../static/popImg/a/1/ay11.jpg",
          name: "辛硫磷"
        },
        {
          icon: "../static/popImg/a/1/ay12.jpg",
          name: "甲氰菊酯"
        },
        {
          icon: "../static/popImg/a/1/ay13.jpg",
          name: "肥地龙168"
        },
        {
          icon: "../static/popImg/a/1/ay14.jpg",
          name: "噻嗪酮"
        }
      ]
    },
    {
      id: 2,
      avatar: "../static/popImg/a/img/a2.jpg",
      name: "金针虫",
      context: "以幼虫长期生活于土壤中，主要为害禾谷类、薯类、豆类、甜菜、棉花及各种蔬菜和林木幼苗等。幼虫能咬食刚播下的种子，食害胚乳使其不能发芽，如已出苗可为害须根、主根和茎的地下部分，使幼苗枯死。主根受害部不整齐，还能蛀入块茎和块根。",
      drug: [
        {
          icon: "../static/popImg/a/2/ay21.jpg",
          name: "甲基异柳磷"
        },
        {
          icon: "../static/popImg/a/2/ay22.jpg",
          name: "二嗪农"
        },
        {
          icon: "../static/popImg/a/2/ay23.jpg",
          name: "速灭杀丁"
        },
        {
          icon: "../static/popImg/a/2/ay24.jpg",
          name: "敌百虫"
        }
      ]
    },
    {
      id: 3,
      avatar: "../static/popImg/a/img/a3.jpg",
      name: "小麦吸浆虫",
      context: "以幼虫潜伏在颖壳内吸食正在灌浆的麦粒汁液，造成秕粒、空壳。小麦吸浆虫以幼虫为害花器、籽实和或麦粒，是一种毁灭性害虫。",
      drug: [
        {
          icon: "../static/popImg/a/3/ay31.jpg",
          name: "毒死蜱"
        },
        {
          icon: "../static/popImg/a/3/ay32.jpg",
          name: "辛硫磷"
        },
        {
          icon: "../static/popImg/a/3/ay33.jpg",
          name: "氯氟·吡虫啉"
        },
        {
          icon: "../static/popImg/a/3/ay34.jpg",
          name: "呋虫胺"
        }
      ]
    },
    {
      id: 4,
      avatar: "../static/popImg/a/img/a4.jpg",
      name: "玉米蚜",
      context: "玉米蚜在玉米苗期群集在心叶内，刺吸为害。随着植株生长集中在新生的叶片为害。孕穗期多密集在剑叶内和叶鞘上为害。边吸取玉米汁液，边排泄大量蜜露，覆盖叶面上的蜜露影响光合作用，易引起霉菌寄生，被害植株长势衰弱，发育不良，产量下降。",
      drug: [
        {
          icon: "../static/popImg/a/4/ay41.jpg",
          name: "噻虫嗪"
        },
        {
          icon: "../static/popImg/a/4/ay42.jpg",
          name: "呋虫胺"
        },
        {
          icon: "../static/popImg/a/4/ay43.jpg",
          name: "吡虫啉"
        },
        {
          icon: "../static/popImg/a/4/ay44.jpg",
          name: "蚜虱净"
        }
      ]
    }
  ];
  let plantList = [
    {
      avatar: "",
      context: "",
      drug: [
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        }
      ]
    },
    {
      avatar: "",
      context: "",
      drug: [
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        }
      ]
    },
    {
      avatar: "",
      context: "",
      drug: [
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        }
      ]
    },
    {
      avatar: "",
      context: "",
      drug: [
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        },
        {
          icon: "",
          name: ""
        }
      ]
    }
  ];
  if (type == 0) {
    return animalList[Math.floor(Math.random() * 4)];
  }
  if (type == 1) {
    return plantList[Math.floor(Math.random() * 4)];
  }
}
function ziZhenList() {
  let list = [
    {
      name: "常见农业害虫",
      inner: [
        {
          icon: "../static/popImg/a/img/a1.jpg",
          type: 0,
          id: 0,
          name: "蛴螬"
        },
        {
          icon: "../static/popImg/a/img/a2.jpg",
          type: 0,
          id: 1,
          name: "金针虫"
        },
        {
          icon: "../static/popImg/a/img/a3.jpg",
          type: 0,
          id: 2,
          name: "小麦吸浆虫"
        },
        {
          icon: "../static/popImg/a/img/a4.jpg",
          type: 0,
          id: 3,
          name: "玉米蚜"
        },
        {
          icon: "../static/popImg/a/img/a1.jpg",
          type: 0,
          id: 4,
          name: "蛴螬"
        },
        {
          icon: "../static/popImg/a/img/a2.jpg",
          type: 0,
          id: 5,
          name: "金针虫"
        },
        {
          icon: "../static/popImg/a/img/a3.jpg",
          type: 0,
          id: 6,
          name: "小麦吸浆虫"
        },
        {
          icon: "../static/popImg/a/img/a4.jpg",
          type: 0,
          id: 7,
          name: "玉米蚜"
        }
      ]
    },
    {
      name: "农作物",
      inner: [
        {
          icon: "",
          type: 0,
          id: 8,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 9,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 10,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 11,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 12,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 13,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 14,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 15,
          name: ""
        }
      ]
    },
    {
      name: "杂草",
      inner: [
        {
          icon: "",
          type: 0,
          id: 16,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 17,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 18,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 19,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 20,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 21,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 22,
          name: ""
        },
        {
          icon: "",
          type: 0,
          id: 23,
          name: ""
        }
      ]
    }
  ];
  return list;
}
function mftwList() {
  let list = [
    {
      selector: "专家",
      rows: [
        {
          type: "您可能感兴趣的专家",
          inner: [
            {
              id: 1,
              name: "刘飞宏",
              icon: "../static/tx1.png",
              type: "普通专家",
              context: "水稻、玉米、小麦、大豆",
              is: false
            },
            {
              id: 2,
              name: "孙武学",
              icon: "../static/tx2.png",
              type: "种植专家",
              context: "西瓜、甜瓜、冬瓜、南瓜",
              is: false
            },
            {
              id: 3,
              name: "陈宏光",
              icon: "../static/tx3.png",
              type: "种植专家",
              context: "葡萄",
              is: false
            },
            {
              id: 4,
              name: "张永稻",
              icon: "../static/tx4.png",
              type: "维护专家",
              context: "水稻、西瓜、小麦、葡萄",
              is: false
            }
          ]
        },
        {
          type: "我关注的专家",
          inner: [{
            id: 5,
            name: "李博士",
            icon: "../static/uni.png",
            type: "普通专家",
            context: "大白菜、甘薯、马铃薯……",
            is: true
          }]
        }
      ]
    },
    {
      selector: "作物",
      rows: [
        {
          type: "您可能感兴趣的作物",
          inner: [
            {
              id: 6,
              name: "小麦",
              icon: "../static/uni.png",
              type: "农产品",
              context: "结穗产品",
              is: false
            },
            {
              id: 7,
              name: "玉米",
              icon: "../static/tx1.png",
              type: "农产品",
              context: "单独",
              is: false
            },
            {
              id: 8,
              name: "水稻",
              icon: "../static/tx2.png",
              type: "农产品",
              context: "米",
              is: false
            },
            {
              id: 9,
              name: "西瓜",
              icon: "../static/tx3.png",
              type: "农产品",
              context: "汁水很多",
              is: false
            }
          ]
        },
        {
          type: "我关注的作物",
          inner: [{
            id: 10,
            name: "葡萄",
            icon: "../static/tx4.png",
            type: "农产品",
            context: "酸甜可口",
            is: true
          }]
        }
      ]
    },
    {
      selector: "病虫害",
      rows: [
        {
          type: "您可能感兴趣的害虫",
          inner: [
            {
              id: 11,
              name: "蛴螬",
              icon: "../static/popImg/a/img/a1.jpg",
              type: "害虫",
              context: "果园苗圃",
              is: false
            },
            {
              id: 12,
              name: "金针虫",
              icon: "../static/popImg/a/img/a2.jpg",
              type: "害虫",
              context: "禾谷类、薯类、豆类、甜菜、棉花及各种蔬菜和林木幼苗",
              is: false
            },
            {
              id: 13,
              name: "小麦吸浆虫",
              icon: "../static/popImg/a/img/a3.jpg",
              type: "害虫",
              context: "花器、籽实和或麦粒",
              is: false
            },
            {
              id: 14,
              name: "玉米蚜",
              icon: "../static/popImg/a/img/a4.jpg",
              type: "害虫",
              context: "玉米汁液，边排泄大量蜜露，覆盖叶面上的蜜露影响光合作用",
              is: false
            }
          ]
        },
        {
          type: "我关注的害虫",
          inner: [{
            id: 15,
            name: "蚊子",
            icon: "../static/uni.png",
            type: "害虫",
            context: "吸血",
            is: true
          }]
        }
      ]
    }
  ];
  return list;
}
function getNyList() {
  let list = [
    {
      id: 0,
      type: "蔬菜",
      rows: [
        {
          id: 0,
          name: "小麦",
          icon: "../../static/ny/vegetable/0.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 1,
          name: "豌豆",
          icon: "../../static/ny/vegetable/1.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 2,
          name: "竹笋",
          icon: "../../static/ny/vegetable/2.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 3,
          name: "玉米",
          icon: "../../static/ny/vegetable/3.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 4,
          name: "大蒜",
          icon: "../../static/ny/vegetable/4.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 5,
          name: "西红柿",
          icon: "../../static/ny/vegetable/5.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 6,
          name: "黄瓜",
          icon: "../../static/ny/vegetable/6.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 27,
          name: "葱",
          icon: "../../static/ny/vegetable/7.jpg",
          type: "蔬菜",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        }
      ]
    },
    {
      id: 1,
      type: "水果",
      rows: [
        {
          id: 7,
          name: "苹果",
          icon: "../../static/ny/fruit/0.jpg",
          type: "水果",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 8,
          name: "草莓",
          icon: "../../static/ny/fruit/1.jpg",
          type: "水果",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 9,
          name: "菠萝",
          icon: "../../static/ny/fruit/2.jpg",
          type: "水果",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 10,
          name: "葡萄",
          icon: "../../static/ny/fruit/3.jpg",
          type: "水果",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 11,
          name: "猕猴桃",
          icon: "../../static/ny/fruit/4.jpg",
          type: "水果",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 12,
          name: "石榴",
          icon: "../../static/ny/fruit/5.jpg",
          type: "水果",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 13,
          name: "冬枣",
          icon: "../../static/ny/fruit/6.jpg",
          type: "水果",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        }
      ]
    },
    {
      id: 1,
      type: "香料",
      rows: [
        {
          id: 14,
          name: "八角",
          icon: "../../static/ny/aniseed/0.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 15,
          name: "小茴香",
          icon: "../../static/ny/aniseed/1.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 16,
          name: "花椒",
          icon: "../../static/ny/aniseed/2.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 17,
          name: "麻椒",
          icon: "../../static/ny/aniseed/3.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 18,
          name: "辣椒",
          icon: "../../static/ny/aniseed/4.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 19,
          name: "良姜",
          icon: "../../static/ny/aniseed/5.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 20,
          name: "胡椒",
          icon: "../../static/ny/aniseed/6.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 21,
          name: "丁香",
          icon: "../../static/ny/aniseed/7.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 22,
          name: "桂皮",
          icon: "../../static/ny/aniseed/8.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 23,
          name: "香叶",
          icon: "../../static/ny/aniseed/9.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 24,
          name: "孜然",
          icon: "../../static/ny/aniseed/10.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 25,
          name: "白芷",
          icon: "../../static/ny/aniseed/11.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 26,
          name: "山奈",
          icon: "../../static/ny/aniseed/12.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 28,
          name: "草果",
          icon: "../../static/ny/aniseed/13.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 29,
          name: "草寇",
          icon: "../../static/ny/aniseed/14.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 30,
          name: "豆蔻",
          icon: "../../static/ny/aniseed/15.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        },
        {
          id: 30,
          name: "肉蔻",
          icon: "../../static/ny/aniseed/16.jpg",
          type: "香料",
          context: "暂无介绍！！！",
          prevention_and_cure: "暂无防治方法"
        }
      ]
    }
  ];
  return list;
}
function getFind() {
  let list = [{
    id: 0,
    name: "小麦",
    rows: [{
      id: 0,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 1,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 2,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 3,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }]
  }, {
    id: 1,
    name: "玉米",
    rows: [{
      id: 4,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 5,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 6,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 7,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }]
  }, {
    id: 2,
    name: "水稻",
    rows: [{
      id: 8,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 9,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 10,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 11,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }]
  }, {
    id: 3,
    name: "白菜",
    rows: [{
      id: 12,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 13,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 14,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 15,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }]
  }, {
    id: 4,
    name: "大豆",
    rows: [{
      id: 16,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 17,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 18,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 19,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }]
  }, {
    id: 5,
    name: "花生",
    rows: [{
      id: 20,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 21,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 22,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 23,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }]
  }, {
    id: 6,
    name: "豌豆",
    rows: [{
      id: 24,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 25,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 26,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }, {
      id: 27,
      name: "1",
      icon: "../../static/tx1.png",
      context: "暂无介绍！！！",
      using: "暂无用途！！！"
    }]
  }];
  return list;
}
exports.TuiJianList = TuiJianList;
exports.getFind = getFind;
exports.getNyList = getNyList;
exports.mftwList = mftwList;
exports.msgList = msgList;
exports.msglist = msglist;
exports.popList = popList;
exports.ziZhenList = ziZhenList;
