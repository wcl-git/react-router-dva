版本高前面的 '^'的意义：

^1.2.3 等价于 >=1.2.3 <2.0.0
^0.2.3 等价于 >=0.2.3 <0.3.0
^0.0.3 等价于 >=0.0.3 <0.0.4，即等价于0.0.3


兼容IE10  babel 插件： "babel-plugin-transform-runtime": "^6.23.0",


webpack-dev-server: 
host: '0.0.0.0',
disableHostCheck: true,

0.0.0.0 是为了被人可以通过 IP 访问你本地启动的 demo
devtool 是为了不压缩源码
