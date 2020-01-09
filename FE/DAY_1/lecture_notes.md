### Lecture 1 - Intro to FE Development & HTML

- What is Frontend Web Development?
  - The "What you see" of the web

- How do websites work?
  - File are hosted online
  - Requests are made when a user visits the web address
  - In return the HTML, CSS and JS files are returned to the client browser and the browser will display them

- What will you learn during the Frontend?
  - Learn how to write and structure HTML webpages using HTML Tags and Semantics
  - Learn how to style HTML webpages using CSS
  - Learn how to add interactivity and manipulate the DOM using JavaScript

##### HTML Document Structure & Tags

- HTML Document Structure

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

- The basic tags
  - Heading Tags h1-h6
  - Paragraph Tags
  - Anchor Tags - Hyperlinks
  - Image Tags
  - Div Tag
  - Span Tag
  - Ordered / Unordered Lists - ul, ol, li
  - Tables
  - Videos
  - Audio
  - Block, Inline, Inline Block

- Semantic Tags
  - Main
  - Article
  - Section
  - Nav
  - Header
  - Footer
  - Aside

- Importance of Semantics
  - Screen readers
  - Accessibility
  - SEO Ranking & Optimization

### Lecture 2 - Styling with CSS

- Where to put styling?
  - Inline styling - Least Preffered [Messy, Becomes Unmaintainable Fast]
  - In the head - Avoid unless absolutely necessary [Clutters HTML, Makes readbility of HTML document difficult]
  - Link through stylesheet - Preferred Methods [Seperates HTML & CSS into more manageable files, Does mean switching between documents when developing]

- Selectors
  - ID
  - Class
  - Tag
  - ::Pseudo-selectors

- Specificity Rules
  - Inline >> ID >> Class >> Tag


