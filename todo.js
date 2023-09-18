let tasks = JSON.parse(localStorage.getItem('todos')) 
if (!tasks) {
    tasks = []
}


buttons.addEventListener('click', ()=>{
    if (inpVal.value === '') {
       prompt('Write a new Task') 
    }
    tasks.push(inpVal.value)
    displayTasks()
    inpVal.value = ''
        localStorage.setItem('todos', JSON.stringify(tasks))
})



function displayTasks(){
    disp.innerHTML = ''
    if (tasks.length > 0) {
        tasks.forEach((elem, i)=>{
            disp.innerHTML += `
    
            <p style= "color: white; font-size: 30px;" >${i +1} ${elem}</p>
    
            <button style="background-color:aqua; border-radius:30px; color:blue; padding: 15px 15px; border: 1px solid salmon " onclick="clearTask(${i})">CLEAR TASKS</button>
            `
        })
        
    }
    else{
        disp.innerHTML = `No task recorded here`
    }
            
   
}

displayTasks()

function clearTask(id){
     tasks.splice(id, 1)

     localStorage.setItem('todos', JSON.stringify(tasks))
     displayTasks()
}



