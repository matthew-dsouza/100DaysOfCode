// document.querySelector("#push").onclick = function () {
//   if (document.querySelector("#newtask input").value.length == 0) {
//     alert("Kindly Enter Task Name!!!!");
//   } else {
//     document.querySelector("#tasks").innerHTML += `
//       <div class="task">
//           <span id="taskname">
//               ${document.querySelector("#newtask input").value}
//           </span>
//           <button class="delete">
//               <i class="far fa-trash-alt"></i>
//           </button>
//       </div>
//   `;

//     var current_tasks = document.querySelectorAll(".delete");
//     for (var i = 0; i < current_tasks.length; i++) {
//       current_tasks[i].onclick = function () {
//         this.parentNode.remove();
//       };
//     }
//   }

//   document.querySelector("#newTaskInput").value = "";
// };

//
//
// VARIABLES
var newTask = "";
var taskCount;
var taskFromLocalStorage = "";
let output = "";
var currentDeleteButtonParent;

var localStorageNullCounter = 0;

//
//
// SET TASKCOUNT TO ZERO ON FIRST LOAD
if (!localStorage.getItem("taskCount")) {
    localStorage.setItem("taskCount", 0);
}
taskCount = localStorage.getItem("taskCount");
taskCount = parseInt(taskCount);


//
//
// TO DISPLAY THE TASKS ON RELOAD
document.querySelector("#tasks").innerHTML = "";
for (let index = 1; index <= taskCount; index++) {
    taskFromLocalStorage = localStorage.getItem(`task-${index}`);
    console.log(taskFromLocalStorage);

    //
    if(taskFromLocalStorage == null) {
        taskCount = taskCount;
    }
    
    if (taskFromLocalStorage != null) {
        output += `
            <div class="${`task task-${index}`}">
                <span id="taskname">${taskFromLocalStorage}</span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
            `;

        //   console.log(output);
        document.querySelector("#tasks").innerHTML = output;
    }
    // 
} // for loop ends




// taskCount = tempTaskCountBeforeDeletion;

//
//
// ADD A NEW TASK TO LOCAL STORAGE
// document.querySelector("#push").onclick = function () {
//     if (document.querySelector("#newtask input").value.length == 0) {
//         alert("Kindly Enter Task Name!!!!");
//     } else {
//         // adds the value to localStorage
//         newTask = document.querySelector("#newTaskInput").value;

//         //   console.log(taskCount);

//         taskCount++;
//         localStorage.setItem("taskCount", taskCount);
//         taskCount = localStorage.getItem("taskCount");
//         localStorage.setItem(`task-${taskCount}`, newTask);

//         // convert taskCount from string to integer
//         taskCount = parseInt(taskCount);
//         //   console.log(taskCount);

//         location.reload(true);
//     } //else statement ends
// }; // addNewTask() ends here

// ADD A NEW TASK TO LOCAL STORAGE USING AN ARRAY
document.querySelector("#push").onclick = function () {
    if (document.querySelector("#newtask input").value.length == 0) {
        alert("Kindly Enter Task Name!!!!");
    } else {
        // adds the value to localStorage
        newTask = document.querySelector("#newTaskInput").value;

        //   console.log(taskCount);

        taskCount++;
        localStorage.setItem("taskCount", taskCount);
        taskCount = localStorage.getItem("taskCount");
        localStorage.setItem(`task-${taskCount}`, newTask);

        // convert taskCount from string to integer
        taskCount = parseInt(taskCount);
        //   console.log(taskCount);

        location.reload(true);
    } //else statement ends
}; // addNewTask() ends here

//
//
// DELETE A TASK FROM LOCAL STORAGE
var allTasks = document.querySelectorAll(".delete");
for (var i = 0; i < allTasks.length; i++) {
    allTasks[i].onclick = function () {
        //   this.parentNode.remove();

        currentDeleteButtonParent = this.parentNode;
        // console.log(currentDeleteButtonParent);

        // this string contains the classNames of the parent element of the delete button which was clicked
        var currentDeleteButtonParentClass =
            currentDeleteButtonParent.className;

        //   console.log(currentDeleteButtonParentClass);

        let currentDeleteButtonParentClassesArray =
            currentDeleteButtonParentClass.split(" ");
        let classOfTheTaskToBeDeleted =
            currentDeleteButtonParentClassesArray[1];

        //   console.log(classOfTheTaskToBeDeleted);

        localStorage.removeItem(classOfTheTaskToBeDeleted);
        taskCount--;
        localStorage.setItem("taskCount", taskCount);



        location.reload(true);
    };
} // deleteATask() ends here