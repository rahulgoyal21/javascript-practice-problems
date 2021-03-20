// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     addNode(value) {
//         const node = new Node(value)
//         if(this.head === null) this.head = node
//         else {
//             let headCopy = this.head;
//             while(headCopy){
//                 headCopy = headCopy.next;
//             }
//             headCopy.next = node
//         }
//         this.size++;
//     }

//     traverseLinkedList() {
        
//         if(this.size !== 0){
//             let str = null
//             let headCopy = this.head
//             console.log("headCopy",headCopy)
//             while(headCopy){
//                 str += headCopy.value + " ";
//                 headCopy = headCopy.next;
//             }
//             console.log("Linked List is",str)
//         }
//         else {
//             console.log("Linked List is Empty")
//         }
//     }
// }
// const linkedListHead = new LinkedList()
// linkedListHead.addNode(1);
// linkedListHead.addNode(2);

// linkedListHead.addNode(3);

// linkedListHead.addNode(4);

// linkedListHead.traverseLinkedList()

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }    
        this.length++;
    } 

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
            this.head = null;
        }
    }
    

    //shift
    removeFromBegining(){
        if(!this.length) return undefined
        if(!this.head.next) {
            this.head = null;
            this.next = null;
            this.length--;
        }
        this.head = this.head.next;
        this.length--;
    }

    //unshift
    insertAtBeginning(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    //nodeByINdex
    getNodeByIndex(n){
        if(n<0) return undefined;
        else if(n >= this.length) return undefined;
        else{
            let count = 0;
            let ptr = this.head;
            while(count !== n){
                ptr = ptr.next;
                count++;
            }
            return ptr.value
        }
    }
    
    //insertAtSpecificPosition
    setNodeAtIndex(index,value){
        const newNode = new Node(value);
        if(index < 0 || index > this.length) return undefined;
        else{ 
            if(index === 0){
                newNode.next = this.head;
                this.head = newNode
            }else{
                let count = 0;
                let current = this.head;
                let prev;
                while(count !== index){
                    prev = current;
                    current = current.next;
                    count++;
                }
                if(!prev.next){
                    prev.next = newNode;
                    this.tail = newNode;
                }else{
                    prev.next = newNode;
                    newNode.next = current;
                }
            }    
        }
        this.length++;
    }
    
    //deleteFromSpecificPosition
    deleteAtIndex(index){
        if(!this.length) return undefined;
        else if(index < 0 || index >= this.length) return undefined;
        else if(index === 0){
            this.head = this.head.next;
        }
        else{
            let count =0;
            let current = this.head;
            let prev;
            while(count !== index){
                prev = current;
                current = current.next;
                count++;
            }
            if(!current.next){
                prev.next = null;
                this.tail = prev;
            }else {
                prev.next = current.next;
            }
        }
    }

    //reverseLinkedList
    reverseLinkedList(){
        if(!this.length) return undefined;
        else if(this.length > 1){
            let count = 0;
            let current = this.head;
            let prev
            while(current.next !== null){
                prev = current;
                current = current.next;
            }
            this.head = current;
            // while(this.length - 1 !== count){
            //     current.next = prev.next;
            //     current = prev;
            //     //prev = prev.next;
            //     count++;
            // }
        }
    }
    traverse(){
        let start = this.head;
        while(start !== null){
            console.log("value",start.value)
            start = start.next;
        }
    }
}

const newObj = new SinglyLinkedList();
newObj.push(2);
newObj.push(3);
newObj.push(4);
newObj.push(5);
newObj.push(6);
console.log(newObj.traverse())
// newObj.pop()
// console.log(newObj.traverse())
//newObj.pop()
//console.log(newObj.traverse())
// newObj.removeFromBegining();
// console.log(newObj.traverse())
//newObj.insertAtBeginning(10);
console.log(newObj.getNodeByIndex(4));
// console.log(newObj.traverse())
// newObj.setNodeAtIndex(5,15);
// console.log(newObj.traverse())
// newObj.deleteAtIndex(0)
// console.log(newObj.traverse())
newObj.reverseLinkedList()
console.log(newObj.traverse())





