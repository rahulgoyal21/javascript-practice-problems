let formData = document.getElementById("form")
let titleData = formData['title']
let contentData = formData['content']
let todoList = document.getElementById('todoList')
const notes = []
formData.addEventListener('submit',(e)=>{
    e.preventDefault()    //to prevent default behaviour of page refreshing
    
    todoList.innerHTML = '' 

    notes.push({title:titleData.value,content:contentData.value})    //to collect all todos at one place, acts as a DS

    //To present data on UI with unique data-id for delete button
    notes.map((note, index) => {
        let noteItem = `
            <li>
                <h5>Title:${note.title}&ensp;</h5>
                <button name='delete' style="cursor: pointer;" data-id=${index}>X</button>
                <p>Content:${note.content}</p>
            </li>`
        todoList.innerHTML += noteItem;
    });

    //clearing UI input field after adding Todo
    titleData.value = '';
    contentData.value = ''; 
    
    //To add a 'click' eventListener on all todo's delete button
    setClickEventListener()
})
function setClickEventListener(){
    let buttons = document.querySelectorAll('ul#todoList li button')
    for(let button of buttons){
        button.addEventListener('click',()=>{
            deleteSelectedTodo(button.dataset.id)
        })
    }    
}

function deleteSelectedTodo(index){
    notes.splice(index,1)
    let selectButtonByDataId = document.querySelector(`[data-id="${index}"]`)
    let todoToBeDeleted = selectButtonByDataId.parentNode
    todoToBeDeleted.parentNode.removeChild(todoToBeDeleted)
}


