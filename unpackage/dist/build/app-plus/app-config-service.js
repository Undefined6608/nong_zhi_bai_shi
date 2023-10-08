
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","background":"#efeff4","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"农知百事","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.7.9","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#515151","selectedColor":"#1296db","borderStyle":"black","blurEffect":"none","fontSize":"12px","iconWidth":"25px","spacing":"3px","height":"62px","backgroundColor":"#f7f7f7","list":[{"pagePath":"pages/index/index","iconPath":"/static/icon_home.png","selectedIconPath":"/static/icon_home_select.png","text":"首页"},{"pagePath":"pages/mian_fei_ti_wen/mian_fei_ti_wen","iconPath":"/static/icon_ti_wen.png","selectedIconPath":"/static/icon_ti_wen_select.png","text":"免费提问"},{"pagePath":"pages/zhi_neng_zi_zhen/zhi_neng_zi_zhen","iconPath":"/static/icon_zi_zhen.png","selectedIconPath":"/static/icon_zi_zhen_select.png","text":"智能自诊"},{"pagePath":"pages/find/find","iconPath":"/static/icon_find.png","selectedIconPath":"/static/icon_find_select.png","text":"发现"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"backgroundColor":"#ededed","titleText":"农知百事","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/mian_fei_ti_wen/mian_fei_ti_wen","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ededed","titleText":"免费提问","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/zhi_neng_zi_zhen/zhi_neng_zi_zhen","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ededed","titleText":"智能自诊","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/find/find","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ededed","titleText":"发现","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/bing_chong_hai_zao_zhi_dao/bing_chong_hai_zao_zhi_dao","meta":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ededed","titleText":"病虫害早知道","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/ti_wen/ti_wen","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"消息页面","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/bchInner/bchInner","meta":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ededed","titleText":"植物数据","type":"default","titleColor":"#000000"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  