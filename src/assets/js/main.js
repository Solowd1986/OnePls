




/*  Mobile Menu Control
================================
*/

let mobileMenuBtn = document.querySelector(".mobile-menu__icon");


let headerBlock = document.querySelector(".header");

let mobileMenuWrapper = document.querySelector(".header__mobile-menu-wrapper");



let word = document.querySelector(".tst");





window.addEventListener("resize", function () {
    if (window.innerWidth > 915) {
        mobileMenuBtn.classList.remove("mobile-menu__icon--active");
        mobileMenuWrapper.classList.remove("header__mobile-menu-wrapper--active");
        headerBlock.style.marginBottom = "0";
    }
});

mobileMenuBtn.addEventListener("click", function () {
    let mobileMenuSize = mobileMenuWrapper.offsetHeight;

    this.classList.toggle("mobile-menu__icon--active");

    if (this.classList.contains("mobile-menu__icon--active")) {



        headerBlock.style.marginBottom = mobileMenuSize + "px";
        mobileMenuWrapper.classList.add("header__mobile-menu-wrapper--active");

    } else {
        headerBlock.style.marginBottom = "0";
        mobileMenuWrapper.classList.remove("header__mobile-menu-wrapper--active");
    }
});
/*=============================*/


/*  Basket
================================
*/

let modalDialog = document.querySelector(".modal-dialog");
let modalBasket = document.querySelector(".modal-basket");
let modalBasketBtn = document.querySelector(".header__cart");
let modalCloseBtn = document.querySelector(".modal-close");
let body = document.querySelector("body");

modalBasketBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalDialog.classList.add("modal-basket-show");
    body.classList.add("stop-body-scroll")
});


modalDialog.addEventListener("click", function () {
    this.classList.remove("modal-basket-show");
    body.classList.remove("stop-body-scroll")

});


modalBasket.addEventListener("click", function (e) {
    e.stopPropagation();
});

modalCloseBtn.addEventListener("click", function (e) {
    modalDialog.classList.remove("modal-basket-show");
    body.classList.remove("stop-body-scroll")
});

/*=============================*/



/*  Accordeon
================================
*/
(function () {


    let accTitle = document.querySelector(".acc-start");
    
    let accTitleList = document.querySelectorAll(".acc-start");

    let item = document.querySelector(".acc-item");

    
    let accContent = document.querySelector(".acc-cont");
    
    
    
    console.log(item);
    
    item.hidden;
    
    


    


    // accTitle.addEventListener("click", function (e) {
    //
    //     let h = accContent.offsetHeight;
    //
    //     if (this.matches("hide-acc")) {
    //         accContent.classList.remove("hide-acc");
    //         this.height = h;
    //     } else {
    //         accContent.classList.add("hide-acc");
    //     }
    //
    // });






})();
/*=============================*/


/*  Owl Carousel
================================
*/
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad:true,

        loop:false,
        autoplay:false,

        autoplayTimeout:2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        dotsEach: true
    });
});
/*=============================*/