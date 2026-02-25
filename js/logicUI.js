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

const ta = document.getElementById('tujuan');
const line = parseFloat(getComputedStyle(ta).lineHeight) || 24;
const base = line;
const autoResize = (el) => { el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; };
window.addEventListener('load', () => autoResize(base)); // Resize on page load ini kenapa bisa ambil base? 
// Karena base itu line yang sudah di parseFloat, jadi dia akan resize sesuai dengan line height yang
//  sudah ditentukan. Jadi kalau line height nya 24px, maka textarea akan otomatis resize sesuai dengan isi 
// dan line height nya tetap 24px.
ta.addEventListener('input', () => autoResize(ta));

