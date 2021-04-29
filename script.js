// require products from './products'
const products = require('./products')
console.log(products.totalItems)


// Question 1.
let q1Count = 0;
for (let i = 0; i < products.items.length; i++) {
  if (products.items[i].kind == "shopping#product") {
    q1Count++;
  }
};
console.log(q1Count);



//Question 2.
const productsItems = products.items;

for (const i of productsItems) {
  const productsItemsProductInventoriesAvailability = i.product.inventories.availability
  if (productsItemsProductInventoriesAvailability === "backorder") {
    console.log(i.title);
  }
}


//Question 3
// Looping in the Items (Array)

for (const x of productsItems) {
  //storing products.items.product.images as a variable.
  const productsItemsProductImages = x.product.images

  for (const j of productsItemsProductImages) {
    if (productsItemsProductImages.length > 1) {
      console.log(x.product.title);
    }
  }
}


// Question 4

//Looping in the items again. (looping in array)

for (const y of productsItems) {
  //storing the products.items.product.brand
  const productsItemsProductBrand = y.product.brand
  if (productsItemsProductBrand === "Canon"){
    console.log(y.product.title);
  }
}

//Question 5

for (const z of productsItems) {
  const productItemsProductAuthorName = z.product.author.name
  if (productItemsProductAuthorName.includes('eBay')) {
    if (z.product.brand === "Canon")
    console.log("this contain");
  }
}



//Question 6

for (const w of productsItems) {
  const productsItemsProductBrand = w.product.brand
  const productsItemProductInventoriesPrice = w.product.inventories.price
  const productsItemProductImagesLink = w.product.images.link
  console.log(`Brand is ${productsItemsProductBrand} and it's price is ${productsItemProductInventoriesPrice} and here are the links to the images ${productsItemProductImagesLink} :( The links are not coming out. I'll figure out why. `);
};
