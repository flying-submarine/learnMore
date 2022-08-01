function PromiseDemo(fn){
    this.prmState = "pending"
    this.prmValue = undefined
    this.thenCallback = undefined
    this.catchCallback = undefined
    var _this = this // 保存this

    const resolve = function(value){
        if(_this.prmState== "pending"){
            _this. prmState = "fullfilled"
            _this.prmValue = value
            //当传⼊的类型是Promise对象时
            if (value instanceof PromiseDemo ){
                value.then(function(res){
                    _this.thenCallback(res)

                })
            } else {
                setTimeout(()=>{
                    if(_this.thenCallback){
                        _this.thenCallback(value)
                    }
                })
            }
        }
    }
    const reject = function(err){
        if(_this.prmState== "pending"){
            _this. prmState = "rejected"
            _this.prmValue = err
            setTimeout(()=>{
                if(_this.catchCallback){
                    _this.catchCallback(value)
                }
            })
        }  
    }

    if(fn) {
        fn(resolve,reject)
    } else {
        throw("Init Error,Please use a function to init promiseDemo!")
    }
}

PromiseDemo.prototype.then = function(callback){
    var _this = this // ?
    return new PromiseDemo(function(resolve,reject){
        _this.thenCallback = function(value){
            var callbackRes = callback(value)
            resolve(callbackRes)
        }
    })
}

PromiseDemo.prototype.catch = function(callback){
    var _this = this
    return new MyPromise(function(resolve,reject){
        _this.catchCallback = function(errValue){
            var callbackRes = callback(errValue)
            resolve(callbackRes)
    }
 })
}

var p = new PromiseDemo(function(resolve){
    resolve(new PromiseDemo(function(resolve1){
        resolve1('aaa')
    }))
})
console.log(p.__proto__,'mm')
p.then(function(res){
    console.log(res,"cc3")
}).then(function(res){
    console.log(res,"cc")
}).then(function(res){
    console.log(res,"cc1")
})


