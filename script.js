alert("Welcome tfunction searchJobs(){

let input=document.getElementById("search").value.toLowerCase()

let jobs=document.getElementsByClassName("job")

for(let i=0;i<jobs.length;i++){

let text=jobs[i].innerText.toLowerCase()

if(text.includes(input)){
jobs[i].style.display="block"
}
else{
jobs[i].style.display="none"
}

}

}o TNas Job Search")
let data = [
{title:"Indian Navy Recruitment 2026", type:"jobs"},
{title:"Railway Group D Result", type:"results"},
{title:"SSC GD Admit Card", type:"admit"},
{title:"UP Police Answer Key", type:"answer"},
{title:"PM Awas Yojana", type:"yojana"},
{title:"Scholarship 2026", type:"scholarship"},
{title:"Upcoming SSC Jobs", type:"upcoming"}
];

function loadData(){

data.forEach(item=>{

let div=document.createElement("div")
div.innerHTML="<p>"+item.title+"</p>"

document.getElementById(item.type).appendChild(div)

})

}

loadData()

function searchData(){

let input=document.getElementById("search").value.toLowerCase()

let sections=document.querySelectorAll(".section")

sections.forEach(sec=>sec.innerHTML="")

data.forEach(item=>{

if(item.title.toLowerCase().includes(input)){

let div=document.createElement("div")
div.innerHTML="<p>"+item.title+"</p>"

document.getElementById(item.type).appendChild(div)

}

})

}
