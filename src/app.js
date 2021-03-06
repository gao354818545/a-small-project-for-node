// 1.导入express
const express = require("express")
const path = require("path")

// 2.创建应用
const app = express()

// 3.集成路由
const accountRouter = require(path.join(__dirname,"./routers/accountRouter.js"))
app.use("/account",accountRouter)

// 4.开启端口服务
app.listen(3000,"127.0.0.1",(err)=>{
    if(err) {
        console.log(err)
    }
    console.log("start OK")
})