// Form Validation

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("formMessage");

    // Email Pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "red";
        formMessage.innerText = "All fields are required!";

    } else if (!email.match(emailPattern)) {

        formMessage.style.color = "red";
        formMessage.innerText = "Enter a valid email address!";

    } else {

        formMessage.style.color = "green";
        formMessage.innerText = "Form submitted successfully!";
    }
});


// Dynamic To-Do List

function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskValue}
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

// Remove Task

function removeTask(button) {

    button.parentElement.remove();
}