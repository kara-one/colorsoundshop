const addDescriptionButton = function () {
    const productDescription = document.querySelector(
        ".main-product__description-content"
    );
    const productDescriptionHeight = productDescription.clientHeight;
    if (productDescriptionHeight > 200) {
        productDescription.style.maxHeight = "200px";
        productDescription.classList.add(
            "main-product__description-content_state_collapsed"
        );

        const button = productDescription.nextElementSibling;
        button.classList.remove("button_type_link_disabled");

        button.addEventListener("click", function () {
            productDescription.style.maxHeight = "500vh";
            productDescription.classList.remove(
                "main-product__description-content_state_collapsed"
            );
            button.classList.add("button_type_link_disabled");
        });
    }
};

window.addEventListener("load", addDescriptionButton);
window.addEventListener("resize", addDescriptionButton);
