window.addEventListener("scroll", function () {
    let header = this.document.querySelector(".news");
    header.classList.toggle("sticky", window.scrollY > 100)
})