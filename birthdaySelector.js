/*
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
1.引入jQuery.js

2.引入dataSelect.js

3.html页面如下，注意需要加name=year,nme=month,name=day
<div id="selector">
<select name="year"></select>年
<select name="month"></select>月
<select name="day"></select>日
</div>

4.使用以下语句初始化：
$("#selector").dateSelect({
    year: 1988,
    month: 8,
    day: 8
 });
------------------------------ */
(function ($) {
    $.fn.birthdaySelector = function (settings) {
        if (this.length < 1) { return; };

        // 默认值
        settings = $.extend({
            year: null,
            month: null,
            day: null
        }, settings);

        var dataObj = this;
        var yearObj = dataObj.find("[name=year]").get(0);
        var monthObj = dataObj.find("[name=month]").get(0);
        var dayObj = dataObj.find("[name=day]").get(0);

        var yearVal = (settings.year ? settings.year : 1980);
        var monthVal = (settings.month ? settings.month : 1);
        var dayVal = (settings.day ? settings.day : 1);

        var init = function () {
            monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            //初始化年
            var y = new Date().getFullYear();
            for (var i = (y - 115) ; i < y ; i++) {
                $(yearObj).append("<option value='" + i + "'>" + i + "</option>");
            }

            //初始化月
            for (var i = 1; i < 13; i++){
                $(monthObj).append("<option value='" + i + "'>" + i + "</option>");
            }

            //2月判断闰年
            var nDays = monthArr[new Date().getMonth()];
            if (new Date().getMonth() == 1 && isPinYear($(yearObj).val())) nDays++;

            //初始化日
            for (var i = 1; i <= nDays; i++) {
                $(dayObj).append("<option value='" + i + "'>" + i + "</option>");
            }

            //设置选中值
            $(yearObj).val(yearVal);
            $(monthObj).val(monthVal);
            $(dayObj).val(dayVal);
        };

        //年变化
        var yearChange = function ()
        {

            if ($(monthObj).val() == "") { optionsClear(dayObj); return; }
            var n = monthArr[$(monthObj).val() - 1];
            if ($(monthObj).val() == 2 && isPinYear($(yearObj).val())) n++;
            dayChange(n);
        };

        //月变化
        var monthChange = function ()
        {
            if ($(monthObj).val() == "") { optionsClear(dayObj); return; }
            var n = monthArr[$(monthObj).val() - 1];
            if ($(monthObj).val() == 2 && isPinYear($(yearObj).val())) n++;
            dayChange(n);
        };

        //日变化
        var dayChange = function (n)
        {
            $(dayObj).html('');
            for (var i = 1; i < (n + 1) ; i++){
                $(dayObj).append("<option value='" + i + "'>" + i + "</option>");
            }
        };

        //闰年判断
        var isPinYear = function (year) 
        {
            return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
        };

        var optionsClear = function (obj) {
            $(obj).html('');
        };

        $(yearObj).change(function () { yearChange($(this).val()) });
        $(monthObj).change(function () { monthChange($(this).val()) });

        init();
    };
})(jQuery);