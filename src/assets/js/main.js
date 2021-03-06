

/*  Главное меню (мобильная версия)
================================
*/

let mobileMenuBtn = document.querySelector(".mobile-menu__icon");


let headerBlock = document.querySelector(".header");

let mobileMenuWrapper = document.querySelector(".header__mobile-menu-wrapper");


let word = document.querySelector(".tst");


function getRandom() {
    return  new Promise(resolve => {
        setTimeout(() => {
            resolve("data");
        }, 4000)
    })
}


async function getData() {
    let res = await getRandom();
    console.log(res);
    return res;
}

getData().then(r => console.log(r));



import createModalOverlay from "./modules/aside-project/createModal.js";

createModalOverlay(
    ".promo-list__btn",
    ".cart",
    "aside-overlay",
    "close-modal",
    "hide-modal",
    "aside-overlay-body",
);



window.addEventListener("resize", function () {
    if (window.innerWidth > 915) {
        mobileMenuBtn.classList.remove("mobile-menu__icon--active");
        mobileMenuWrapper.classList.remove("header__mobile-menu-wrapper--active");
        headerBlock.style.marginBottom = "0";
    }
});



// document.addEventListener("click", function (evt) {
//     const cart = document.querySelector(".cart");
//     if (evt.target.classList.contains("btn")) {
//
//         const divOverlay = document.createElement("div");
//         divOverlay.classList.add("aside-overlay");
//         divOverlay.appendChild(cart);
//         document.body.appendChild(divOverlay);
//         document.body.classList.add("aside-overlay-body");
//         cart.style.display = "block";
//     }
// }, true);



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


/*  Корзина заказов
================================
*/

let modalDialog = document.querySelector(".modal-dialog");
let modalBasket = document.querySelector(".modal-basket");
let modalBasketBtn = document.querySelector(".header__cart");
let modalCloseBtn = document.querySelector(".modal-close");
let body = document.querySelector("body");


modalBasketBtn.addEventListener("click", function (e) {
    e.preventDefault();
    event.returnValue = false; // IE11
    modalDialog.classList.add("modal-basket-show");
    body.classList.add("stop-body-scroll");
    return false;
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


let conformOrderBtn = document.querySelector(".btn-basket-order");
let confirmModal = document.querySelector(".modal-confirm");

let orderImgLoad = document.createElement("img");
orderImgLoad.classList.add("img-loading");
orderImgLoad.src = "/src/assets/img/other/img-loading3.gif";

conformOrderBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".modal-basket").hidden = true;
    document.querySelector('.modal-dialog').appendChild(orderImgLoad);
    setTimeout(() => {
        orderImgLoad.hidden = true;
        confirmModal.style.display = 'flex';
    }, 1000);
});


/*  Табы для отдельного товара
================================
*/


(function () {

    document.querySelectorAll(".tab").forEach((item, value) => {
        if (value !== 0) item.hidden = true;
    });


    document.querySelectorAll(".product-info__nav-link").forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelectorAll(".product-info__nav-link").forEach(item => {
                if (item.matches(".product-info__nav-link--active")) {
                    item.classList.remove("product-info__nav-link--active");
                }
            });

            document.querySelectorAll(".tab").forEach((item) => {
                item.hidden = true;
            });

            this.classList.add("product-info__nav-link--active");
            document.querySelector(this.dataset.id).hidden = false;
            console.log(this.dataset);

        });
    });

})();


/*  Accordeon
================================
*/
(function () {


    let accTitle = document.querySelector(".acc-start");

    let accTitleList = document.querySelectorAll(".acc-start");

    let item = document.querySelector(".acc-item");


    let accContent = document.querySelector(".acc-cont");



})();
/*=============================*/

(function () {

    // console.log($(".block-c").each( function (i,b) {
    //     b.val();
    // }));


    console.log($(".block-c").removeAttr("class"));

    // $('.block-c').each( function () {
    //     $(this).addClass('big');
    // })

    // $(".block-c").each((index, item) => {
    //     $(item).on("click", function () {
    //         $(this).hide(2000);
    //     })
    // })
    
})();


(function () {



    

    
    
    
    
})();


/*  Owl Carousel
================================
*/
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,

        loop: false,
        autoplay: false,

        autoplayTimeout: 2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        dotsEach: true
    });
});
/*=============================*/