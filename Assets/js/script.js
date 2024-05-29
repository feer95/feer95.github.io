// =================== SHOW SIDEBAR ==================
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
// ====== SIDEBAR SHOW ==========
// Validate If Constant Exist
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

// ====== SIDEBAR HIDDEN ======
// Validate If Constant Exist
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}
 
// =================== SKILLS TABS ==================
const tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.target)

                tabContent.forEach(tabContents => {
                    tabContents.classList.remove("skills__active")
                })

                target.classList.add("skills__active")

                tabs.forEach(tab => {
                    tab.classList.remove("skills__active")
            })

            tab.classList.add("skills__active")
        })
})

// =================== MIXITUP FILTER PORTFOLIO ==================
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
      target: '.work__card', // Selector para los elementos individuales
       
    },
    animation: {
      duration: 1000
    }
  });

// ==== Link Active Work ====
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

// ======== Work Popup ===========
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        tooglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function tooglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", tooglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
   document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
   document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
   document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
   console.log(portfolioItem);

}

// =================== SERVICES MODAL ==================
const modalViews = document.querySelectorAll('.services__modal'),
        modelBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// ================== INPUT ANIMATION ===================
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    } 
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

// ======== CHANGE SIDEBAR SECTION ===========
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() 
{
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
            navClose.click();
        }
        else 
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

// ======== CHANGE PALETTE ===========


// ============ Home Animation
var i = 0;
		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 150;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		}
typeWriter();

