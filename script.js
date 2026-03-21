<script>
function searchResult() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.getElementsByClassName("result-item");

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();

        if (text.includes(input)) {
            items[i].style.display = "block";   // show matching
        } else {
            items[i].style.display = "none";    // hide non-matching
        }
    }
}
</script>

{title:"NVS Class 6 Summer Bound Result 2026", type:"results", link:"nvs-class-6-result-2026.html"}

let data = [

{title:"Indian Navy Recruitment 2026", type:"jobs", link:"indian-navy-recruitment.html"},

{title:"Bihar Board 10th Result 2026", type:"results", link:"#"},  

{title:"DCECE Bihar Polytechnic Form 2026", type:"admission", link:"dcece-bihar-polytechnic-2026.html"}

];

function showData(list){

let output=""

list.forEach(item=>{

output += `
<div class="card">
<h3>${item.title}</h3>
<a href="${item.link}">
<button>View</button>
</a>
</div>
`

})

document.getElementById("data").innerHTML=output

}

showData(data)

function searchData(){

let input=document.getElementById("search").value.toLowerCase()

let filtered = data.filter(item =>
item.title.toLowerCase().includes(input)
)

showData(filtered)

}

{title:"Indian Navy Recruitment 2026", type:"jobs"},
{title:"Bihar Board 10th Result 2026", type:"results"},
{title:"SSC GD Admit Card", type:"admit"},
{title:"UP Police Answer Key", type:"answer"},
{title:"SSC Syllabus PDF", type:"syllabus"},
{title:"College Admission 2026", type:"admission"},
{title:"Scholarship 2026", type:"scholarship"},
{title:"PM Awas Yojana", type:"yojana"},
{title:"Upcoming Railway Jobs", type:"upcoming"}

];

data.forEach(item=>{

let div=document.createElement("p")
div.innerHTML = "➤ " + item.title

document.getElementById(item.type).appendChild(div)

});
let data = [

{title:"Indian Navy Recruitment 2026", type:"jobs", link:"indian-navy-recruitment.html"},
{title:"Railway Group D Result", type:"result", link:"#"},
{title:"SSC GD Admit Card", type:"admit", link:"#"},
{title:"UP Police Answer Key", type:"answer", link:"#"},
{title:"PM Awas Yojana", type:"yojana", link:"#"},
{title:"Scholarship 2026", type:"scholarship", link:"#"},
{title:"Upcoming SSC Jobs", type:"upcoming", link:"#"}

];

function showData(list){

let output=""

list.forEach(item=>{

output += `
<div class="card">
<h3>${item.title}</h3>
<a href="${item.link}">
<button>View</button>
</a>
</div>
`

})

document.getElementById("data").innerHTML=output

}

showData(data)

function searchData(){

let input=document.getElementById("search").value.toLowerCase()

let filtered = data.filter(item =>
item.title.toLowerCase().includes(input)
)

showData(filtered)

}

function filter(type){

if(type=="all"){
showData(data)
}
else{

let filtered = data.filter(item => item.type==type)
showData(filtered)

}

}
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
