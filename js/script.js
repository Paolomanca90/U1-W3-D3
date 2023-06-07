const taskForm = document.getElementById('my-form')
taskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const newTask = document.getElementById('inputField')
    const myTask = newTask.value

    let taskCard = document.createElement('div')
    taskCard.classList.add('task-card')
    taskCard.innerHTML = `
        <p>${myTask}</p>
        <input type='checkbox'/> 
        <button>Elimina task</button>
    `
    const savedTask = document.getElementById('new-task')
    savedTask.appendChild(taskCard)

    const check = document.querySelectorAll('.task-card input')
    check.forEach((c) =>{
        c.addEventListener('click', function(e){
            c.parentElement.querySelector('p').classList.toggle('done')
        })
    })

    const buttons = document.querySelectorAll('.task-card button')
    buttons.forEach((b) =>{
        b.addEventListener('click', function(e) {
            let buttonClicked = e.target
            let taskToRemove = buttonClicked.parentElement
            taskToRemove.remove()
        })
    })

    newTask.value = ''
})