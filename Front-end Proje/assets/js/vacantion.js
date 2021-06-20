window.addEventListener("scroll", function () {
    let header = this.document.querySelector(".vacantion-header");
    header.classList.toggle("sticky", window.scrollY > 100)
})