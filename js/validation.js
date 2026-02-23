document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const userErr = document.getElementById("userError");
      const passErr = document.getElementById("passError");

      userErr.innerText = "";
      passErr.innerText = "";

      // basic validation
      if (username === "") {
        userErr.innerText = "Username required";
        valid = false;
      }

      if (password === "") {
        passErr.innerText = "Password required";
        valid = false;
      }

      if (!valid) return;

      // get selected role
      const roleInput = document.querySelector('input[name="role"]:checked');

      if (!roleInput) {
        passErr.innerText = "Please select role";
        return;
      }

      const role = roleInput.value;

      // store role (simple)
      if (typeof setUserRole === "function") {
        setUserRole(role);
      }

      // redirect (simple navigation)
      if (role === "admin") {
        window.location.href = "admin-home.html";
      } else {
        window.location.href = "user-home.html";
      }
    });
  }

});