// auth.js

// Auth Listener
auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User logged in:", user.email);
    } else {
      console.log("User not logged in.");
      window.location.href = "login.html"; // Redirect if not logged in
    }
  });
  
  // Ensure the user is a retailer
  async function checkRetailerRole() {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("You must be logged in.");
    }
  
    const token = await user.getIdTokenResult();
    if (token.claims.role !== "retailer") {
      throw new Error("Only retailers can add products.");
    }
  }
  