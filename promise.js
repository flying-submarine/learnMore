function PromiseDemo(fn){
    const _this = this
    _this.prmState = "pending"
    _this.prmValue = undefined
    const resolve = (value)=>{
        if(_this.prmState== "pending"){
            _this. prmState = "fullfilled"
            _this.prmValue = value
        }
    }
    const reject = (value)=>{
        if(_this.prmState== "pending"){
            _this. prmState = "rejected"
            _this.prmValue = value
        }  
    }

    if(fn) {fn(resolve,reject)} else {
        throw("Init Error,Please use a function to init promiseDemo!")
    }
}

PromiseDemo.prototype.then = (callback)=>{
}

PromiseDemo.prototype.catch = (callback)=>{
}

var p = new PromiseDemo(function(resolve,reject){
    resolve(123)
})
console.log(p,'xxx') 
 p.then(function(res){
    console.log(res)
})


