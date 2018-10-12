- 小程序
  内嵌在微信超级App,是webview + 微信一些App插件的混合
  webview App 内嵌页面技术 让App开发使用上web技术，比Android/Ios更快
  缺点是性能慢
  在拍照，tabbar，nabigationbar 等一些关键的地方又能调用原生微信里的原生组件，提升性能
  WXML 没有div view
  WXSS 使用弹性布局
  js MVM
 
- 架构
  小程序的架构是极其简单的
  app.js 是入口文件 
  app.json项目配置文件 pages 找到所有页面
  1. 注册所有文件 
  2. window 设置 app 名字，navigationBar 背景色 文字色
  3. tabbar 如果app 需要底栏
  pages 小程序认为由页面组成  简单？
  主要的代码都在这里 
  1. wxml 写结构 
  2. wxss 样式 
  3. js写逻辑 
  4. json 文件 页面级别的配置文件 

- 组件
  小程序提供了很多内置的功能组件
  swiper声明式组件 html 标签功能贫瘠，
  组件集合了很多标签及功能 
  swiper>swiper-item 
  indicater-dots = "{{true}}"
  {{js区链}}模板符号
- 数据驱动的界面 
  界面数据传统做法是分别由前端，后端独立做的。
  大前端让界面活起来，将直接绑定数据。
  {{}}界面模板
  小程序为数据绑定提供了一个约定
  Page（{
    data：{
      数据区域 ->{{}}
    }
  }）