function PromiseDemo(fn){
    this.prmState = "pending"
    this.prmValue = undefined
    this.thenCallback = undefined
    var _this = this // 保存this

    const resolve = function(value){
        if(_this.prmState== "pending"){
            _this. prmState = "fullfilled"
            _this.prmValue = value
            setTimeout(()=>{
                if(_this.thenCallback){
                    _this.thenCallback(value)
                }
            })
        }
    }
    const reject = function(value){
        if(_this.prmState== "pending"){
            _this. prmState = "rejected"
            _this.prmValue = value
        }  
    }

    if(fn) {
        fn(resolve,reject)
    } else {
        throw("Init Error,Please use a function to init promiseDemo!")
    }
}

PromiseDemo.prototype.then = function(callback){
    this.thenCallback = function(value){
        callback(value)
    }
}

PromiseDemo.prototype.catch = (callback)=>{
}

var p = new PromiseDemo(function(resolve,reject){
    resolve("resolve")
})
console.log(p)
p.then(function(res){
    console.log(res,"cc3")
})


