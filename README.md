# Breakdown Template for organizing your thoughts and sharing your video learnings 


### Links

- Zoom Recording URL: [Add solution URL here](https://your-solution-url.com)
- GitHub page URL:[Add GitHub page URL here](https://your-live-site-url.com)
- Deployed GitHub page URL: [Add deployed GitHub page URL here](https://your-live-site-url.com)

## [Poster Bois]
### 1. What parts were you in charge of?

'[Collin (GL)]'
- Subscription
- Testimonies
- Templates
- Canva for team
- Surprises
- Pop-up to make account (Footer)
- Pop-up to sign-up - JS
- Media-Query


'[Hisyam]'
- Nav Bar
- Header 
- Footer
- Feature
- Pop-up to sign up


### 2. Explain the feature you are most proud of. What techniques/methods you've used?

'[Collin]'
- I would say the Mobile & Tablet Navigation Bar or rather, Side Bar for the mobile & tablet view. I used everything that I've learned, HTML, CSS, JS. I even applied a similar solution that I used for another section (Surprise section), I just took it to the next step.

```HTML
<div #id="side-nav-bar" class="blur sub-display-none">
      <div class="sub-menu-blank"></div>
      <div class="sub-menu"></div>
    </div> 
```

```CSS

.blur{
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  max-height: 100vh
} /*Provides the blurry/translucent effect  */

.sub-menu {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  background-color: white;
  width: 75vw;
} /*Provides the layout of the side-bar  */
```
```JS

const basicSignup = document.querySelectorAll(".basic-signup")
const basicPopup = document.querySelector(".pop-up-section")
const close = document.getElementById("close-button")


// Will make the side-bar appear

basicSignup.forEach(btn => {
  btn.addEventListener("click", () => {
    disableScroll()
    console.log("button pressed")
    basicPopup.classList.toggle('popHidden')
    basicPopup.classList.toggle("popGrid")
    blur.classList.remove("sub-display-none")
  })
})

```


[Hisyam]:
- The navigation bar and pop-up submenu. Used a lot of divs and flexbox and also apply the hover effect on the correct div.

```HTML
    <div class="nav-list">
      <div class="nav-list-l">

        <div id="mobile-menu-button">
          <div class="menu-logo">
          </div>
        </div>
      </div>
    </div>
```

```CSS
.nav-list {

  width: 100%;
  overflow-x: hidden;
  margin: -1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 75px;
  position: sticky;
  left: 0%;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 3px #dddada;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.nav-list-l {
  display: flex;
  align-items: center;
  flex: 1 1 10%;
}

.nav-list-l li {
  margin-right: 20px;
}
```


### 3. Name one coding struggle and how you dealt with it
`(example)`

[Collin]
- For me it would be the infinite scrolling at the "Testimonies section". We had a meeting with our student mentor but unfortunately he was unable to help. I decided to dedicate my time searching for solution and learning. I manage to find a video of similar project. From there it was trial and error until I managed to get to solve it.

[Histam]
- The pop-up sub menu. The problem is there is a gap between the menu option and the pop-up submenu so the hover effect disappears whenever the cursor gets in the gap. so I used the button element as the menu options and create invisible divs around the button which cover the gap and I apply hover effect on the div instead so the effect stays on. 

### 4. Name one improvement you would like to work on.

[Collin]
-Definitely the template section. I couldn't figure out to do it cleanly for all media queries and due to other priorities, I've decided to leave it bare minimum as is. I'd wish to be able to make it "cleanly" responsive and have a proper JS code implemented.


[Hisyam]
- The positioning of pop-up sub menu. Used a lot of margin but I figured there must be a more efficient way to do that.
- 
# Useful resources 

- [Chat.gpt](http://chat.openai.com) - Helpful to guide and provide assistance to coding and debugging

- [Bito.ai](https://bito.ai) - VSCode Extension, an chat.gpt powered ai extension, helps to debug and assist on coding. Faster than opening a browser and using chat.gpt or similar ai

- [CSS Generator](https://cssgenerator.org/) - Helps to generate and provide css code according to our needs

- [Google](https://www.google.com) - Literally everything is searchable

- [Youtube](https://www.youtube.com) - Some specific tutorial and solution are only available on youtube

-[StackOverflow](https://stackoverflow.com) - Community space where developers discusses problems and share solutions to it. Chances are, similar issues has been answer here.

- [MDN Web Docs Mozilla](https://developer.mozilla.org/en-US/) - Provides documentation and guides for coding HTML, CSS & JSS. Cheatsheet to say

- [W3Schools](https://www.w3schools.com) - Similar to MDN Web Docs, but with example shown and tutorials provided
---

