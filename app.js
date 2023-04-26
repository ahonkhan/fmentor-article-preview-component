let shareButton = document.querySelector('.share-btn')
let sharedLinkBtn = document.querySelector('.sharedLinkBtn')
let cardFooterMobile = document.querySelector('.active__card-footer')

shareButton.addEventListener("click", () => {
    if (cardFooterMobile.classList.contains('activate')) {
        cardFooterMobile.classList.remove("activate")

    } else {
        cardFooterMobile.classList.add("activate")

    }
})
sharedLinkBtn.addEventListener("click", () => {
    cardFooterMobile.classList.remove("activate")
})