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

let title = document.getElementById('title');
let statu = document.getElementById('statu');
let Priority = document.getElementById('Priority');
let description = document.getElementById('description');
let submit = document.getElementById('submit');
let todo1 = document.getElementById('todo1');
let box= document.querySelector('.box');


// create task 
   
  
    let data
    if(localStorage.stockage != null){
        data= JSON.parse(localStorage.stockage);
    }else{
        data = [];
    }
        

 
  submit.onclick = function(){
   let  newtask = {
    title:title.value,
    status: statu.value,
    Priority:Priority.value,
    description: description.value,

   }
   data.push(newtask);
   localStorage.setItem('stockage',  JSON.stringify(data));
   console.log(data);
}


// read data 

let continer= document.getElementById("todo1");
console.log(continer);


submit.onclick = function(){
continer.innerHTML +=`
 <div class="border-2 border-red-600  border-l-8 border-red-500..." style="height: 130px; width: 330px; margin-top:20px ; margin-left: 150px;">

     <h2 style="margin-left: 30px; font-family: 'Courier New', Courier, monospace;   font-size: 600;">${title.value}</h2>
                             <p style="margin-left: 20px;">${statu.value}</p>
                            <p style="margin-left: 20px;">${Priority.value}</p>

                             <p style="margin-left: 20px;">${description.value}</p>


        <div class="flex" style="margin-top: 35px; margin-left: 140px;">

            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>


        </div>
        </div>
`
}

let continer2= document.getElementById("doing1");
console.log(continer2);

submit.onclick = function(){
    continer2.innerHTML +=`

     <div class="border-2 border-blue-600  border-l-8 border-blue-500..." style="height: 130px; width: 330px; margin-top:20px ; margin-left: 150px;">

      <h2 style="margin-left: 30px; font-family: 'Courier New', Courier, monospace;   font-size: 600;">${title.value}</h2>
                             <p style="margin-left: 20px;">${statu.value}</p>
                            <p style="margin-left: 20px;">${Priority.value}</p>

                             <p style="margin-left: 20px;">${description.value}</p>

        <div class="flex" style="margin-top: 80px; margin-left: 140px;">
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>

            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>


        </div>
    </div>
    `
    }

    let continer3= document.getElementById("done1");
    console.log(continer3);

    submit.onclick = function(){
    continer3.innerHTML +=`

      <div class="border-2 border-green-600  border-l-8 border-green-500..." style="height: 130px; width: 330px; margin-top:70px ; margin-left: 150px;">

          <h2 style="margin-left: 30px; font-family: 'Courier New', Courier, monospace;   font-size: 600;">${title.value}</h2>
                             <p style="margin-left: 20px;">${statu.value}</p>
                            <p style="margin-left: 20px;">${Priority.value}</p>

                             <p style="margin-left: 20px;">${description.value}</p>
        <div class="flex" style="margin-top: 80px; margin-left: 140px;">
            <button type="button" id="update" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>

            <button type="button" id="delete" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
    </div>
    `
    }