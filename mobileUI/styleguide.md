---
layout: default
title: Style Guide
---

# H5 html&css规范

## 基础
* scss/css文件开始添加编码：`@charset "utf-8";`
* 选择器、属性和值都使用小写
* 简写模式，如：`border:1px solid #ccc;`
* 请不要直接定义标签样式，如`span{}div{}`
* 选择器如无特殊情况最多不要超过3层
* 多数值为0时可以省略单位（好像`0deg`要带单位，某个浏览器有bug）
* i标签用于图标
* html标签方面请考虑使用更有语义化的html5标签

## class命名
* 小写英文，单词之间使用中划线（-）链接，如`line-item`
* 列表类的class可采用`.*-list>.*-item>.field-*`,如`ul.line-list>li.line-item>span.field-badge`
* 特殊化某个类，采用两个中划线连接（--），如`.line-list.line-list--arrow`，基础类是`.line-list`右侧没有箭头，如需要右侧有箭头的可以追加类`.line-list--arrow`
* js组件部分的class以“cm-”为前缀，如`cm-modal`
* 图标的class，以`.icon-`为前缀

## 常用class关键词：
* 布局类：header,footer,container,main,content,aside,page,section
* 包裹类：wrap,inner
* 区块类：region,block
* 结构类：hd,bd,ft,top,bottom,left,right,middle,col,row,grid,span
* 列表类：list,item,field
* 主次类：primary,secondary,sub,minor
* 大小类：s,m,l,xl
* 状态类：active,current,checked,hover,fail,success,warn,error,on,off
* 导航类：nav,prev,next,bullet,breadcrumb,back
* 交互类：tips,alert,modal,pop,panel,tabs,accordion,slide,scroll,overlay
* 星级类：rate,star
* 分割类：group,seperate,divider
* 等分类：full,half,third,quarter
* table类: table,tr,td,cell,row
* 图片类：img,thumbnail,original,album,gallery
* 语言类：cn,en
* 其他语义类：btn,close,ok,cancel,switch; link,title,intro,more,icon; form,label,search,contact,phone,date,email,user; view,loading...

## 选择器权重
* !important
* 行内样式，指的是html文档中定义的style
* ID选择器
* 类，属性选择器和伪类选择器
* 元素和伪元素

## 更多规范参考

* [css guideline](http://cssguidelin.es/)