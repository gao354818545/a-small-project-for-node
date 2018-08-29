// 处理业务逻辑的代码--具体服务器要响应什么数据给浏览器

/**
 * 
 * 最终处理,返回登录页面给浏览器
 */

 const path = require("path")

exports.getLoginPage = (req,res) => {
    res.sendFile(path.join(__dirname,"../statics/views/login.html"))
}

// 最终处理,返回注册页面给浏览器
exports.getRegisterPage = (req,res) => {
    res.sendFile(path.join(__dirname,"../statics/views/register.html"))
}