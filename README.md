# Demo-website
Multi page demo website. Each link in nav-bar takes the user directly to the html page associated with that link. 

## Description: 
- Working demo storefront website. Allows users to view different products across different sections of the site with navigation built in across the header of the page. Users can also add items to cart, change the number of items in their cart aswell as remove them from the cart.

## Features:
- Each page of the website Contains unique elements to simulate a real live website.
- When users click on the cart icon, it takes them to the checkout page which contains a list of their added items, the quantity of them and allows them to change the quantity of each.
- All buttons and links are animated to scale up increasing the interactivity of the site, whilst also letting users know which areas of the website are able to be interacted with.
- The colour scheme of the site is minimal which helps it to kep a clean aesthetic and not look over crowded.
- There is a button located at the bottom of the page caled "How can we help" which links the user to the contact page. Once the user has filled out the contact form and pressed submit, a message is displayed that tells them that their feedback ahs been recieved. This does not actually submit anything as there is no linking to a backend server.
- If users do not satisfy the required parameters of the contact form, they are directed to fill out that section. For example, if they do not provide a name they are prompted to do so, and if their Email format is incorrect they are prompted to check it again and change it. There is also a maximum character limit for the feedback section at the bottom of the section.
- CSS styling for buttons is consistent across all pages, using the same colours, and animation and colour changes when hovered on by the user.

## How it works:
- Each HTML page follows a similar structure containing the title of the website, the nav-bar for site navigation and the list of products. CSS styling remains consistent so that each page's layout is the same.
- The font family is preloaded when the site is opened. Code at the top of each HTML page allows for this. This makes the text load much faster as it is not waiting for any other processes to finish. 
   ### Contact form logic:
- When the form is submitted, each field is validated so that the first and last name are not empty, the Email is present and matches corrrect email syntax and ensures that the message is under 400 characters.
- Each field is populated with a placeholder value that guides the user what is needed for each section.
- If this validation fails, the defined error message is thrown and the user's attention is directed to the associated field.
- If the validation process passes, the user is displayed a success message, which passes after 5 seconds and the form resents to it's default value.
- The cart function working requires each product on each page to have a unique data-id, so that it can be tracked in the javascript and logic applied correctly.

  ### Shopping cart logic:
- cart.js provides a dynamic and persistent shopping cart system that tracks across each page of the site. The contents of the shopping cart stays the same if the browser is refreshed.
- When an items is added to the cart, the script tracks it and updates the badge icon attached to the cart image on the top right of the screen. The number also changes when items are removed from the cart.
- Within the cart.html file, two more buttons add further interactivity. One gives users the option to finish shoping and checkout, which for now does not function apart from the animation and colour change. The other button (continue shopping) loads the index.html file which acts as the home page of the site.
- If the checkout button is clicked when there is nothing inside of it, an error message is thrown prompting the user to add something to the cart before they can continue.

##File structure: 
- index.html
- bestsellers.html
- new.html
- sale.html
- shop.html
- contact.html
- cart.html
- script.js
- cart.js
- images/
- banner.jpg
- cream.jpg
- facemask.jpg
- product1.jpg
- product2.jpg
- serum.png
- shopping.png

## Future update potential: 
- Create pricing for each product, that also tracks into the shopping cart.
- Add a cart total within the cart, next to the checkout button, that changes dynamically as items are added/ removed.
- Add animations for when the user navigates between pages.

## Site demo: 

### Built by Tom using my own knowledge, aswell as external resources and tutorials. 
  
