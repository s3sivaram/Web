const srctext=document.getElementById("search-id");
const searchbutton = document.getElementById("button1");
const taskcontainer=document.getElementById("task-container");
var taskitemID=0;



// reset the text field empty on click of the ToDo box
srctext.addEventListener("click",()=>{
    srctext.value="";
})
//-------------------------------------------------
// set the eventlistener to the elements....

searchbutton.addEventListener("click",addTask);


// ----------------------------------------
// Function to the Add the To do List item....

function addTask(){

    
    // console.log(srctext.value);
    var taskItem=document.createElement("li");
    taskItem.innerHTML=srctext.value;

    const taskItemX=document.createElement("span");
   
    console.log(taskcontainer);

    var IdAttr=document.createAttribute("Id");
    taskitemID=taskitemID+1;
    IdAttr.value=taskitemID;

    taskItem.setAttributeNode(IdAttr);

    var classAttr=document.createAttribute("class");
    classAttr.value="todo-items";
    taskItem.setAttributeNode(classAttr);
    // taskItem.innerHTML = taskItem.innerHTML+taskItemX.innerHTML;
    taskcontainer.appendChild(taskItem);
    taskItem.appendChild(taskItemX);
    taskItemX.innerHTML="X";
    taskItem.addEventListener("dblclick",deleteTask);
    taskItemX.addEventListener("click",taskItemX1);
    

// ----------------------------------------
// function to  invoke on click of the task item

    function deleteTask(){
        console.log("delete task");
        taskItem.classList.toggle("todo-items-strike");
        console.log("X=",taskItemX);
        console.log("=",taskItem);
    
    }
    function taskItemX1(){
        console.log("X=",taskItemX)
        taskItem.remove();
    }

}
var togbutton = document.getElementById("togbutton");
var togtext = document.getElementById("togtext");
togbutton.addEventListener("click",togfunction);

function togfunction(){
    
    if (togbutton.innerHTML=="Show") {
        togbutton.innerHTML="Hide";
        
    }else{
    
        togbutton.innerHTML="Show";
    }

    
    togtext.classList.toggle("toggle");
 
}