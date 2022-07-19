function PromiseDemo(fn){
    this.prmState = "pending"
    this.prmValue = undefined
    this.thenCallback = undefined
    const resolve = function(value){
        if(this.prmState== "pending"){
            this. prmState = "fullfilled"
            this.prmValue = value
            setTimeout(()=>{
                if(this.thenCallback){
                    this.thenCallback(value)
                }
            },0)
        }
    }
    const reject = function(value){
        if(this.prmState== "pending"){
            this. prmState = "rejected"
            this.prmValue = value
        }  
    }

    if(fn) {fn(resolve,reject)} else {
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
    resolve(123)
})
console.log(p,'xxx') 
 p.then(function(res){
    console.log(res)
})


