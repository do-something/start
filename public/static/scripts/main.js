
// require(['app', 'jquery', 'math', 'coconote', 'hello'], function (app, $, math) {
require(['app', 'jquery', 'underscore', 'backbone', 'math', 'bootstrap', 'coconote', 'hello'], function (app, $, _, Backbone, math) {
    'use strict';
    // use app here
    
    // console.log(app);
    // console.log('Running jQuery %s', $().jquery);

    // console.log(math.add(1,1));


});


///////////////////////////////////////////////////////////////////////////////////
// bsie IE6 注意:对每一个新加载的html片段都要调用 $.bootstrapIE6(el) 函数，其实主要就是指的通过ajax获取到的html内容 //
///////////////////////////////////////////////////////////////////////////////////
// (function($) {
//     $(document).ready(function() {
//         if ($.isFunction($.bootstrapIE6)) $.bootstrapIE6($(document));
//     });
// })(jQuery);