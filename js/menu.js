(() => {
    const menuBtnRefs = document.querySelector("[data-menu-button]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        

     menuBtnRef.classList.toggle("is-open");
        menuBtnRef.getAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
});

}) ();