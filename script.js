// Surprise Content scrolling 
const container = document.querySelector("#carousel")

let prevButton = document.getElementById('previous-btn');
let nextButton = document.getElementById('next-btn');


document.addEventListener('DOMContentLoaded', function() {

  prevButton.addEventListener('click', function() {

    container.scrollLeft -= 1355
    console.log('Previous button clicked');
  });

  nextButton.addEventListener('click', function() {
    container.scrollLeft += 1350
    console.log('Next button clicked');
  }
  )
  toggleButtonVisibility()
});

container.addEventListener('scroll', function() {
  toggleButtonVisibility();
});

function toggleButtonVisibility() {
  if (container.scrollLeft === 0) {
    prevButton.style.display = "none"
  } else {
    prevButton.style.display = "block";
  }

  if (container.scrollLeft === container.scrollWidth - container.clientWidth) {
    nextButton.style.display = "none"
  } else {
    nextButton.style.display = "block";
  }
}

// Pop-up for Basic Sign up
const basicSignup = document.querySelectorAll(".basic-signup")
const basicPopup = document.querySelector(".pop-up-section")
const close = document.getElementById("close-button")



basicSignup.forEach(btn => {
  btn.addEventListener("click", () => {
    disableScroll()
    console.log("button pressed")
    basicPopup.classList.toggle('popHidden')
    basicPopup.classList.toggle("popGrid")
    blur.classList.remove("sub-display-none")
  })
})

close.addEventListener("click", () => {
  console.log("close button pressed");
  basicPopup.classList.toggle('popHidden')
  basicPopup.classList.toggle("popGrid")
  enableScroll()
})



// Disable scrolling for pop-up

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function() { };
}

// Footer drop-list

const footerList = document.querySelectorAll(".footer-item")
const footerListItem = document.querySelectorAll(".footer-item-link")
const toggleBtn = document.querySelectorAll(".footer-button")


for (i = 0; i < footerList.length; i++) {

  let j = i;

  footerList[i].addEventListener("click", () => {
    console.log("footer pressed")

    const currentDisplayStyle = window.getComputedStyle(footerListItem[j]).display;

    if (currentDisplayStyle === 'block') {
      footerListItem[j].style.display = 'none';
      toggleBtn[j].classList.toggle('rotated')
    } else {
      footerListItem[j].style.display = 'block';
      toggleBtn[j].classList.toggle('rotated')
    }
  })
}

// Mobile Nav Bar

const subMenu = document.querySelectorAll(".sub-menu-item")
const subMenuOption = document.querySelectorAll(".sub-menu-option")
const sideBar = document.querySelector(".sub-menu-container")
const sideBarCloseBtn = document.querySelectorAll(".sub-menu-button-container")
const sideBarBtn = document.getElementById("mobile-menu-button")
const blur = document.querySelector(".blur")
const sideBarBlank = document.querySelector(".sub-menu-blank")
const sideBarMain = document.querySelector("#side-bar-main-menu")

sideBarBtn.addEventListener("click", () => {
  blur.classList.toggle("sub-display-none")
})

sideBarBlank.addEventListener("click", () => {
  blur.classList.toggle("sub-display-none")
})

// Mobile touch-exit event
sideBarBtn.addEventListener("touchstart", () => {
  blur.classList.toggle("sub-display-none")
})

sideBarBlank.addEventListener("touchstart", () => {
  blur.classList.toggle("sub-display-none")
})

// Sub Menu Logic
for (let i = 0; i < subMenu.length; i++) {
  let j = i;
  subMenu[i].addEventListener("click", () => {
    console.log("button pressed")
    subMenuOption[j].classList.toggle("sub-display-none")
    subMenuOption[j].classList.toggle("sub-menu-item-container")
    sideBar.scrollTo({ left: 500, behavior: "smooth" })
    setTimeout(() => {
      if (subMenuOption[j]) {
        sideBarMain.classList.toggle("over-flow-x-hidden");
        sideBarMain.classList.toggle("sub-menu-item-container");
      }
    }, 300);
  })
}

for (i = 0; i < sideBarCloseBtn.length; i++) {
  let j = i;
  sideBarCloseBtn[i].addEventListener("click", () => {
    console.log("back button pressed")
    sideBarMain.classList.toggle("over-flow-x-hidden");
    sideBarMain.classList.toggle("sub-menu-item-container");
    setTimeout(() => {
      sideBar.scrollLeft -= 500
    }, 300);


    if (subMenuOption[j]) {
      subMenuOption[j].classList.toggle("sub-display-none");
      subMenuOption[j].classList.toggle("sub-menu-item-container");
    }
  })
}
