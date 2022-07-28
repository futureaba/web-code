// 每次调用$.get()或者$.post()或者$.ajax()
// 每次都会先调用ajaxPrefilter这个函数
// 在这个函数中可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    // 在发起真正的ajax请求之前统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
})