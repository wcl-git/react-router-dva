面试题答案：

盒子模型：

盒子模型是CSS实现布局的一种思想，
盒子模型包括： padding margin border content 
标准盒子模型 和IE 盒子模型不同的地方是 IE 的 content 包括 border padding
有时候我们用 box-sizing: border-box;手动统一盒子模型 content 包括 border padding。

块级元素会独占一行，默认宽度填满父元素。

行内块元素不会独占一行，但可以设置宽高。

行内元素不会独占一行，并且设置宽高无效。

三者之间可以用 display 属性来转化。

行内块兼容问题 ：

IE  zoom: 1; 意思是 触发 hashLayout
ff3: moz-inline-block;

清出浮动的方式

父元素设定高度

父元素浮动

在浮动元素后面添加空div /br 然后 clear：both

父元素overflow: hidden/auto;

父元素 ：after{display:block;clear：both; content:'';height:0} && 父元素{zoom:1;}


文档流的概念、定位的理解以及z-index计算规则&浏览器差异性

文档流： 文档中可显示对象在排列是所占用的位置

脱离文档流： 浮动 绝对定位 固定定位

相对定位： 相对于元素在文档流中的位置进行偏移，但保留原占有位置

固定定位： 相对于position 属性非 static 的最近父元素进行偏移

固定定位：相对于视口进行偏移。
z-index: 设置堆叠顺序

默认 z-index 值： 没有定位元素 < relative < absolute < fixed

CSS hack 
<!-- [if ie]>....<![endif] -->


垂直水平居中的实现方式


1: parent {height: xxx} child{position:relative;top: 50%;left:50%; transform:translate(-50%,-50%)}




https://www.zhihu.com/question/19568008