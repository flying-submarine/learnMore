function weidong(type,attributes,...children){
    let element 
    if (typeof(type) === "string")
        element =new ElementWrapper(type);
    else {
        element = new type
    }
    for (let a in attributes){
        element.setAttribute(a , attributes[a]);
    }
    for (let dom of children){
        if (typeof(dom) === "string")
           dom =  new TextWrapper(dom)
        element.appendChild(dom);
    }
    return element;
}

class TextWrapper {
    constructor(type){
        this.root = document.createTextNode(type)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
    setAttribute(name ,value){
        this.root.setAttribute( name , value)
    }
    appendChild(child){
        child.mountTo(this.root)
    }
}

class ElementWrapper {
    constructor(type){
        this.root = document.createElement(type)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
    setAttribute(name ,value){
        this.root.setAttribute( name , value)
    }
    appendChild(child){
        child.mountTo(this.root)
    }
}

class Div { // 大写时运行
    constructor(){
        this.root = document.createElement("div")
    }
    mountTo(parent){
        parent.appendChild(this.root )
    }
    setAttribute(name ,value){
        console.log(111)
        this.root.setAttribute( name , value)
    }
    appendChild(child){
        child.mountTo(this.root)
    }
}


let cc = <Div id="test">
    <span id="ee">a</span>
    <span id="bb">b</span>
    <span id="cc">c</span>
</Div>

cc.mountTo(document.body)