# Google Shopping - Conditionals and Loops

We'll be using a file represented as **JSON** for this assignment. JSON is a standard for formatting data, and it's a common format you'll see throughout your web development career. Even more important will be parsing JSON.

This large object is in the products js file. It is the kind of object you would really recieve from google shopping.


## Getting Started
Open the `script.js` file and enter your solution in this file.

Make sure the `products.js` file is in the same directory.


### Hint
It's very important to understand the structure of the `products` object.
Use the console to look at this object. 

Paste in the code that can access certain parts of the object and see what values, if any, you get out.

Example `cats[1].allergies[6]` - if you don't see anything back up- try the thing above: `cats[1].allergies`

## Deliverables

Use the product search result in your file to find the following results.

Note that you may want to comment out your solutions as you solve them, to avoid a mess of output in the console.

- Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

- Print the `title` of all items with a `backorder` availability in `inventories`.

- Print the `title` of all items with more than one image link.

- Print all "Canon" products in the items (careful with case sensitivity).

- Print all `items` that have an author name of "eBay" and are brand "Canon".

- Print all the products with their **brand**, **price**, and an **image link**

### Further:
Prompt the user for the product brand and print only those products.

Prompt the user if they want to see only new or used items.

### Further:
Prompt the user what kind of search they want to do- search by brand or search by condition.

Then prompt the user to put in ther actual search value- (new/used for condition *or* brand name for brand)

### Further:
Print out some special error text (e.g. "Sorry, nothing found") if there were no results.


## Hints
* install a sublime package if you want to be able to see the object more clearly: [https://packagecontrol.io/packages/SyntaxFold](https://packagecontrol.io/packages/SyntaxFold)

* it allows you to "fold" your code to see the format of it.

* If you type in the variable name `products` in the google chrome developer console, you can see and inspect all the items in the product object.
* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #5
* Documentation
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
