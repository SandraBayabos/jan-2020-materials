---
marp: true
title: DATABASE & SCHEMAS
theme: gaia
paginat: true
__paginate: false
---

### Lecture 2 - Layouts and Positioning

- So far you've just been designing your web pages from top to bottom
- But you've seen websites with much more sophisticated layouts, which is why positioning your elements is so important when designing your web pages
- That's where layout and positioning comes in
- Today you will be expanding on your HTML and CSS knowledge from yesterday and start designing web pages that utilise positioning

---

### the Display Property

- Every HTML Element has a default `display` value
- The `display` values are `block` and `inline`
- **Block** elements start on a new line and are full-width by default (i.e. they take up 100% width) but their height and width can be adjusted (e.g. a <div>, <h1>-<h6>, <form> etc.). Literally, blocks one on top of another.
- **Inline** elements don't start on a new line and only take up as much width as they need (such as a <span> <a>. Since they don't take up full-width, I can put an inline element into a paragraph and the entire para will still be inline.

---

- **Inline-block** elements can sit side-by-side one another and can wrap i.e. if your screen is small they can wrap onto the next line because `display: inline-block` does not add a line-break after the element
- You might read online that an <img>'s default display property is inline, but really it behaves like inline-block because you can set the height and width properties to it.

---

### Positioning

- 4 types of positions:-
  - Static (default)
    - Every element is static by default;
  - Relative;
    - Takes up the space it was given;
    - Can be assigned top, right, left, bottom properties and other HTML elements won't take its place if it's moved about;

---

- Absolute;
  - Is "fixed" absolutely, to the nearest parent element that has `position: relative`
  - Otherwise, is fixed to the browser
  - Can be assigned top, right, left, bottom properties and other HTML elements WILL take up it's space
- Fixed
  - Is literally just fixed to the browser

---

- \*Bonus: Sticky
  - Toggles between relative and fixed and is positioned based on the user's scroll position
  - Can be assigned a top, right, left, bottom property (but is usually assigned a top value)

---

### Flex

- Flex is one of the most used and most useful display properties and really helps you set up and design a layout really quickly
- the `display:flex` is applied to the PARENT or to the CONTAINER div that contains all the child elements you want to arrange
- and with `display:flex` comes a whole range of flexbox properties that you can use and here are some examples
