let divText = document.createElement("div");
divText.id = "notes-container";

let textArea = document.createElement("textarea");
textArea.id = "note-text";
textArea.rows = "10";
textArea.cols = "80";
textArea.placeholder = "Enter a text...";
divText.appendChild(textArea);

let divNoteAction = document.createElement("div");
divNoteAction.className = "note-actions";

let addButton = document.createElement("button");
addButton.className = "btn btn-primary";
addButton.textContent = "Add a note";
addButton.onclick = addNote;

divNoteAction.appendChild(addButton);
divText.appendChild(divNoteAction);

document.body.appendChild(divText);

let notesList = document.createElement("div");
notesList.id = "notes-list";
document.body.appendChild(notesList);

document.addEventListener("DOMContentLoaded", function() {
    displayNotes();
});

function addNote() {
    let noteText = document.getElementById("note-text").value;
    if (noteText.trim() !== "") {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
        document.getElementById("note-text").value = "";
    }
}


function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";
    notes.forEach(function (note, index) {
        let noteElement = document.createElement("div");
        noteElement.classList.add("note");

        let noteText = document.createElement("span");
        noteText.textContent = note;
        noteElement.appendChild(noteText);

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "btn btn-primary";
        editButton.onclick = function () {
            showEditTextArea(index);
        };
        noteElement.appendChild(editButton);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger";
        deleteButton.onclick = function () {
            deleteNote(index);
        };

        noteElement.appendChild(deleteButton);

        notesList.appendChild(noteElement);
    });
}

function showEditTextArea(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let noteElement = document.querySelectorAll(".note")[index];
    let noteText = noteElement.querySelector("span");

    let editTextArea = document.createElement("textarea");
    editTextArea.rows = "4";
    editTextArea.cols = "50";
    editTextArea.textContent = noteText.textContent;

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "btn btn-primary";
    saveButton.onclick = function () {
        saveEditedText(index, editTextArea.value);
    };

    noteElement.replaceChild(editTextArea, noteText);
    noteElement.appendChild(saveButton);
}

function saveEditedText(index, newText) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes[index] = newText;
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}