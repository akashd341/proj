const {createProxyMiddleware} = require('http-proxy-middleware')


module.exports = function(app){
    
    /*app.use(
        createProxyMiddleware('/socket.io',{
        target: 'http://localhost:9494/',
        changeOrigin: true,
        ws: true,
        logLevel: 'debug',
        
       
    })
    )*/
    app.use(
        createProxyMiddleware('/api1',{
        target: 'http://localhost:8081/',
        changeOrigin: true,
        pathRewrite: {
            "^/api1" : ""
        }
    }))
}