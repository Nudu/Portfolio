// var gUsers;
var gSorterBy = null;

var gUsers = [
    {
        id: makeId(),
        userName: 'z Nudu',
        password: 123,
        isAdmin: false,
        lastLoginTime: 25,
    }
    , {
        id: makeId(),
        userName: 'b Skinny Pete',
        password: 'skin',
        isAdmin: false,
        lastLoginTime: 421,
    }
    , {
        id: makeId(),
        userName: 'c',
        password: 321,
        isAdmin: false,
        lastLoginTime: 252,
    }
    , {
        id: makeId(),
        userName: 'z AdminBoi',
        password: 'admin1',
        isAdmin: true,
        lastLoginTime: 15,
    }
    , {
        id: makeId(),
        userName: 'a',
        password: 'a',
        isAdmin: true,
        lastLoginTime: 5555,
    }
]

function checkUserNameAndPassword() {
    var elLoginUserName = document.querySelector('.login-username').value
    var elLoginPassword = document.querySelector('.login-password').value
    var users = JSON.parse(localStorage.getItem('users'));
    var testedUser = users.find(function (user) {
        return user.userName === elLoginUserName;
    })
    if (testedUser) {
        if (testedUser.password == elLoginPassword) {
            var currUserDetails = { name: testedUser.userName, isAdmin: testedUser.isAdmin }
            localStorage.setItem('currUser', JSON.stringify(currUserDetails));
            return true;
        }
    }
    return false
}

function doLogin(userName, password) {
    var users = JSON.parse(localStorage.getItem('users'));
    var testedUser = users.find(function (user) {
        return user.userName === userName;
    })
    if (testedUser) {
        if (testedUser.password == password) {
            var currUserDetails = { name: testedUser.userName, isAdmin: testedUser.isAdmin }
            localStorage.setItem('currUser', JSON.stringify(currUserDetails));
            return true;
        }
    }
    return false
}


// function createUsers() {
//     var users = loadFromStorage('users')
//     if (!users || !users.length) {
//         users = [
//             createUser('Z Nudu'),
//             createUser('C Skinny Pete'),
//             createUser('B Yaboi'),
//             createUser('A I am !Admin'),
//         ]
//     }
//     gUsers = users;
//     gUsers[3].isAdmin = true
//     saveUsers();
// }

function createUser(name) {
    return {
        id: makeId(),
        userName: name,
        password: makeId(),
        isAdmin: false,
        lastLoginTime: getCreationTimeByMili(),
    }
}


// (my getUsers() version)
function sortUsersForDisplay() {
    // debugger
    if (gSorterBy === 'Name') {
        gUsers.sort(function (a, b) {
            return (a.userName > b.userName) ? 1 : -1
        })
    }
    if (gSorterBy === 'Last Login') {
        gUsers.sort(function (a, b) {
            return a.lastLoginTime - b.lastLoginTime
        });
    }
    saveUsers()
}

function addUser(name) {
    var user = createUser(name);
    gUsers.unshift(user);
    saveUsers();
}

function deleteUser(todoId) {
    var todoIdx = gUsers.findIndex(function (todo) { return todo.id === todoId });
    gUsers.splice(todoIdx, 1);
    saveUsers();
}

function setSorter(txt) {
    gSorterBy = txt;
    sortUsersForDisplay()
}

function getTotalCount() {
    return gUsers.length
}

function getActiveCount() {
    var activeTodos = gUsers.filter(function (todo) { return !todo.isDone })
    return activeTodos.length;
}

function saveUsers() {
    saveToStorage('users', gUsers)
}

// function toggleTodo(todoId) {
//     var todo = gUsers.find(function (todo) { return todo.id === todoId });
//     todo.isDone = !todo.isDone;
//     saveUsers();
// }

// function getUsersForDisplay() {
//     if (gFilterBy === 'All') return gUsers;
//     return gUsers.filter(function (todo) {
//         return (todo.isDone && gFilterBy === 'Done') ||
//             (!todo.isDone && gFilterBy === 'Active')
//     })
// }
// function isAllTodosDone() {
//     var isActive = gUsers.every(function (todo) {
//     // return gTodos.every(function (todo) {
//         return todo.isDone;
//     });
//     return isActive
// }

// function setFilter(txt) {
//     gFilterBy = txt;
// }