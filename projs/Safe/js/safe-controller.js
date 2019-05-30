
function onInit() {
    // createUsers();
    saveUsers()
}

function greetUser() {
    var currUser = JSON.parse(localStorage.getItem('currUser'))
    if (!currUser) { window.location.href = 'restricted.html'; }
    // if (currUser.isAdmin === false) { window.location.href = 'hidden.html'; }
    document.querySelector('.displayed-user').innerText = (currUser.name)
}
function greetAdmin() {
    var currUser = JSON.parse(localStorage.getItem('currUser'))
    if (!currUser || !currUser.isAdmin) { window.location.href = 'restricted.html'; }
    document.querySelector('.displayed-user').innerText = (currUser.name)
    renderUsers()
}


function onLogin() {
    var isLegit = checkUserNameAndPassword();
    var currUser = JSON.parse(localStorage.getItem('currUser'))
    if (isLegit) {
        if (currUser.isAdmin) window.location.href = 'admin.html';
        else window.location.href = 'hidden.html'; 
    }
    else { window.location.href = 'restricted.html'; }
    // console.log(currUser)
    // if (isLegit) {console.log('LEGIT USER!')}
    // else {console.log('NOT LEGIT!')}
}

function clearLocalStorage() {
    localStorage.clear()
    console.log('Local Storage Cleared!')
    window.location.href = 'index.html'
}

function renderUsers() {
    var users = JSON.parse(localStorage.getItem('users'));
    var strHtml = ''
    var adminTable = document.querySelector('.admin-table');
    users.forEach(function (user) {
        strHtml += `<tr><td>${user.userName}</td></tr>`
    });
    adminTable.innerHTML = strHtml;
}

function onAddUser() {
    var userName = prompt('Username?');
    if (userName === null || userName === ' ' || userName.replace(/\s/g, "") === '') { return }
    addUser(userName);
    renderUsers();
    // if (gUsers.length > 0) { elNoTodosMsgBox.add("hidden"); }
    // if (!getActiveCount()){document.querySelector('.active-msgbox').classList.toggle("hidden");}
}

function onDeleteUser(ev, todoId) {
    ev.stopPropagation();
    if (confirm('Are you sure, you dirty procrastinator?') === true) {
        deleteUser(todoId);
        renderUsers();
        if (gUsers.length === 0) { elNoTodosMsgBox.remove("hidden"); }
    }
    else return
}

function onSetSort(txt) {
    if (txt === '') { return }
    console.log('Sorting by', txt);
    setSorter(txt);
    renderUsers();
}





