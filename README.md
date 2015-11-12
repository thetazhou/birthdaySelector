# birthdaySelector
a jQuery plugin that each select year, month and day from select box.


jQuery生日选择插件
日期：2015-11-12
作者：thetazhou
settings 参数说明
-----
year: 年默认值
month: 月默认值
day: 日默认值
调用方式：
-----
>1.引入jQuery.js

>2.引入dataSelect.js

>3.html页面如下，注意需要加name=year,nme=month,name=day

    <div id="selector">
    <select name="year"></select>年
    <select name="month"></select>月
    <select name="day"></select>日
    </div>
    
>4.使用以下语句初始化：

    $("#selector").birthdaySelect({
        year: 1988,
        month: 8,
        day: 8
     });
