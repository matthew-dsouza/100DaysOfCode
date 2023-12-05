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
var tasksArray = [];
var tasksString = "";
var taskFromLocalStorage = "";
let input = "";
let output = "";
var taskNumber = 0;
var currentDeleteButtonParent;

tasksString;

//   newArray = tasksString.split(",");
//   console.log(newArray);

//   tasksString = tasksArray.join(", ");
//   console.log(tasksString);

//
//
// ADD A NEW TASK TO LOCAL STORAGE
document.querySelector("#push").onclick = function () {
    if (document.querySelector("#newTaskInput").value.length == 0) {
        alert("Kindly Enter Task Name!!!!");
    } else {
        // takes the value from the input field
        newTask = document.querySelector("#newTaskInput").value;
        //   console.log(newTask);

        //   creates a task element with that input
        input = `
                <div class="${`task task-${tasksArray.length}`}">
                    <span id="taskname">${newTask}</span>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                        </button>
                        </div>
                        `;
        //   console.log(input);

        // put that value into the array
        tasksArray.push(input);
        //   console.log(tasksArray);

        //   turn that array into a local string
        tasksString = tasksArray.join("<> ");
        //   console.log(tasksString);

        //   putting the string value into localstorage
        localStorage.setItem("localStorageTasks", tasksString);

        location.reload(true);
    } //else statement ends
};

//
//
// TO DISPLAY THE TASKS ON RELOAD
if (localStorage.getItem("localStorageTasks")) {
    // fetching back the string from localstorage and storing it in our string var
    tasksString = localStorage.getItem("localStorageTasks");
    // console.log(tasksString);

    // turn that fetched string into an array
    tasksArray = tasksString.split("<> ");
    //   console.log(tasksArray);

    for (let i = 0; i < tasksArray.length; i++) {
        output += tasksArray[i];

        //   console.log(output);
        document.querySelector("#tasks").innerHTML = output;
    } // rendering for-loop ends
}

//   //
//   //
//   // DELETE A TASK FROM LOCAL STORAGE
var allTasks = document.querySelectorAll(".delete");
for (var i = 0; i < allTasks.length; i++) {
    // console.log(allTasks.length);

    allTasks[i].onclick = function () {
        //   this.parentNode.remove();

        currentDeleteButtonParent = this.parentNode;
        //   console.log(currentDeleteButtonParent);

        // this string contains the classNames of the parent element of the delete button which was clicked
        var currentDeleteButtonParentClass =
            currentDeleteButtonParent.className;

        // console.log(currentDeleteButtonParentClass);

        let currentDeleteButtonParentClassesArray =
            currentDeleteButtonParentClass.split(" ");
        let classOfTheTaskToBeDeleted =
            currentDeleteButtonParentClassesArray[1];
        // console.log(classOfTheTaskToBeDeleted);

        taskNumber = classOfTheTaskToBeDeleted.slice(5);
        taskNumber = parseInt(taskNumber);
        console.log(taskNumber);

        delete tasksArray[taskNumber];
        //   console.log(tasksArray);

        tasksString = tasksArray.join("<> ");
        //   console.log(tasksString);

        localStorage.setItem("localStorageTasks", tasksString);

        //   localStorage.removeItem(classOfTheTaskToBeDeleted);

        location.reload(true);
    };
} // deleteATask() ends here