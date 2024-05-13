// Navigation
const dropdownItems = document.querySelectorAll('.dropdown__hover')

if(window.innerWidth < 1000) {
    const menuIcon = document.querySelector('.menu')
    const navbar = document.querySelector('.navbar')
    
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change')

        if(!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav__dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.show__dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown__heading__link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else {
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            document.querySelector('.navbar__wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.navbar__wrapper').style.background = 'none'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
        })
    })
}

window.addEventListener('resize', () => {
    window.location.reload()
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