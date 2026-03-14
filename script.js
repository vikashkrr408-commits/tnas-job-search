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