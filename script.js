const todoList = [];
function addTodo(){
    const inputElementname = document.querySelector('#js-input-name');
    const inputElementDate = document.querySelector('#js-input-date');
    const name = inputElementname.value;
    const dueDate = inputElementDate.value;
    console.log(typeof name);
    if(name == ''){
        document.querySelector('.js-todo-dispaly')
            .innerHTML = 'Please add the Todo name';
        return;
    }
    todoList.push({
        name: name,
        dueDate: dueDate
    });
    displayTodoList();
    inputElementname.value ='';
    inputElementDate.value ='';
}

function displayTodoList(){
    let todoListHTML = '';

    for( let i=0 ; i<todoList.length ; i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html = `<div>${todoObject.name}</div>
        <div> ${todoObject.dueDate} </div> 
        <div><button class ="delete-todo-button" onclick ="todoList.splice(${i},1); i=0; todoListHTML = ''; displayTodoList();">Delete</button></div>`;

        todoListHTML += html ; 
    }
    document.querySelector('.js-todo-display')
        .innerHTML = todoListHTML;
    
}
