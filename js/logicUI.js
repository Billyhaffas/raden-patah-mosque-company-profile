 function showRegister() {
      const card = document.getElementById("autentikasiCard");
      const login = document.getElementById("loginForm");
      const register = document.getElementById("registerForm");

      card.classList.remove("max-w-md");
      card.classList.add("max-w-3xl");

      login.classList.add("hidden");
      register.classList.remove("hidden");

      setTimeout(() => {
        register.classList.remove("opacity-0");
      }, 50);
    }

    function showLogin() {
      const card = document.getElementById("autentikasiCard");
      const login = document.getElementById("loginForm");
      const register = document.getElementById("registerForm");

      card.classList.remove("max-w-3xl");
      card.classList.add("max-w-md");

      register.classList.add("hidden");
      login.classList.remove("hidden");
    }