# maybe-last-seamless-slideShow-33

## 把第一个图片前面克隆了一个最后的图片，最后的图片克隆了第一个图片

# flex布局
* [flex布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* flex **单个**元素上的属性——[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)这是一个简写属性，用来设置 [flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow), [flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 与 [flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)。

# 还存在的bug
* 刷新后可以看到异常的bug,这个bug，当在style。css文件上增加会   
``` 
 transform:translateX(-400px);
```
* 会导致出现第二张图片  
* 当在main.js文件上增加
```
$(slides).css('transform', 'translateX(-400px)')
```
* 会导致出现第第一张图片的前一张图片，也就是图片3的克隆。
* 另外如果最后一张图到第一张图或者第一张图到最后一张图动画还没有结束之前点击了别的button会导致一些异常。   

# 用到JQ的部分API
## offset() hide() show()
* 这里的[offset()](https://www.jquery123.com/offset/)会返回一个包含top 和 left属性的对象，**如果不写这个offset()就不能偷梁换柱。因为这里隐藏hide()后马上显示show(),浏览器会认为你只是想显示而已，隐藏会被显示合并，也就是隐藏会被删除掉，可以用offset()来使这个隐藏不会被删除，因为如果想要知道当前的元素位置，需要把当前所有的CSS计算一遍，offset()一定会计算，计算的过程中就会把浏览器的隐藏删除的这个过程给断掉，那么就会有隐藏啦，如果不理解记住即可**
* [hide()](https://www.jquery123.com/hide/)隐藏匹配的元素
* [show()](https://www.jquery123.com/show/)显示匹配的元素
```
    $(slides).css({ 'transform': 'translateX(-400px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
    $(slides).show()
```
## clone()
* [clone()](https://www.jquery123.com/clone/)是建一个匹配的元素集合的深度拷贝副本。
* 这里**需要注意方方的视频说错了**，这个括号里面不管写不写true，都会拷贝子元素。
* 见[jsbin链接](https://jsbin.com/nuvewixili/1/edit?html,js,output)
* 这个**括号里面的true是考虑绑定的事件。如果不写true，默认是false，不会绑定事件**。
* 见[jsbin链接](https://jsbin.com/hiwuzinoxo/1/edit?html,js,output)，**这个链接里面用到的this也很值得学习**。
## prepend()
* [.prepend()](https://www.jquery123.com/prepend/)和[.prependTo()](https://www.jquery123.com/prependTo/)实现同样的功能，主要的不同是语法，插入的内容和目标的位置不同。 对于  .prepend() 而言，选择器表达式写在方法的前面，作为待插入内容的容器，将要被插入的内容作为方法的参数。而 .prependTo() 正好相反，将要被插入的内容写在方法的前面，可以是选择器表达式或动态创建的标记，待插入内容的容器作为参数。
* prepend()代码写成
```
$('.inner').prepend('<p>Test</p>');
```
* prependTo()代码写成
```
$('<p>Test</p>').prependTo('.inner');
```
## append()
* [.append()](https://www.jquery123.com/append/) 和[.appendTo()](https://www.jquery123.com/appendTo/)实现同样的功能。主要的不同是语法——内容和目标的位置不同。对于.append(), 选择器表达式在函数的前面，参数是将要插入的内容。对于.appendTo()刚好相反，内容在方法前面，无论是一个选择器表达式 或创建作为标记上的标记，它都将被插入到目标容器的末尾。
* append()代码写成
```
$('.inner').append('<p>Test</p>');
```
* appendTo()代码写成
```
$('<p>Test</p>').appendTo('.inner');
```

## :first :first-child .first()
* [:first Selector](https://www.jquery123.com/first-selector/)选择第一个匹配的元素。
* [:first-child](https://www.jquery123.com/first-child-selector/)选择所有**父级元素下的第一个子元素**
* [.first()](https://www.jquery123.com/first/)获取匹配元素集合中第一个元素

## :nth-child() :nth-of-type()
* [:nth-child()](https://www.jquery123.com/nth-child-selector/)选择的他们所有父元素的第n个子元素。
* [:nth-of-type()](https://www.jquery123.com/nth-of-type-selector/)选择同属于一个父元素之下，并且标签名相同的子元素中的第n个。
* 因为jQuery的实现:**nth-从1开始计数**。对于所有其他选择器表达式比如:**eq() 或 :even ，jQuery遵循JavaScript的“0索引”的计数。**
* :nth-of-type()选择器和 :nth-child()选择器很容易混淆，至少我是这么认为的。看下面一个例子：
```
<div class="test">

			<p>A元素</p>

			<div>B元素</div>

			<p>C元素</p>

			<p>D元素</p>

			</div>
看下面的代码

			$("p:nth-of-type(2)")//选择的是C元素

			$("p:nth-child(2)")//什么元素也没选中
```
* 两者比较：

* 这里p:nth-of-type(2)选择器选择父元素的第二个段落p元素 ，它不管段落p元素在什么位置，段落p元素可能是该父级元素的第3个或者第5个，也可以是第n个子元素，这里n肯定大于2，只要父级元素<div class="test">有两个以上的段落p子元素，他就肯定能选择到第二个段落p元素。
* 这里p:nth-child(2)选择器选择不到任何元素，p:nth-child(2)选择器要满足的条件是：
1. 是一个段落p元素；
2. 是父元素的第二个子元素
* 上述的HTML结构中，<div class="test">的**第二个子元素是div元素，而不是p元素，所以不满足条件，这样就选择不到任何元素**

## .eq()和 :eq()
* [.eq()](https://www.jquery123.com/eq/)减少匹配元素的集合为指定的索引的哪一个元素。
* [:eq()](https://www.jquery123.com/eq-selector/)在匹配的集合中选择索引值为index的元素。
* 他们的**索引都是从0开始**
* 这两个其实一样的，一个是
```
$('li').eq(2)
```
* 另一个是
```
$('li:eq(2)')

```
它们与nth-of-type()不同的地方有三点：
1. 索引开始的位置不同，eq是从0开始，nth-of-type是从1开始。
2. 选择一个和多个的区别，eq只能选一个，nth-of-type可以选择多个或者一个。
3. 匹配的索引对应的元素不一定相同，
* $("p:eq(2)")首先找**第三个元素是否为p，如果不是p，会找这个第三个元素的子元素是否有p，如果没有就第四个及后续的元素的是否有p，如果有p，那么就是就会把第四个元素当做第三个p元素。**
* $("p:nth-of-type(3)")就只找**同级别**的**第三个p元素**。
* $("p:nth-child(3)")就只找**同级别**的**第三个元素**,如果**第三个元素不是p,就算第三个元素的子元素有p，也不会打出任何信息**。
* jsbin[链接](https://jsbin.com/bowusiyine/1/edit?html,js,output)查看详细情况






## if...if...if和if...else if...else
* 多个if是所有的if**都会**进行判断
* if...else if是**只要有满足条件的，就不再对之后的else if进行判断**
* [if...else](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
if...if...if
```
a = 2;
if(a==1) c=1;
if(a==2) c=2;
if(a%2==0) c=3;
最终结果c=3
```
if...else if
```
a=2;
if(a==1) c=1;
else if(a==2) c=2;
else if(a%2==0) c=3;
最终结果c=2
```
* jsbin[链接](https://jsbin.com/kuduxesace/1/edit?html,js,output)
* 用[switch](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch)对比
* 比如
```
switch( a ）{
    case 1：
    case 2：
    case 3：
    case 4：
        break;
}
```
* 这样就是 if if了，所有的1,2,3,4满足条件的都会执行一次
```
switch( a ）{
    case 1：
        break;
    case 2：
        break;
    case 3：
        break;
    case 4：
        break;
}
这样就是else if了，只要满足条件就跳出了
```
## vscode查询声明
* 移动到某个声明位置，按住ctrl+鼠标左键即可。
* 在函数调用的地方，点击鼠标右键也可以查询声明和跳转到声明位置等操作。