
const input= document.getElementById('input');
const button=document.getElementById('button');
const ul=document.getElementById('tasks');

button.addEventListener('click',() =>{
        const inputvalue= input.value;
        if(inputvalue !== ''){
            const li=document.createElement('li');
            li.innerHTML=`<span class="span">   ${inputvalue}</span>
            <button class="delete">X</button>`;
            ul.appendChild(li);
            input.value = '';
            input.focus();
            //delete task
            li.querySelector('.delete').addEventListener('click',() => {
                li.remove();
                });      
        };
});
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
});