
class Node{
    constructor(name){
        this.name = name
        this.innerHTML = ''
        this.children = []
    }

    appendChild(ChildNodeName){
        this.children.push(ChildNodeName)
    }
}

const INDENT_SIZE = 4
const getSpaces = (length) => {
    return new Array(length).fill(" ").join("");
}

class VDocument extends Node{
    constructor(){
        super('html')
    }
    createElement(nodeName){
        return new Node(nodeName)
    }
    render(){
        function printTree(currentNode, currentLevel){
            //calculating the prefix spaces for current level
            const spaces = getSpaces(currentLevel * INDENT_SIZE)
            let output = "";
             
            //opening tag
            output += `${spaces}<${currentNode.name}>\n`

            if(currentNode.innerHTML){
                output += `${spaces}${getSpaces(INDENT_SIZE)}${currentNode.innerHTML}\n`
            }
            for(let i=0;i< currentNode.children.length;i++){
                output += printTree(currentNode.children[i],currentLevel + 1)
            }
            
            //closing tag
            output += `${spaces}</${currentNode.name}>\n`
            return output
        }
        console.log(printTree(this,0))
    }
}

const vDocument = new VDocument()
const body = vDocument.createElement("body")
const div = vDocument.createElement("div")
div.innerHTML = "hello i am a div!"
body.appendChild(div)
vDocument.appendChild(body)
vDocument.render()
console.dir(vDocument,body,div)