// require products from './products'
const products = require('./products')

//1
  /**
   * Reduce only returns one value.
   * Logic: if the condition is a match increment initial value by 1
   */
  /
let count = products.items.reduce((t, c) =>  (c.kind == 'shopping#product') && t + 1, 0 )
console.log(count)

//2
  /**
   * Filter by condition then use map to create array of certain elements in array
   * ---map return a new array
   */
  /
let sol2 = products.items.filter(el =>el.product.inventories[0].availability == "backorder").map(elm => elm.product.title )

console.log(sol2);

//3
let sol3 = products.items.filter(el => el.product.images.length > 1).map(el => el.product.title)
console.log(sol3)


//4
let sol4 = products.items.filter(el => el.product.title.includes('Canon')).map(elm => elm.product.title)
console.log(sol4)


//5.
let sol5 = products.items
              .filter(el => el.product.title.includes('Canon') && el.product.author.name.includes('eBay'))
              .map(elm => elm.product.title)
console.log(sol5)



//6
//An object can also be decleared using an {}
let sol6 = products.items.map(el => {
  let result = {}
  result.brand = el.product.brand
  result.price = el.product.inventories[0].price;
  result.image_link = el.product.images[0].link;

  return result
})
console.log(sol6)


//7
const brandProducts = (brand, condition) => {
  let result = products.items.filter((elm) => (
    elm.product.brand === brand && elm.product.condition === condition
  ))
  //tenery operator for a quick if and else
  // if result length is 0 - falsey then
  // show nothing found 0 = false and not false is true
  // else show result
  return !result.length ? "Nothing found" : result
}


console.log(brandProducts('Samsung','new'))
console.log(brandProducts('Samsun','new'))
