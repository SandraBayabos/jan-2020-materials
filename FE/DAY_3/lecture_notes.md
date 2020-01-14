# Responsive Design | Media Queries & Bootstrap

### What is responsive design?
  - Mobile First approach to website design & development
  - More than 50% of website users are actually viewing the webpages on their mobile device
  - Build the mobile version first and bigger versions after

### What can be done for mobile responsiveness?
  - Viewport meta tag to help with the initial sizing of the webpage based on the device width
  - Using `rem`, `em`, `%` and `vh` or `vw` over the traditional `px` value
  - Create media queries to help with size, color & display of items, depending on the window size

### Media Queries
  - Media queries will allow changes to be made to CSS depending on the size of the screen

```css

body {
  background-color: blue;
}

@media (min-width: 800px){
  body {
    background-color: yellow;
  }
}

@media (min-width: 600px){
  body {
    background-color: green;
  }
}

```

- You can use either `max-width` or `min-width` conditions, its best to choose what suits the situation, no right or wrong choice
- The order matter, as CSS reads top to bottom, media queries MUST come after the default value or they will be overwritten

## Bootstrap

### What is Bootstrap?
  - CSS Library/Framework developed by ex employees of twitter, initially an internal project for Twitter, later released to the public to use
  - Mobile responsive design sense that allows beautiful components on mobile and desktop
  - CSS files made up of classes to give access to styling very quickly
  - Documentation allows for simple copy and paste into HTML to create components, utilities or layout features
  - Also bundled with jQuery, a JavaScript library to help with UI interactions

### How to use?
  - Download the files and manually import them in (Cumbersome and you get way more than you need)
  - CDN Network, clever system whereby files are hosted on multiple servers around the world and it will find you the nearest and return the files (Simplest to implement, Downfall is that if the servers are down then nothing is available - This rarely ever happens but did happen last year once)

#### Grid
  - One of the most important and helpful aspects of Bootstrap is the Grid. It makes mobile responsive layouts a breeze
  - Built up with Rows, Columns and Containers

#### Flex
  - Built on the CSS flexbox, it allows easy integration of the flexbox model in your website

#### Utilities
  - Color
  - Borders
  - Shadows
  - Sizing

#### Components
  - Image carousels
  - Navbars
  - Buttons
  - Jumbotrons
  - Modals
  - Forms
