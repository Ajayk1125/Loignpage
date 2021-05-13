const UserName = "ajay";
const password = "12345"

//console.log(document.getElementById('username').value);

function myfunction() {
    //alert(document.getElementById('password').value);
    if (UserName === document.getElementById('username').value && password === document.getElementById('password').value) {
        alert("Login SuccessFull!!");
    } else {
        alert("Login Failed!!");
    }
}
