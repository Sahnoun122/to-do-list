const btn1 = document.querySelector("#crud-modal");
let isclick =true;
let btn = function(){
    if(isclick == 1){
        btn1.style.display="block";
        isclick=0;
    }else{
        btn1.style.display="none";
        isclick=1;
    }
   
}
let crud = document.getElementById('crud-modal');
 let title = document.getElementById('title');
let statu = document.getElementById('statu');
let Priority = document.getElementById('Priority');
let description = document.getElementById('description');
let submit = document.getElementById('submit');
 let todo1 = document.getElementById('todo1');
let doing1 = document.getElementById('doing1');
let done1 = document.getElementById('doing1');

// create task 
   
let data;
if (localStorage.stockage != null) {
    data = JSON.parse(localStorage.stockage);
} else {
    data = [];
}

function render() {
    todo1.innerHTML = '';
    doing1.innerHTML = '';
    done1.innerHTML = '';

    data.forEach((task, index) => {
        const container = getcontainer(task.statu);
        if (container) {
            container.innerHTML += `
               <div id="pro" class="border-2 todoo ${create(Priority)}  border-l-8 border..." style="height: 130px; width: 330px; margin-top:60px ; margin-left: 150px;">
           
        <h2 style="margin-left: 30px; font-family: 'Courier New', Courier, monospace;   font-size: 600;">${task.title}</h2>
                                <p style="margin-left: 20px;">${task.statu}</p>
                               <p style="margin-left: 20px;">${task.Priority}</p>
   
                                <p style="margin-left: 20px;">${task.description}</p>
   
   
           <div class="flex" style="margin-top: 60px; margin-left: 140px;">
   
               <button type="button"   onclick="update(${index})" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
               <button type="button" onclick="deletee(${index})" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
   
   
           </div>
           </div>
            `
        }
    });
}

submit.onclick = function() {
    let newtask = {
        title: title.value,
        statu: statu.value,
        Priority: Priority.value,
        description: description.value,
    };
    data.push(newtask);
    localStorage.setItem('stockage', JSON.stringify(data));
    render();
};

function getcontainer(statu) {
    switch (statu) {
        case 'todo':
            return document.getElementById('todo1');
        case 'doing':
            return document.getElementById('doing1');
        case 'done':
            return document.getElementById('done1');
        default:
            return null;
    }
}

function create( Priority) { 
    const div = document.createElement('div');
    let con = document.getElementById("pro");
    if(Priority==="P1"){
           
        document.getElementById("pro").classList.add("todoo")
    }else if(Priority==="P2"){
        document.getElementById("pro").classList.add("todoo1")
    }else if (Priority==="P3"){
        document.getElementById("pro").classList.add("todoo2")

    }

    }

    function cleardata(){
        task.title= '';
        task.description= '';
        task.statu='';
        task.Priority='';

}


function deletee(index) {
    data.splice(index, 1);
    localStorage.setItem('stockage', JSON.stringify(data));
    render();
}



function update(index) {
    const task = data[index];
    if (task) {
        document.getElementById('title').value = task.title;
        document.getElementById('statu').value = task.statu;
       //document.getElementById('priority').value = task.Priority;
        document.getElementById('description').value = task.description;
    }
    document.getElementById('crud-modal').style.display = 'flex';
}

function save() {
    document.getElementById('crud-modal').style.display = 'none';
   
}



    