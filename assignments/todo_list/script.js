let getbydiv=document.getElementById('container');
let select=document.getElementById('todo');
let completedtodo=[];
let pendingtodo=[];

fetch('https://jsonplaceholder.typicode.com/todos')  
.then(response => response.json())
.then(data => {
    for( let i=0;i<data.length;i++){
        if(data[i].completed==false){
            pendingtodo.push(data[i].title);
        }else{
            completedtodo.push(data[i].title);
        }
    }
})


select.addEventListener('change',function(){
    let value1=select.value;
    if(value1==="Completed"){
        getbydiv.innerHTML="";
        for(let i=0;i<completedtodo.length;i++){
            let tag1=document.createElement('li');
            tag1.innerHTML=completedtodo[i];
            getbydiv.appendChild(tag1);
        }
    }else if(value1==="Pending"){
        getbydiv.innerHTML="";
        for(let i=0;i<pendingtodo.length;i++){
            let tag1=document.createElement('li');
            tag1.innerHTML=pendingtodo[i];
            getbydiv.appendChild(tag1);
        }
    }
})