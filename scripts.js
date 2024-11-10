// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercise 1 - forEach Basics
names.forEach(name => console.log(name));  
provinces.forEach(province => console.log(province)); 

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Exercise 2 - Uppercase Transformation
const uppercasedProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercasedProvinces);

// Exercise 3 - Name Lengths
const nameLength = names.map(name => name.length);
console.log(nameLength);

//Exercise 4 - Sorting
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Exercise 5 - Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(nonCapeProvinces.length);

// Exercise 6 - Finding 'S'
const nameWithS = names.map((name) => {
  return name.split('').some((char) => char.toLowerCase() === 's'); 
});
console.log(nameWithS);

//Exercise 7 - Creating Object Mapping
const namesToProvincesMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvincesMap);

// Advanced Exercises
// Exercise 1 - Log Products
console.log(products.map(product => product.product));

// Exercise 2 - Filter by Name Length
console.log(products.filter((product) => product.product.length <= 5));

// Exercise 3 - Price Manipulation
console.log(
  products
  .filter((product) => product.price !== "")
  .map(product => ({...product,
    price: parseFloat(product.price) || 0
  }))
  .reduce((acc, product) => acc + product.price, 0)
);

// Exercise 4 - Concatenate Product Names
console.log(`"${products.reduce((acc, product) => acc + " " + product.product, " ").trim()}"`);

// Exercise 5 - Find Extremes in Prices
const prices = products.filter(product => product.price !== "").map(product => parseFloat(product.price) || 0);
const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);
console.log(`Max Price: ${maxPrice}, Min Price: ${minPrice}`);

// Exercise 6 - Object Transformation
const transformedProducts = products.map(product => ({
  name: product.product,
  cost: parseFloat(product.price) || 0,
}));
console.log(transformedProducts);
