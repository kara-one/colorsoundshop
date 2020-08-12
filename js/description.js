window.onload = function () {
    const productDescription = document.querySelector(
        ".main-product__description-content"
    );
    const productDescriptionHeight = productDescription.clientHeight;
    if (productDescriptionHeight > 200) {
        productDescription.classList.add(
            "main-product__description-content_state_collapsed"
        );

        const button = productDescription.nextElementSibling;
        button.classList.remove("button_type_link_disabled");

        button.addEventListener("click", function () {
            productDescription.style.maxHeight = productDescriptionHeight+"px";
            productDescription.classList.remove(
                "main-product__description-content_state_collapsed"
            );
            button.classList.add("button_type_link_disabled");
        });
    }
};
