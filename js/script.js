// All the elements
var header = document.querySelector("#header")

// Section 1
var portraitSmall = document.querySelector(".portrait-s")
var portraitLarge = document.querySelector(".portrait-l")
var s1Text = document.querySelector(".section-1 .text-block")

// Section 2
var s2Thumbnail = document.querySelector(".section-2 .thumbnail")
var s2ImageBlock = document.querySelector(".section-2 .image-block")
var s2Text = document.querySelector(".section-2 .text-block")

// Section 3
var sectionProfile = document.querySelector(".profile")
var s3ProfileCaption = document.querySelector(".section-3 .profile .caption")
var profileLarge = document.querySelector(".profile-l")
var profileSmall = document.querySelector(".profile-s")
var sectionSeason = document.querySelector(".season")
var s3SeasonCaption = document.querySelector(".section-3 .season .caption")
var seasonLarge = document.querySelector(".season-l")
var seasonSmall = document.querySelector(".season-s")
var sectionAwards = document.querySelector(".awards")
var s3AwardsCaption = document.querySelector(".section-3 .awards .caption")
var awardsLarge = document.querySelector(".awards-l")
var awardsSmall = document.querySelector(".awards-s")

// Shoes
var shoes1 = document.querySelector(".grid-shoes img:nth-of-type(1)")
var shoes2 = document.querySelector(".grid-shoes img:nth-of-type(2)")
var shoes3 = document.querySelector(".grid-shoes img:nth-of-type(3)")
var shoes4 = document.querySelector(".grid-shoes img:nth-of-type(4)")

// Gallery
var gallery = document.querySelector(".gallery")
var gallery1 = document.querySelector(".gallery-1")
var gallery2 = document.querySelector(".gallery-2")
var gallery3 = document.querySelector(".gallery-3")
var galleryText1 = document.querySelector(".gallery ul:nth-of-type(1)")
var galleryText2 = document.querySelector(".gallery ul:nth-of-type(2)")

// Footer
var footer = document.querySelector("footer")
var credits = document.getElementsByClassName("credits")

console.log(credits)

// Fade effects
var content = [portraitSmall, portraitLarge, s1Text,
				s2Thumbnail, s2ImageBlock, s2Text,
				s3ProfileCaption, profileLarge, profileSmall, s3SeasonCaption, seasonLarge, seasonSmall, s3AwardsCaption, awardsLarge, awardsSmall,
				shoes1, shoes2, shoes3, shoes4,
				gallery1, gallery2, gallery3, galleryText1, galleryText2,
				footer, credits[0], credits[1], credits[2]]

var isScrolling = false

window.addEventListener("scroll", throttleScroll, false)

function setSize() {
	return window.innerWidth
}

function isWithinWindowSize(width, limit) {
	if (width < limit) {
		return false
	}
	return true
}

function throttleScroll(e) {
	if (isScrolling == false) {
		requestAnimationFrame(function() {
			scrolling(e);
			isScrolling = false
		})
	}
	isScrolling = true
}

document.addEventListener("DOMContentLoaded", scrolling, false)

var portraitSmall = document.querySelector(".portrait-s")
var portraitLarge = document.querySelector(".portrait-l")

function scrolling(e) {
	for (i = 0; i < content.length; i++) {
		if (isPartiallyVisible(content[i])) {
			content[i].classList.add("active")
		}
	}
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
 
function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

// Parallax effect

document.addEventListener("DOMContentLoaded", scrollLoop, false)
document.addEventListener("resize", setSize, false)


var xScrollPosition;
var yScrollPosition;

function scrollLoop(e) {
	if (isWithinWindowSize(setSize(), 1000)) {

		xScrollPosition = window.scrollX
		yScrollPosition = window.scrollY

		// Move all the elements

		setTranslate(0, yScrollPosition * -.2, header)
		// Section 1
		setTranslate(0, yScrollPosition * -.5, portraitSmall)
		setTranslate(0, yScrollPosition * .1, portraitLarge)
		setTranslate(0, yScrollPosition * -.05, s1Text)

		// Section 2
		setTranslate(0, yScrollPosition * -.15, s2Thumbnail)
		setTranslate(0, yScrollPosition * .02, s2ImageBlock)
		if (isPartiallyVisible(s2Text)) { setTranslate(0, yScrollPosition * -.01, s2Text) }

		// Section 3
		if (isPartiallyVisible(sectionProfile)) {
			setTranslate(0, yScrollPosition * -.01, s3ProfileCaption)
			setTranslate(0, yScrollPosition * .025, profileLarge)
			setTranslate(0, yScrollPosition * -0.075, profileSmall)
		}
		if (isPartiallyVisible(sectionSeason)) {
			setTranslate(0, yScrollPosition * -.01, s3SeasonCaption)
			setTranslate(0, yScrollPosition * 0.03, seasonLarge)
			setTranslate(0, yScrollPosition * -0.02, seasonSmall)
		}
		if (isPartiallyVisible(sectionAwards)) {
			setTranslate(0, yScrollPosition * -.01, s3AwardsCaption)
			setTranslate(0, yScrollPosition * 0.01, awardsLarge)
			setTranslate(0, yScrollPosition * -0.02, awardsSmall)	
		}
		
		// Gallery
		if (isPartiallyVisible(gallery)) {
			setTranslate(0, yScrollPosition * .008, gallery1)
			setTranslate(0, yScrollPosition * -.02, gallery2)
			setTranslate(0, yScrollPosition * -.005, gallery3)
			setTranslate(0, yScrollPosition * .001, galleryText1)
			setTranslate(0, yScrollPosition * .003, galleryText2)
		}

		

	}
		requestAnimationFrame(scrollLoop)
}

function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}