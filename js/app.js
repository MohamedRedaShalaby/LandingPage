// define Sections
const sectionList = document.getElementsByTagName("section");

// build the nav
const myNav = document.querySelector(
  ".page__header .navbar__menu #navbar__list"
);

// Create loop to add sections to nav
for (i = 0; i <= sectionList.length - 1; i++) {
  const sectionLi = document.createElement("li");
  const myAnchor = document.createElement("a");
  myAnchor.setAttribute(
    "href",
    "#" /*+ sectionList.item(i).getAttribute("id")*/
  );
  myAnchor.textContent = sectionList.item(i).getAttribute("data-nav");
  sectionLi.appendChild(myAnchor);
  myNav.appendChild(sectionLi);
}

// define sections that will active on click
const mySection = document.getElementsByTagName("section");
// define the icons in nav
const liTag = document.querySelectorAll("#navbar__list li");
// make a loop to add event in sections
liTag.forEach((el) => {
  el.addEventListener("click", function (event) {
    // stop the default behavior in this event
    event.preventDefault();
    // add active class on clicked section
    for (i = 0; i <= mySection.length - 1; i++) {
      if (
        sectionList.item(i).getAttribute("data-nav") ===
        event.currentTarget.textContent
      ) {
        // add active to section and to li , an anchor for the selction link and section.
        liTag.item(i).classList.add("active");
        liTag.item(i).firstElementChild.classList.add("active");
        mySection.item(i).classList.add("active");
      } else {
        // remove active from section and from li ,an anchor and section from other items not selection.
        liTag.item(i).classList.remove("active");
        liTag.item(i).firstElementChild.classList.remove("active");
        mySection.item(i).classList.remove("active");
      }
      //scroll to section by behavior smooth
      if (sectionList.item(i).classList.contains("active")) {
        sectionList.item(i).scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});

// make scroll event
window.addEventListener("scroll", function () {
  for (i = 0; i < mySection.length; i++) {
    if (
      Math.ceil(mySection[i].getBoundingClientRect().top) >= 0 &&
      Math.ceil(mySection[i].getBoundingClientRect().bottom < 1000)
    ) {
      mySection[i].classList.add("active");
    } else {
      mySection[i].classList.remove("active");
    }
  }
});

// define up Icon
let upIcon = document.querySelector("main .up");
// appear icon when scroll down
let myScroll = document.addEventListener("scroll", function (e) {
  if (window.scrollY >= "470") {
    upIcon.style.opacity = "100";
  } else {
    upIcon.style.opacity = "0";
  }
});
// scroll up
let scrollUp = upIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
