let input=document.getElementById('inputdata');
let btn=document.getElementById('addbtn');
let tasks=document.getElementById('alltasks');
let notasks=document.getElementById('notask');


let showdiv = ()=>{
   if(tasks.childElementCount == 0)
   {
    notasks.classList.remove('none');
   }
}

let addnewtask=()=>{
let data= input.value;
console.log(input);

//  let newDiv=document.createElement('div');
//  newDiv.classList.add('alert');
//  newDiv.classList.add('alert-info');
//  newDiv.append(data);
//  alltasks.append(newDiv);
if(data.trim() =='' ||(data.length<3)||(data.length>20)){
alert('Please Enter valid data')
}
else{
    tasks.innerHTML+=` <div class=" checked alert alert-info">${data}
    
    <button class=" delete btn btn-danger float-right" style="margin:-6px;">delete</button>
    </div>`
       
    notasks.classList.add('none');
    

    input.value='';
}
}

addbtn.addEventListener('click',addnewtask);

document.addEventListener('click',(e)=>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
    showdiv()
   
}else if(e.target.classList.contains('checked')){
e.target.classList.toggle('check');
}
})

