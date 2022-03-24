module.exports = {
    entry:"./main.js",
    module:{
        rules:[{
            test:/\.js$/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"],
                    plugins:[["@babel/plugin-transform-react-jsx",
                        {pragma: "weidong"}
                    ]] // 翻译jsx语法 <div>标签 =》 React.createElement(\"div\", null)
                }
            }  
        }]
    },
    mode:"development"
}