// ************ SOLUTIONS TO GOOGLE SHOPPING CONDITIONALS ************
// *******************************************************************

// requre products from './products'
const products = require('./products');
console.log(products.totalItems);

console.log("\n---------------\n")



// --------------------------------------
// Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
// --------------------------------------

function countShoppingProducts() {
    let count = 0;
    for (const i in products["items"]) {
      if (products["items"][i]["kind"] === "shopping#product") {
        count += 1
      }
    }
    return count
}

countShoppingProducts();

console.log("\n---------------\n")

// --------------------------------------
// Print the title of all items with a backorder availability in inventories.
// --------------------------------------

searchBackorderAvailability = () => {
    for (const i in products["items"]) {
      let check = products["items"][i]["product"]["inventories"][0]["availability"]
      if (check === "backorder") {
        console.log(products["items"][i]["product"]["title"])
      }
    }
}

searchBackorderAvailability();

// See below if you want to search any availability

// function searchAvailability (search) {
//     for (const i in products["items"]) {
//       let check = products["items"][i]["product"]["inventories"][0]["availability"]
//       if (check === search) {
//         console.log(products["items"][i]["product"]["title"])
//       }
//     }
//   }

// searchAvailability("backorder");

console.log("\n---------------\n")

// --------------------------------------
// Print the title of all items with more than one image link.
// --------------------------------------

function multiImageItems() {
    for (const i in products["items"]) {
      let imageObj = products["items"][i]["product"]["images"]
      if (Object.keys(imageObj).length > 1) {
        console.log(products["items"][i]["product"]["title"])
      }
    }
}

multiImageItems();
console.log("\n---------------\n")

// --------------------------------------
// Print all "Canon" products in the items (careful with case sensitivity).
// --------------------------------------

function searchCanon() {
    for (const i in products["items"]) {
      if (products["items"][i]["product"]["brand"].toLowerCase() === "canon") {
        console.log(products["items"][i]["product"]["title"])
      }
    }
}

searchCanon();

// The function below works for Canon products but also for any other brands.

// function searchBrand(search) {
//     for (const i in products["items"]) {
//       if (products["items"][i]["product"]["brand"].toLowerCase() === search.toLowerCase()) {
//         console.log(products["items"][i]["product"]["title"])
//       }
//     }
//  }

//  searchBrand("canon");


console.log("\n---------------\n");

// --------------------------------------
// Print all items that have an author name of "eBay" and are brand "Canon".
// --------------------------------------

// For the author, sometimes you find 2 words so if you use a d, it won't return all the results. Hence why you use includes().

function searchEbayCanon() {
    for (const i in products["items"]) {
      if (products["items"][i]["product"]["author"]["name"].toLowerCase().includes("ebay") === true 
        && products["items"][i]["product"]["brand"].toLowerCase() === "canon") {
        console.log(products["items"][i]["product"]["title"])
      }
    }
}

searchEbayCanon();

// The function below works for the eBay and Canon but also for any other similar search.

// function searchbyAuthorBrand(author, brand) {
//     for (const i in products["items"]) {
//       if (products["items"][i]["product"]["author"]["name"].toLowerCase().includes(author.toLowerCase()) === true 
//         && products["items"][i]["product"]["brand"].toLowerCase() === brand.toLowerCase()) {
//         console.log(products["items"][i]["product"]["title"])
//       }
//     }
// }

// searchbyAuthorBrand("eBay", "Canon");

console.log("\n---------------\n");

// --------------------------------------
// Print all the products with their brand, price, and an image link
// --------------------------------------

function showAllWithBrandPriceImg() {
    for (const i in products["items"]) {
      console.log("Product: " + products["items"][i]["product"]["title"])
      console.log("Brand: " + products["items"][i]["product"]["brand"])
      console.log("Price: " + products["items"][i]["product"]["inventories"][0]["price"])
      console.log("Image Link: " + products["items"][i]["product"]["images"][0]["link"])
      console.log("---------------------");
    }
}
showAllWithBrandPriceImg();

// Alternatively, you can use template litterals to make it look cleaner both in your code and in terminal
// For more, you can watch this video: https://www.youtube.com/watch?v=NgF9-pdTDGs

// function showBrandPriceImage() {
//     for (const i in products["items"]) {
//       console.log(`
//       Product: ${products["items"][i]["product"]["title"]}
//       Brand: ${products["items"][i]["product"]["brand"]}
//       Price: $${products["items"][i]["product"]["inventories"][0]["price"]}
//       Image Link: ${products["items"][i]["product"]["images"][0]["link"]}`)
//     }
// }
// showBrandPriceImage();

console.log("\n---------------\n");
