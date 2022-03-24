function weidong(type,attributes,...children){
    let element 
    if (typeof(type) === "string")
        element = document.createElement(type);
    else {
        element = new type
    }
    for (let a in attributes){
        element.setAttribute(a , attributes[a]);
    }
    for (let dom of children){
        if (typeof(dom) === "string")
           dom =  document.createTextNode(dom)
        element.appendChild(dom);
    }
    return element;
}

class ElementWrapper {
    
}

class Div { // 大写时运行
    constructor(){
        this.root = document.createElement("div")
    }
    mountTo(parent){
        parent.appendChild(this.root )
    }
    setAttribute(name ,value){
        this.root.setAttribute( name , value)
    }
    appendChild(child){
        this.root.appendChild(child)
    }
}


let cc = <Div id="test">
    <span id="ee">a</span>
</Div>
cc.mountTo(document.body)