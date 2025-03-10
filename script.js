AOS.init();
document.addEventListener("DOMContentLoaded", function () {
    var aboutLink = document.querySelector('a[href="#about-section"]');
    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            var targetSection = document.getElementById("about-section");
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
    else{
        var contactLink = document.querySelector('a[href="#contact-section"]');
        if (contactLink) {
            aboutLink.addEventListener("click", function (event) {
                event.preventDefault();
                var targetSection = document.getElementById("#contact-section");
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        }
    }
});
