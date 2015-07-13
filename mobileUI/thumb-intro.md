---
layout: default
title: thumb使用说明
---

# thumb

## reset

在normalize.css的基础上进行归零设置

## class说明

见styleguide

## help class

`*{ -webkit-box-sizing: border-box; box-sizing: border-box; }`

```css
.fl { float: left; }
.fr { float: right; }
.fs12 { font-size: 12px; }
.grayc { color: #ccc; }
.gray9 { color: #999; }
.gray6 { color: #666; }
.p10 { padding: 10px; }
.plr10 { padding-left: 10px; padding-right: 10px; }
.mt10 { margin-top: 10px; }
.mb10 { margin-bottom: 10px; }
.mlr10 { margin-left: 10px; margin-right: 10px; }
.guide-title { margin: 10px 0 0 10px; font-weight: bold; font-size: 16px; }
.full-width { width: 100%; }
.justify { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }
.cm-tips { position: absolute; top: 50%; left: 50%; -webkit-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); background: rgba(0, 0, 0, 0.7); color: #fff; border-radius: 10px; padding: 10px 15px; text-align: center; font-size: 12px; white-space: nowrap; z-index: 985; }
.cm-overlay { display: none; background: rgba(0, 0, 0, 0.7); position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 980; }
.cm-overlay.active { display: block; }
```

## layout

### absolute定位布局
```html
<div class="cm-overlay"></div>  <!-- 遮罩层 -->	

<div id="pages" class="cm-page-wrap">  <!-- 所有页面容器层 -->	
    <article class="cm-page">  <!-- 单个页面 -->	
        <header class="cm-header"></header> <!-- 头部 -->	
        <main class="cm-content">  <!-- 中间内容 -->	
            <div class="cm-scroll-inner"> <!-- 中间内容滚动层 -->	
				...
			</div>
        </main>
        <footer class="cm-footer"></footer> <!-- 底部 -->	
    </article>
    <article class="cm-page"></article>  <!-- 单个页面 -->	
    ...
</div>

<section> <!-- 交互层如pop,tips,modal,panel等 -->	
</section>
...
```

* `.cm-overlay`作为交互的蒙版层
* #pages作为所有页面的容器，一个`article.cm-page`代表一个页面，每个article都可以独立布局
页面切换发生在`article.cm-page`上，class分别为`.cm-page--left`,`.cm-page--right`，切换动画分别为：`.cm-page--in`,`.cm-page--out`
* 目前整体结构采用绝对定位方式，`.cm-content`部分根据有无header或footer设置top或bottom值，默认top值为header的高度，提供了两个扩展的class`.no-header-sub`,`.no-footer`，为了使用滚动插件如iscroll，扩展了一层`.cm-scroll-inner`，当然也可以给上面的article一个具体的class，来设置里面的布局。针对某些页面`.cm-content`这一层还不需要滚动（可以参考calendar日历demo），扩展了一个class`.cm-content--no-scroll`
* 除此之外，提供了两个class来设置页面的padding，分别为`.p10`,`.plr10`，可以挂靠在`.cm-scroll-inner`上
* 所有的交互层插在body结束之前

### fixed定位布局

特别注意：当父元素设置了transform值的时候，子元素的fixed的定位方式不再是根元素，而是transform的父元素

```html
<!-- 遮罩层 -->   
<div class="cm-overlay"></div> 

<!-- 头部 -->  
<header class="cm-header"></header>

<!-- 中间内容容器层 -->  
<main id="pages" class="cm-page-wrap">    
    <!-- 页面1 -->
    <article class="cm-page">    
        <!-- 中间内容滚动层 --> 
        <main class="cm-content">    
            ...
        </main>

        <!-- 底部 -->    
        <footer class="cm-footer"></footer>
    </article>

    <!-- 页面2 -->
    <article class="cm-page"></article>   
    ...
</main>

<!-- 交互层如pop,tips,modal,panel等 --> 
<section>   
</section>
...
```

使用说明：

* '.cm-overlay'作为交互的蒙版层
* header和footer采用fixed定位，header独立出来（适合hybrid干掉头部），footer放在单个页面里面
* #pages作为所有页面的容器，一个article.cm-page代表一个页面，每个article都可以独立布局 页面切换发生在article.cm-page上，class分别为'.cm-page--left','.cm-page--right'，切换动画分别为：'.cm-page--in','.cm-page--out'
* 默认article.cm-page的padding-top为header的高度，且额外提供了一个扩展的class'.has-header'来取消padding-top，当然也可以给上面的article一个特殊的class，来设置里面的布局
* 除此之外，提供了两个class来设置页面的padding，分别为'.p10','.plr10'，可以挂靠在`.cm-content`中的标签上
* 拥有底部footer的，需要在`.cm-content`中再添加一层结构来空出footer占的位置，可参看nav的demo
* 如果除header外，上面还有需要fixed定位的元素，请在`.cm-content`前面添加`.cm-header-sub`，可参考search的demo，或自定义，可参考calendar的demo
* 所有的交互层插在body结束之前


## btn

### 基本按钮

1. 考虑到btn使用的范围及频率比较高，所以设计的五个不同class的btn，分为为`.btn`,`.btn-primary`,`.btn-secondary`,`.btn-sub`,`.btn-link`，可单独使用互不依赖，因为移动端的点击范围所限，所以这基础的五个都是一样大的高度44px（即header条的高度）,如禁用则添加`.disabled`

2. 100%宽度的btn追加class`.full-width`

3. `.btns-group>span.btn`简单的按钮组，中间以横线隔开

4. `.btns-seperate-group>span.btn*n`分离按钮组，每个按钮单独

### actions按钮

为弹窗设计的按钮，一般在弹出内容的ft部分，基本结构为`.cm-actions>span.cm-actions-btn*n`，采用table布局，水平等分，若需每个btn单行垂直排列，在`.cm-actions`上追加`.cm-actions--full`，采用block布局，具体请参考alert和modal部分应用

## header

```html
<header class="cm-header">
    <span class="icon-back fl cm-header-icon"></span>
    <span class="fr cm-header-icon"><i class="icon-list"></i></span>
    <h1 class="cm-page-title">页面标题太长会...</h1>
</header>
```

* 标题为h1标签：`.cm-page-title`单行超过截断；`.cm-page-mutil-title`两行；`.cm-page-title>span.cm-title-l+span.scm-title-s`大小标题；`.cm-page-tabs-title>span.active+span`tabs标题；`.cm-page-select-title`
*  `.fl`,`.fr`左右两边icon采用浮动布局，注意如果右侧icon比较多，采用一个个罗列的话其icon出现顺序与代码中刚好相反，可以参考header的demo，右侧有两个图标的，当然你也可以把所有的图片包裹在一个`.fr`的容器中，那样顺序就是ok的
* `.cm-header-icon`为icon的正方形点击区域，大小为header的高度
* `.cm-header-btn`为文字信息的btn，左右padding为10px，高度为header的高度

## nav

### 基本结构

```html
<ul class="cm-nav">
    <li>筛选</li>
    <li>排序1 <span class="sup-num">99</span></li>
    <li class="active">排序2</li>
    <li>排序3</li>
</ul>
```

`.cm-nav`采用table布局，子元素等分，子元素激活状态添加`.active`，默认子元素为纯文字，也可以纯icon`.cm-nav-icon`(该class只负责大小布局，具体的是什么icon追加相应的class)，子元素中数字图标用`span.sup-num`表示

### icon与文字混排

```html
<ul class="cm-nav cm-nav--mix-v">
    <li><i class="cm-nav-icon"></i>筛选<i class="icon-circle"></i></li>
    <li><i class="cm-nav-icon"></i>排序1</li>
    <li><i class="cm-nav-icon"></i>排序2</li>
    <li><i class="cm-nav-icon"></i>价格从低到高</li>
</ul>
```

默认icon与文字皆有的话，就是水平显示，给`.cm-nav`追加`.cm-nav--mix-v`就是垂直显示，因为考虑到文字要显示6个（价格从低到高），所以字体设置为12px了。

## checked

包括radio和checkbox

### radio

```html
<ul class="cm-radio-list">
    <li>上海</li>
    <li class="active">北京</li>
</ul>
```

选中状态给li添加`.active`class，后面的对号icon则是通过使用伪元素`::after`画的

若文字居中，则在`.cm-radio-list`上追加`.cm-radio-list--text-center`

若icon居左，则在`.cm-radio-list`上追加`.cm-radio-list--left`

### checkbox

```html
<ul class="cm-checkbox-list">
    <li><i class="icon-checkbox"></i>北京</li>
    <li class="active"><i class="icon-checkbox"></i>上海</li>
</ul>
```

选中状态给li添加`.active`class，前面的icon则是通过`i.icon-checkbox`画的（注：`i.icon-checkbox`本身如果在其他地方单独使用可以通过追加`.active`表示选中状态）

若icon居右，则在`.cm-checkbox-list`上追加`.cm-checkbox-list--right`

### 两级选择

```html
<div class="cm-multistep-active">
    <div class="cm-multistep-1">
        <h3 class="cm-multistep-title active">主类1</h3>
        <h3 class="cm-multistep-title">主类2</h3>
        ...
    </div>
    <div style="min-height:180px;" class="cm-multistep-2">
        <ul class="cm-radio-list">
            <li>北京</li>
            <li class="active">上海</li>
            ...
        </ul>
    </div>
</div>
```

注意第二级分类应该设置最小高度为左边一级fixed的高度

## line list

适用于简单的文字标题列表，图文混排的除外

### 基本结构

```html
<ul class="line-list ">
    <li class="line-item">北京</li>
    <li class="line-item">上海</li>
    <li class="line-divider">广东省</li>
	<li class="line-item">广州</li>
</ul>
```

默认右侧没有箭头，标题栏class为`.line-divider`，因为考虑到item可能会有js操作，所以这里的标题栏是直接另起class，而不是追加class的方式特殊化

### 右侧箭头

```html
<ul class="line-list line-list--arrow">
    <li class="line-item">北京</li>
    <li class="line-item">上海</li>
</ul>

<ul class="line-list">
    <li class="line-item line-item--arrow">北京</li>
    <li class="line-item">上海</li>
</ul>

<ul class="line-list line-list--arrow">
    <li class="line-item">北京</li>
    <li class="line-item line-item--arrow-no">上海</li>
</ul>
```

有两种方式可以实现右侧箭头：第一种所有的列表都有右侧箭头，可以在`.line-list`上面追加`.line-list--arrow`，即`.line-list.line-list--arrow`；第二种给特殊项添加箭头可以在`.line-item`上面追加`.line-item--arrow`，即`.line-item.line-item--arrow`

当然有些时候整个列表绝大部分都是有右箭头的，反而有几个零星的项没有箭头，我们还可以在`.line-list.line-list--arrow`基础上，给没有箭头的项追加`.line-item--arrow-no`

### 单行省略号

```html
<div class="line-item line-item--ellipsis">虹桥路3805号虹桥路3805号虹桥路3805号虹桥路3805号</div>
```

需要单行省略号的追加`.line-item--ellipsis`

## 右侧有文字介绍

```html
<ul class="line-list">
    <li class="line-item line-item--arrow">虹桥路3805号<span class="fr grayc">我是右侧文字</span></li>
</ul>
```

使用`span.fr`表示右侧文字，这个方法的超过以省略号显示得自己控制

## 多行文字（标题与介绍文字）

```html
<ul class="line-list ">
    <li class="line-item">
        <h3 class="title">杭州</h3>
        <p class="intro">杭州拥有两个国家级风景名胜区&mdash;&mdash;西湖风景名胜区、“两江两湖”</p>
    </li>
    <li class="line-item">
        <h3 class="title">青岛</h3>
        <p class="intro">青岛是国家历史文化名城、重点历史风貌保护城市、首批中国优秀旅游城市</p>
    </li>
</ul>
```

采用`.line-list>.line-item>h3.title+p.intro`结构

## 右侧带有switch

```html
<ul class="line-list line-list--switch">
    <li class="line-item">背景音乐 <i class="icon-switch"></i></li>
    <li class="line-item">在wifi下下载图片<i class="icon-switch active"></i></li>
</ul>

<ul class="line-list">
    <li class="line-item line-item--switch">背景音乐 <i class="icon-switch"></i></li>
    <li class="line-item">在wifi下下载图片</li>
</ul>
```

switch的图标为`i.icon-swtich`默认关闭状态，同样可以有两种方式使用：一种所有项都有`.line-list.line-list--switch`；第二种单个项`.line-item.line-item--switch`。js启用状态可以绑定在整行，给`.line-item--switch`添加`.active`class，同样也可以绑定在icon上给i追加`.active`class

## group list

```html
<div class="cm-group-list">
    <div class="cm-group-hd"></div>
    <div class="cm-group-bd">
        <ul class="cm-radio-list">
            <li>北京</li>
            <li class="checked">上海</li>
        </ul>
    </div>

    <div class="cm-group-hd expaned"></div>
    <div class="cm-group-bd">
        <ul class="cm-radio-list">
            <li>广州</li>
            <li>深圳</li>
        </ul>
    </div>

	...
</div>
```

`.cm-group-hd+.cm-group-bd`表示一组，hd表示可点击的标题部分，bd表示可折叠的内容部分。bd的显示或隐藏状态由hd决定，默认隐藏，hd上追加`.expanded`表示展开。

## form

### 基本结构

```html
<div class="form-item">
    <label class="field-label">Email</label>
    <input type="text" class="field-text">
</div>
```

默认左边label文字占用90px，与左边偏移10px，然后input占据剩余的所有宽度

### 右侧有箭头

这里箭头分为两种：一种是没有输入框的整行可点击跳转的（使用.form-item--arrow），另一种是有输入框的只能点击箭头的跳转的（使用.form-item--arrow-btn）。

#### 带输入框跳转的

```html
<div class="form-item form-item--arrow-btn">
    <label class="field-label">入住人</label>
    <input type="text" placeholder="输入入住人姓名" class="field-text">
    <i class="icon-arrow"></i>
</div>
```
在`.form-item`上追加`.form-item--arrow`,并在里面添加箭头icon`i.icon-arrow`。这里我们使用了`i.icon-arrow`来负责箭头，而不是使用`::after`伪元素，是因为这里点击绑定的不是整行，而是那个箭头

#### 不带输入框跳转的，右侧有文字

```html
<div class="form-item form-item--arrow">
    <label class="field-label">到店时间</label>
    <span class="field-badge">20:00之前</span>
</div>
```

`.form-item--arrow`通过`::after`伪类生成箭头，`.field-badge`采用绝对定位在右边

#### 不带输入框跳转的，值

```html
<div class="form-item form-item--arrow">
    <label class="field-label">价格</label>
    <span class="field-value">不限</span>
</div>
<div class="form-item form-item--arrow">
    <label class="field-label">酒店名称</label>
    <span class="field-value grayc">中文/英文</span>
</div>
```

值有两种，一种为选择的值为`span.field-value`，一种为选择值的placeholder为`span.field-value.grayc`

### 无label

```html
<div class="form-item form-item--no-label">
    <input type="text" class="field-text">
</div>

<form class="form form--no-label">
	<div class="form-item">
	    <input type="text" class="field-text">
	</div>
</form>
```
一种是通过对`.form-item`追加`.form-item--no-label`来实现，另一种是直接在父元素form上添加`.form--no-label`来控制`.form-item`

## search

```html
<div class="cm-search-block">
    <div class="cm-search-ele-wrap">
    	<input type="search" class="cm-search-text">
    	<i class="icon-search"></i>
    </div>
</div>

<!-- 有取消按钮 及 其他操作按钮 -->
<div class="cm-search-block cm-search-block--cancel">
    <div class="cm-search-ele-wrap">
    	<input type="search" class="cm-search-text">
    	<i class="icon-search"></i>
    	<i class="icon-clear"></i>
    	<span class="icon-loading icon-loading--gray">
    		<i class="icon-loading-circle"></i>
    	</span>
    </div>
    	<span class="cm-search-cancel">取消</span>
</div>
```

若有取消按钮，在`.cm-search-block`上追加`.cm-search-block--cancel`。`i.icon-search`表示左边搜索icon，`i.icon-clear`表示输入内容时的清除按钮，`.icon-loading.icon-loading--gray`表示输入内容后的加载状态。

同样header上的右上角的白色搜索icon也是`i.icon-search`

## tips

用于简单的文字提示

```html
<section class="cm-tips">
    <p>网络连接超时，请稍后重试</p>
</section>
```

## loading

### 弹窗loading

```html
/* 默认无关闭按钮*/
<section class="cm-loading">
    <span class="icon-loading"><i class="icon-loading-circle"></i></span>
</section>

/* 有关闭按钮*/
<section class="cm-loading cm-loading--close">
    <span class="icon-loading"><i class="icon-loading-circle"></i></span>
	<i class="icon-close"></i>
</section>

/* 有关闭按钮及文字描述*/
<section class="cm-loading cm-loading--close">
    <span class="icon-loading"><i class="icon-loading-circle"></i></span>
	<p class="cm-loading-text">提交中...</p>
	<i class="icon-close"></i>
</section>
```

`.icon-loading`所用的背景为logo，旋转的为`.icon-loading-circle`

### 小的灰色 Loading

```html
  <span class="icon-loading icon-loading--gray">
    <i class="icon-loading-circle"></i>
  </span>
```

可用于搜索框的加载

## modal

### 基本结构

```html
<section class="cm-modal">
    <header class="cm-modal-hd">
        <h3 class="cm-modal-title">浮层标题</h3>
        <i class="icon-close"></i>
    </header>
    <div class="cm-modal-bd">
        <p>浮层内容</p>
    </div>
</section>
```

1. hd部分默认文字居左，右侧有关闭按钮`i.icon-close`，背景色为主色调蓝色
2. 若背景色为白色，则在`.cm-modal-hd`追加`.cm-modal-hd--tint`
3. 若文字居中且右侧无关闭按钮，则在`.cm-modal-hd`追加`.cm-modal-hd--center`，并去掉关闭按钮`i.icon-close`
4. 默认bd部分无内边距，如需要可以添加常用class`.p10`或`.plr10`

### 带footer部分

```html
<section class="cm-modal">
    <header class="cm-modal-hd">
        <h3 class="cm-modal-title">浮层标题</h3>
        <i class="icon-close"></i>
    </header>
    <div class="cm-modal-bd p10">
        <p>浮层内容</p>
    </div>
	<footer class="cm-modal-ft cm-actions">
        <span class="cm-actions-btn">取消</span>
        <span class="cm-actions-btn">确定</span>
    </footer>
</section>
```

在section结束之前添加ft部分，若ft部分为按钮操作，则为`.cm-modal-ft`追加`.cm-actions`

### 全部为执行按钮

```html
<section class="cm-modal cm-modal--action">
    <ul class="cm-actions cm-actions--full">
        <li class="cm-actions-btn">操作1</li>
        <li class="cm-actions-btn">操作2</li>
        <li class="cm-actions-btn">操作3</li>
    </ul>
    <ul class="cm-actions cm-actions--full">
        <li class="cm-actions-btn">取消</li>
    </ul>
</section>
```

在`.cm-modal`上追加`.cm-modal--action`，执行按钮组则为`.cm-actions.cm-actions--full>.cm-actions-btn*n`

## alert

本组件模拟pc端的alert弹窗，作为modal的一个特殊形式，在`.cm-modal`上追加class`.cm-modal--alert`，没有hd部分包括右上角的关闭按钮，下面有执行按钮，一般为取消或确认，如不满足该两条特点请不要使用该结构，直接使用modal结构。

## 基本结构

```html
<section class="cm-modal cm-modal--alert">
    <div class="cm-modal-bd">
        <p>提示文案</p>
    </div>
    <div class="cm-actions">
        <span class="cm-actions-btn">取消操作</span>
        <span class="cm-actions-btn">执行操作</span>
    </div>
</section>
```

默认内容居中，下面的按钮平分间距。若内容有多行，则使用`.cm-mutil-lines`，若有标题则在bd中添加`h3.cm-alert-title`,若执行按钮每个独自一行则在`.cm-actions`上追加class`.cm-actions--full`，如有其它要求，也可追加`.cm-alert-ft`class

## pop

### 基础结构

```html
<section class="cm-pop">
    <i class="icon-pop-triangle"></i>
    <div class="cm-pop-bd">
        <p>pop内容</p>
    </div>
</section>
```

三角箭头采用`.icon-pop-triangle`所画，如无三角则去掉该标签即可。默认箭头朝下，没有提供左右箭头，如需朝上，可在`.cm-pop`上追加class`.cm-pop--triangle-up`。如pop有边框则追加class`.cm-pop--border`，如是圆角则可追加class`.cm-pop--radius`

### user nav

pop的一种特例，箭头朝上，在`.cm-pop`上追加`.cm-pop--triangle-up.cm-pop--user-nav`

```html
<section class="cm-pop cm-pop--triangle-up cm-pop--user-nav">
    <i class="icon-pop-triangle"></i>
    <div class="cm-pop-bd">
	    <ul class="cm-user-nav">
	        <li><i class="icon-share"></i>分享</li>
	        <li><i class="icon-comment"></i>预约咨询</li>
	        <li><i class="icon-phone"></i>联系携程</li>
	        <li><i class="icon-compass"></i>团队助手</li>
	        <li><i class="icon-file"></i>我的订单</li>
	        <li><i class="icon-love"></i>我的收藏</li>
	        <li><i class="icon-email"></i>消息中心</li>
	        <li><i class="icon-home"></i>携程首页</li>
	    </ul>
    </div>
</section>
```

### pop page

```html
<section class="cm-page-pop">
    <header class="cm-header">
        <span class="icon-back fl cm-header-icon"></span>
        <h1 class="cm-page-title">pop title</h1>
    </header>
    <div class="cm-pop-bd">
        <div class="cm-scroll-inner"></div>
    </div>
</section>
```

头部采用整个框架的`.cm-header`

## panel

```html
<!-- panel -->
	<div class="cm-page-wrap">
		<article class="cm-page"></article>
	</div>
	...
	<section class="cm-panel">
	</section>

	<!-- 展开状态 -->
	<div class="cm-page-wrap">
		<article class="cm-page cm-page--panel-on"></article>
	</div>
	...
	<section class="cm-panel active">
	</section>

<!-- mask panel -->
	<section class="cm-mask-panel">
	</section>

	<section class="cm-mask-panel active">
	</section>
```

panel大概有两种：一种弹出来的同时会把整体内容挤到一边；另一种以遮盖的方式弹出，覆盖在内容上面。对于第一种会排挤内容的，我们通过给`.cm-page`添加class`cm-page--panel-on`来实现切换弹出效果，添加`cm-page--panel-off`来关闭panel，而panel本身通过切换`active`；对于第二种遮盖内容的我们直接通过切换`active`来实现。

## img

### slide

```html
<div class="cm-slide">
    <ul class="cm-slide-view">
        <li><img alt="" src="http://placehold.it/640x420&amp;text=1"></li>
        <li><img alt="" src="http://placehold.it/640x420&amp;text=2"></li>
        <li><img alt="" src="http://placehold.it/640x420&amp;text=3"></li>
        <li><img alt="" src="http://placehold.it/640x420&amp;text=4"></li>
        <li><img alt="" src="http://placehold.it/640x420&amp;text=5"></li>
    </ul>
    <nav class="cm-slide-bullet"><i class="cm-bullet-item"></i><i class="cm-bullet-item active"></i><i class="cm-bullet-item"></i><i class="cm-bullet-item"></i><i class="cm-bullet-item"></i></nav>
</div>
```

`.cm-slide-view`图片展示区域，`.cm-slide-bullet`子弹导航区域。图片滚动采用“swipe.js”

### gallery-slide

结构如下：

```html
<div class="cm-gallery">
    <div class="cm-gallery-slide">
        <ul class="cm-slide-view">
            <li><img alt="" src="http://placehold.it/640x320&amp;text=1"></li>
            <li><img alt="" src="http://placehold.it/640x320&amp;text=2"></li>
            <li><img alt="" src="http://placehold.it/640x320&amp;text=3"></li>
        </ul>
    </div>
    <p class="cm-gallery-title">图片标题</p>
    <nav class="cm-gallery-nav">
        <span class="cm-prev disabled">&lt; 上一张</span>
        <span class="cm-nums"><span class="cm-nums-index">1</span>/63</span>
        <span class="cm-next">下一张 &gt;</span>
    </nav>
</div>
```

中间的图片滚动部分依然采用“swipe.js”，图片标题部分`.cm-gallery-title`如果没有可以去掉，上一张下一张如果禁用，则追加`.disabled`

## tabs

```html
<div class="cm-tabs">
    <nav class="cm-tabs-nav">
        <ul class="cm-tabs-title-list">
            <li class="active">选项1</li>
            <li>选项2</li>
        </ul>
        <i class="icon-active"></i>
    </nav>
    <div class="cm-tabs-content-wrap">
        <div class="cm-tabs-content">内容一</div>
        <div class="cm-tabs-content">内容二</div>
    </div>
</div>
```

`i.icon-active`表示滑动的高亮条，因为选项标题等分问题（flex可能不兼容，这里采用table来实现等分），所以多嵌套了一层。`.cm-tabs-content-wrap`是包裹层，可以根据实际需要添加或去掉

## rate

一般有两种类型rate：一种用来让用户点评的，有动态js交互行为；一种是用来展示所有的点评结果的，无动态js交互行为。为了统一，我们这里统一采用一种结构。

```html
<div class="cm-rate">
	<div class="cm-rate-view cm-rate-view--five">
		<i class="icon-rate"></i>
		<i class="icon-rate"></i>
		<i class="icon-rate"></i>
		<i class="icon-rate"></i>
		<i class="icon-rate"></i>
	</div>
	<p class="cm-rate-info"></p>
</div>
```

动态js交互行为，由`.cm-rate-info`显示用户的评价对应的说明，如果是静态的展示点评结果，则可以去掉外层包裹`.cm-rate`及`.cm-rate-info`，只有`.cm-rate-view`

默认`.cm-rate-view`为灰色，几颗星可通过追加`.cm-rate-view--five`、`.cm-rate-view--four-half`、`.cm-rate-view--four`、`.cm-rate-view--three-half`、`.cm-rate-view--three`、`.cm-rate-view--two-half`、`.cm-rate-view--two`、`.cm-rate-view--one-half`、`.cm-rate-view--one`、`.cm-rate-view--half`

## num adjust

用于数字微调

```html
<div class="cm-num-adjust">
    <span class="cm-adjust-minus disabled"></span>
    <span class="cm-adjust-view">0</span>
    <span class="cm-adjust-plus"></span>
</div>
```

加或减不可用时，追加`.disabled`，若中间的数字`.cm-adjust-view`可以输入的话，则设置其`contenteditable`属性为true

## scroll select

```html
<div class="cm-scroll-select">
    <ul class="cm-select-list">
        <li>上海</li>
        <li class="l">北京</li>
        <li class="xl">深圳</li>
        <li class="l">广州</li>
        <li>杭州</li>
    </ul>
    <div class="cm-select-mask"></div>
</div>
```

遮罩及中间选中的间隔线都由`.cm-select-mask`完成。li默认3个等级，第一级无class，第二级`.l`，第三级`.xl`为选中的蓝色

### 多个并排

```html
<div class="cm-scroll-select-wrap">
	<div class="cm-scroll-select">
	    <ul class="cm-select-list">
	        <li>上海</li>
	        <li class="l">北京</li>
	        <li class="xl">深圳</li>
	        <li class="l">广州</li>
	        <li>杭州</li>
	    </ul>
	</div>
	...

	<div class="cm-select-mask"></div>
```

注意，当单个的时候，我们的mask是放在ul并列的层级，属于select的子元素，但是如果有多个的话，我们将把mask置于wrap的子元素，让多个select共用一个mask


## calendar

```html
<section class="cm-content cm-content--no-scroll">
    <div class="cm-calendar">
        <ul class="cm-calendar-hd">...</ul>
        <div class="cm-calendar-bd">
            <div class="cm-scroll-inner">
                <h3 class="cm-month">2014年10月</h3>
                <ul class="cm-days">...</ul>
            </div>
        </div>
    </div>
</section>
```

常规日历整体分为两个部分：一个是固定的header星期部分，一个是可以滚动的具体日历（包括月份标题及每月的day列表）

因为有个固定的header部分，`.cm-content`我们不需要滚动，所以追加`.cm-content--no-scroll`，顺便把滚动的一层`.cm-scroll-inner`去掉放在日历滚动的部分

**day状态**

* 周六周日：这个通过css3的选择器nth-of-type来实现（注：ios8对nth-child支持出现bug，所以使用nth-of-type比较靠谱）
* 激活状态：蓝底白字，添加class`.active`
* 不可选状态：灰字，添加class`.cm-day-disabled`
* 节日：带有节日标题，添加class`.cm-day-special`，节日标题结构为`span.cm-day-title`（注：节日标题最长不得超过3个字）


## animate

考虑到动画作为修饰的一部分，可根据实际情况判断是否需要动画效果。所以动画采用keyframes动画，而非transition动画。

默认设计了3组动画`cm-fade-in/out`,`cm-up-in/out`,`cm-down-in/out`，每种动画以in和out成对出现，动画时间为0.3s

上面的三组动画都涉及到了transform属性，所以请注意需要添加动画的元素是否已经有了transform属性，防止被覆盖。如果已经使用了transform的translate来实现居中，这里又提供了两组替换动画`cm-center-fade-in/out`,`cm-center-up-in/out`,

### fade in/out

动画涉及属性transform的scale和opacity。

```css
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(1.185);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.815); 
    }
}
```

### down in/out

动画涉及属性transform的translate的opacity

适合于pop page这种整屏弹出，或从底部弹出的一些特效如筛选选项

```css
@keyframes downIn {
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes downOut {
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    100% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
}
```

### up in/out

动画涉及属性transform的translate和opacity


```css
@keyframes upIn {
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes upOut {
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    100% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
}
```

### 遮罩层离去动画

因为动画需要0.3s执行，所以需要延迟下遮罩层的消失

```css
.cm-overlay-out{
    animation-duration: 0.1s;
    animation-delay: 0.3s;
    animation-name: overlayOut;   
}
@keyframes overlayOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
```