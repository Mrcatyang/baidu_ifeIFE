任务记录：
====
task1:<br>
----
1、高级选择器document.querySelector和document.querraSelectorAll,查询方法和CSS方法一致，非常方便<br>
2、let和const为ES6声明变量写法，let表示变量，const表示常量，优点是它们的作用域为块级作用域，不再有var的变量提升<br>
3、DOM2级事件element.addEventListener('click',function(){},false),默认false冒泡事件，可以设置为true，在事件捕获时触发；<br>
4、使用EventUtil对象可以跨浏览器触发事件<br>

task2:<br>
----
1、数组迭代方法有5个，every()、some()、filter()、forEach()、map(),常用后三个;给定函数，filter()返回符合条件的数组;map()返回每次函数调用的结果的数组;forEach()对数组中的每一项运行函数,没有返回值;其中map()和filter()因为返回数组，所以可以链式操作，同时map()比forEach()遍历的速度也更快<br>
2、数组重排序方法reverse()和sort(),reverse()会反转数组项的顺序；sort()可以自定义排序，例：array.sort(function(value1,value2){return (value1-value2)})；此时为从小到大排序；value2-value1时为从大到小；
3、=>箭头函数为ES6中函数的快捷写法，特点有3个：1.不需要function关键字来创建函数2.省略return关键字3.继承当前上下文的 this 关键字；
当只有一个参数的时候，可以省略括号；当只有一个表达式的时候，可以省略{}<br>
4、ES6模板字符串，使用``反引号和${}可以直接将表达式嵌入字符串，不需要像ES5用+号；<br>
5、DOM创建节点document.createElement();在元素节点后添加节点element.appendChild();在元素节点前添加节点element.insertBrfore(x,y),x代表添加的节点，y代表再那个节点前添加;删除节点element.removeChild();<br>
6、元素节点插入文本有两种办法:1、innerHTMl；2、textContent；从语义化的角度考量应该使用后一种

task3:<br>
----
1、字符串取值方法slice()、substr(),不同的是slice()的第二个参数是取值的位数加1；substr()的第二个参数是要取几位；<br>
2、数组有四种添加删除方法：在数组前面添加为unshift()、删除为shift()，在数组后面添加为push()，删除为pop()<br>

task4:<br>
----
1、选择元素的子节点有childNodes和Children,使用childNodes会选中文本节点和元素节点；children的话只有元素节点，建议使用children；使用firstChild和firstElementChild可以选中元素的第一个节点，last同理，firstChild在非IE6、7、8的浏览器中会选中第一个文本节点或者元素节点，firstElementChild选中第一个元素节点，不兼容IE6、7、8<br>
2、因为span元素是动态添加的，所以需要利用事件冒泡原理进行事件委托，注入的ev表示事件对象，ev.target表示当前鼠标选中的元素，ev.target.nodeName是元素节点的名字<br>

task5:<br>
----
1、使用offsetHeight可以测量元素的高度，注意这个offset会包含padding值
2、学习了排序的四种方法，冒泡排序、快速排序、选择排序、插入排序
1.冒泡排序：
原理：对数组进行遍历，相邻元素根据大小进行交换，每次遍历将最小值推至最前方，然后对剩下的值再次进行比较
时间复杂度：n*(n-1)/2，数据较大时可忽略O（n²）
循环两次，第二个循环用来比较，将较大值放在比较的后一位，第一个循环表示执行次数，需要注意的是最后一次最小值已经在第一位，不用循环，所以最后一次不用执行，循环次数为arr.length-1;第二次循环也无需执行多次，因为前面的循环已经将较大值排好在后面，所以只需比较未排好的元素，次数为arr.length-1-i;
2.快速排序：
原理：从数组中取一个值为基准值，并将剩下的值与之比较，小于基准值的放到左边，大于基准值的放到右边，并再次对左右两边进行快速排序，直至左右两边只剩一个元素；
最坏时间复杂度：O（n²） 当选择的基准值为最大值或最小值时
平均时间复杂度：O(n*log2n)
3.选择排序：
原理：与冒泡排序类似，只不过选择排序不是通过相邻元素交换而将最小值“冒泡”到顶端，而是从数组第一个元素开始，与后面的的元素进行比较，如果后面的元素都比他大，则不需要交换，如果有比其小的，则两个值相互交换。
时间复杂度：O（n²）
4.插入排序：
原理：从数组第二个值开始，依次将后续的数值经过比较与前面排序后的序列比较后插入
最坏时间复杂度：O（n²）
最优时间复杂度：最好的情况是数组已经由小到大排好，则为O(n)

task6:<br>
----
1、textarea使用cols和rows设置宽度和高度；
2、通过回车，逗号，顿号作间隔就要用到正则表达式，首先我允许出现的字符是数字、中文、英文，排除这些的全可以作为分隔符，正则为
/[^\w\u4e00-u9fa5]+/,然后用split()分割字符串，为了防止分割出空字符串，用filter方法过滤一下，
3、查询就是遍历一下每个span中的文本，用replace方法，给相同的加一个html元素代替，让它显示不同的颜色，