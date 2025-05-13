const btn = document.getElementById("btn");
const signupForm = document.getElementById("sign-up");

btn.addEventListener("click", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!firstName || !lastName || !email || !password || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user.updateProfile({
                displayName: `${firstName} ${lastName}`,
            });
        })
        .then(() => {
            alert("User Successfully Created! Please Log in.");
            window.location.href = "login page.html";
        })
        .catch((error) => {
            alert("Signup failed: " + error.message);
            console.error("Signup Error:", error);
        });
});
