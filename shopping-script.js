/* ========================================
   SELECT ELEMENTS
======================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mainNav =
    document.getElementById("mainNav");

const bagCount =
    document.getElementById("bagCount");

const toast =
    document.getElementById("toast");


/* Shopping cart number */

let cart = 0;



/* ========================================
   MOBILE MENU
======================================== */

menuBtn?.addEventListener("click", () => {

    mainNav.classList.toggle("open");


    if (
        mainNav.classList.contains("open")
    ) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});



/* ========================================
   ADD TO BAG
======================================== */

document
    .querySelectorAll(".add")
    .forEach(button => {

        button.addEventListener("click", () => {

            cart++;

            bagCount.textContent = cart;

            showToast(
                "Item added to your bag"
            );

        }) 

    });



/* ========================================
   WISHLIST HEART
======================================== */

document
    .querySelectorAll(".heart")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (
                    button.textContent === "♥"
                ) {

                    button.textContent = "♡";

                } else {

                    button.textContent = "♥";

                }

            }
        );

    });



/* ========================================
   SEARCH
======================================== */

document
    .getElementById("searchBtn")
    ?.addEventListener(
        "click",
        () => {

            const query =
                prompt(
                    "What are you looking for?"
                );


            if (query) {

                showToast(
                    `Searching for "${query}"`
                );

            }

        }
    );



/* ========================================
   LOOKBOOK
======================================== */

document
    .getElementById("lookbookBtn")
    ?.addEventListener(
        "click",
        () => {

            showToast(
                "Lookbook preview coming soon"
            );

        }
    );



/* ========================================
   TOAST FUNCTION
======================================== */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}



/* ========================================
   NEWSLETTER
======================================== */

[
    "newsletterForm",
    "footerForm"

].forEach(id => {


    document
        .getElementById(id)
        ?.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                showToast(
                    "Thank you! You're on the style list."
                );


                event.target.reset();

            }
        );

});



/* ========================================
   CLOSE MOBILE MENU
======================================== */

document
    .querySelectorAll(".main-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

                menuBtn.textContent = "☰";

            }
        );

    });

