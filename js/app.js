$(document).ready(function () {

    const protectedPages = [
        "menu.html",
        "deposit.html",
        "sendmoney.html",
        "transactions.html"
    ];

    const currentPage = window.location.pathname.split("/").pop();

    const isLogged = localStorage.getItem("loggedIn");

    // 🚨 si está en página protegida y no está logueado
    if (protectedPages.includes(currentPage) && isLogged !== "true") {
        window.location.href = "login.html";
    }

    // =========================
    // ACTIVE LINK NAVBAR
    // =========================
    const currentPage = window.location.pathname.split("/").pop();

    $(".nav-link").removeClass("active");

    $("a[href='" + currentPage + "']").addClass("active");


    // =========================
    // SESIÓN
    // =========================
    const isLogged = localStorage.getItem("loggedIn");

    if (isLogged === "true") {
        $("#nav-guest").addClass("d-none");
        $("#nav-user").removeClass("d-none");
    } else {
        $("#nav-guest").removeClass("d-none");
        $("#nav-user").addClass("d-none");
    }


    // =========================
    // LOGOUT
    // =========================
    $("#logout").click(function (e) {
        e.preventDefault();

        localStorage.removeItem("loggedIn");

        window.location.href = "index.html";
    });


    // =========================
    // LOGIN
    // =========================
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        const user = $("#usuario").val().trim();
        const pass = $("#password").val().trim();

        const btn = $("#loginForm button");

        btn.prop("disabled", true);
        btn.html("⏳ Ingresando...");

        const validUser = "usuario@email.com";
        const validPass = "123456";

        setTimeout(() => {

            if (user === validUser && pass === validPass) {

                localStorage.setItem("loggedIn", "true");
                window.location.href = "menu.html";

            } else {

                $("#login-error").removeClass("d-none");

                btn.prop("disabled", false);
                btn.html("Ingresar");
            }

        }, 800);

    });


    // =========================
    // OCULTAR ERROR AL ESCRIBIR
    // =========================
    $("#usuario, #password").on("input", function () {
        $("#login-error").addClass("d-none");
    });

});