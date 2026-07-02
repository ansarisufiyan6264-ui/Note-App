const input = document.getElementById("int");
const AddBtn = document.getElementById("btn");
const result = document.getElementById("result");

let arr = JSON.parse(localStorage.getItem("notes")) || [];

// note creat karne keliye function 
function createNote(note){
    // new div creat
    let div = document.createElement("div");
    div.classList.add("note-card");
    //div.textContent = note;

    let noteText = document.createElement("p");
    noteText.textContent = note;

    
    // Delete button creat kiya
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    
    // Delete button per click event lagaya
    deleteBtn.addEventListener("click", function(){
        div.remove();
        arr = arr.filter(function(item){
            return item !== note;
        });
        localStorage.setItem("notes", JSON.stringify(arr));
    });

    // Edit button creat karke logic laga
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    // edit btn ka logic
    editBtn.addEventListener("click", function(){
        input.value = note;

        div.remove();
        arr = arr.filter(function(item){
            return item !== note;
        });
        localStorage.setItem("notes", JSON.stringify(arr));
    });

    let btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    div.appendChild(noteText);
    div.appendChild(btnGroup);
    
    result.appendChild(div);
}
 arr.forEach(function(note){
    createNote(note);
 });


AddBtn.addEventListener("click", function(){
    let note = input.value.trim();

    // agar input kahali alert dikhao
    if(note === ""){
    alert("Please Enter a note...");
    return;
    }
    
    arr.push(note);

    localStorage.setItem("notes", JSON.stringify(arr));

    createNote(note);
    input.value = "";
});



