const shareButton = document.querySelector(".share-link")
const shareButtonClose = document.querySelector(".share")
const menuSocialMedia = document.querySelector(".social-media")

shareButton.addEventListener("click", function() {
    menuSocialMedia.classList.add('active')
})

shareButtonClose.addEventListener("click", function() {
    menuSocialMedia.classList.remove('active')
})