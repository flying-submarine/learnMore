watch 监听文件存储在 磁盘中 
wds 不输出文件 没有IO 存储在内存中

这里面的热更新有最核心的是 HMR Server 和 HMR runtime。

HMR Server 是服务端，用来将变化的 js 模块通过 websocket 的消息通知给浏览器端。

HMR Runtime是浏览器端，用于接受  HMR Server 传递的模块数据，浏览器端可以看到 .hot-update.json 的文件过来。

继续回到这个问题：老师HotModuleReplacementPlugin是做什么用的？

webpack 构建出来的 bundle.js 本身是不具备热更新的能力的，HotModuleReplacementPlugin 的作用就是将 HMR runtime 注入到 bundle.js，使得bundle.js可以和HMR server建立websocket的通信连接

webpack的chunkhash没办法配合热更新使用
MiniCssExtractPlugin提取出独立文件（打包时 文件不改变 不更新hash） 无法和style-loader（插入header）一起使用

 loader 有严格的顺序要求
plugins 可能会存在顺序要求，不过很少，不是很严格，这个也是 webpack 会让人困惑的地方。因为 plugin 是通过 webpack 的 Tapable 的钩子进行事件控制的，也就是插件通过事件监听的方式进行执行。用的plugin会自己绑定相应的事件，所以一般不用关注顺序。
