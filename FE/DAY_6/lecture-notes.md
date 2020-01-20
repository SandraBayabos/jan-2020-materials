### DOM MANIPULATION

1. What is the DOM?

- Document Object Model (it's an object!)
- Different from just HTML which consists of html elements
- It's an object, which is why it's got a lot of DOM methods. That's why you'll see a lot of document.method(). It's just like an object, which is why you're using dot notation!

2. Types of Selectors & demo each one

- getElementById
- querySelector
- getElementsByClassName
- querySelectorAll
- getElementsByTagName

3. Types of DOM methods & some demos

- createElement

  => why would we use create element? What's the point? Why can't we just put it in our HTML?
  => Because let's say you're fetching information/data from elsewhere, maybe by an API call. You don't yet know what that data is coming in as. Text? An image?
  => You can't hardcode that information into your HTML yet. Just think of your Facebook homepage where you keep getting things on your feed? Is there a developer out there dedicated to each of you who is going to manually update your feed and say hey, for this user, we display these ads, or for this user, we display these posts from his/her friends.
  => So createElement() is extremely useful when you are dynamically rendering pages, i.e. you are retrieving information from elsewhere and need a way to display that onto your website and in specific formats

- appendChild() vs append()
  => Anything appendChild() can do, you can do with append() so might be easier to start using append() rather than appendChil() but don't worry if you see it in an example
- innerHTML
  => lets you set the content in HTML format
- innerText
  => only lets you set the content as plain text. It ignores any HTML content that you insert
- style
  => You can also style your page using DOM Manipulation. So for example, maybe in the beginning your button is active and it's one colour and after it's been clicked, it's inactive and it's now grey. Or you want to change a button after it's clicked and the person has logged in
- src
  => again, you may be wondering why don't I just put in the src in the file, but maybe I'm retrieving these images from elsewhere, so I'd need to first create an img and then provide the src
