const loginBtn = document.getElementById("btn2");
const loginForm = document.getElementById("login-form");

loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Successfully Logged In");
            window.location.href = "UI-2.html";
        })
        .catch((error) => {
            alert("Login failed: " + error.message);
            console.error("Login Error:", error);
        });
});
