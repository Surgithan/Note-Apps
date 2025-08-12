// selecting popup

var popup = document.querySelector('.popup-overflow');
var overflow = document.querySelector('.popup-main-container');
var btnAdd = document.getElementById('btnplus');

btnAdd.addEventListener('click', () => {
    popup.style.display = 'block';
    overflow.style.display = 'block';
    popup.style.position = 'fixed';
})


// select close button 

var closebtn = document.getElementById('delete-one');

closebtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = 'none';
    overflow.style.display = 'none';
})


// selecting content box,input title ,input date,input contents

var content = document.querySelector('.content-container');
var title = document.getElementById('tittle');
var date = document.getElementById('date');
var textContent = document.getElementById('contents-inside');

// handle form submit (validation + add note)
var submit = document.getElementById("noteForm");

submit.addEventListener("submit", function (add) {
    add.preventDefault();

    let titleValue = title.value.trim();
    let dateValue = date.value.trim();
    let contentValue = textContent.value.trim();

    // create note
    var div = document.createElement('div');
    div.setAttribute('class', 'content');
    div.innerHTML = `
        <h2>${titleValue}</h2><hr>
        <p>${dateValue}</p>
        <p>${contentValue}</p>
        <button onclick="del(this)">Delete</button>
    `;

    content.append(div);

    // Hide popup & reset form
    popup.style.display = 'none';
    overflow.style.display = 'none';
    submit.reset();
});

// auto fill date when clicked
date.addEventListener("click", () => {
    let today = new Date();
    let formatDate = today.toISOString().split('T')[0];
    date.value = formatDate;
});


// delete note function
function del(btn) {
    btn.parentElement.remove();
}

// close notes app
document.getElementById("close").addEventListener("click", (e) => {
    e.preventDefault();
    window.close();
});
