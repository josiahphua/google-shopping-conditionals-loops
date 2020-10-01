# Google Shopping - Conditionals and Loops

We'll be using a file represented as **JSON** for this assignment. JSON is a standard for formatting data, and it's a common format you'll see throughout your web development career. Even more important will be parsing JSON.

This large object is in the products js file. It is the kind of object you would really recieve from google shopping.


## Getting Started

1. Fork and clone this repository
2. Open the `script.js` file. Your solution should be entered in this file.
3. Make sure the `products.js` file is in that directory.

### Hint
It's very important to understand the structure of the `products` object.
Use the console to look at this object. 

Run the code that can access certain parts of the object and see what values, if any, you get out.

Example `cats[1].allergies[6]` - if you don't see anything back up (go to a higher level in the object) i.e. `cats[1].allergies`

## Deliverables

Note that you may want to comment out your solutions as you solve them, to avoid a mess of output in the console.

- Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

- Print the `title` of all items with a `backorder` availability in `inventories`.

- Print the `title` of all items with more than one image link.

- Print all "Canon" products in the items (careful with case sensitivity).

- Print all `items` that have an author name of "eBay" and are brand "Canon".

- Print all the products with their **brand**, **price**, and an **image link**

## Optional Furthers

### Further:
Create a function that takes in the product brand and print only those products.

Modify the function to allow filter of only new or used items.

### Further:

Create a function that can be used for searching products by new/used or brand - (new/used for condition *or* brand name for brand)

### Further:
Print out some special error text (e.g. "Sorry, nothing found") if there were no results.

## Hints
* Use an online json viewer to easily navigate through the json object eg. http://jsonviewer.stack.hu/

* it allows you to "fold" your code to see the format of it.

* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #5
* Documentation
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

---
