// Navigation
const dropdownItems = document.querySelectorAll('.dropdown__hover')


    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            document.querySelector('.navbar__wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.navbar__wrapper').style.background = 'none'
        })
    })

// End of Navigation


// Pages
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.front__page').style.display = 'block'
        document.querySelector('.login__page').style.display = 'none'
        document.querySelector('.signup__page').style.display = 'none'
    })
})

document.querySelectorAll('.login').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.front__page').style.display = 'none'
        document.querySelector('.login__page').style.display = 'block'
        document.querySelector('.signup__page').style.display = 'none'
    })
})

document.querySelectorAll('.signup').forEach(signupBtn => {
    signupBtn.addEventListener('click', () => {
        document.querySelector('.front__page').style.display = 'none'
        document.querySelector('.login__page').style.display = 'none'
        document.querySelector('.signup__page').style.display = 'flex'
    })
})
// End of Pages