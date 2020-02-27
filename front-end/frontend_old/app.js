
const TASK_API_URL = 'http://localhost:5000/tasks';

//---- Elements ---------//

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

document.addEventListener('DOMContentLoaded',()=>{
    fetch(TASK_API_URL)
        .then(resp => {return resp.json()})
        .then(r => {
            for(let task of r){
                let task_template = ` <div class="project_bar">
                <div class="project_text">
                    <h1 id="name">${task._name}</h1>
                    <div class="project_info">
                        <h4>${task._description}</h4>
                    </div>
                </div>
            </div>`;
            document.querySelector('.main').innerHTML += task_template;
            }
        });

    const modal = document.querySelector('.modal');   
    const backdrop = document.querySelector('.backdrop');
    document.querySelector('.add').addEventListener('click',()=>{
        let form_template = `<h1>Hello this is task form</h1>`;
        modal.classList.toggle('hidden');
        backdrop.classList.toggle('hidden');
    });

    document.querySelector('#cancel_modal').addEventListener('click',()=>{
        modal.classList.toggle('hidden');
        backdrop.classList.toggle('hidden');
    });

    document.querySelector('.backdrop').addEventListener('click',()=>{
        modal.classList.toggle('hidden');
        backdrop.classList.toggle('hidden');
    });

    
})

