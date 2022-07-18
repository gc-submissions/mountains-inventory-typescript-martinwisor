import Product from "../models/practice-products";

const products: Product[] = [
  {
    name: "McIntosh MA230",
    price: 1800,
  },
  {
    name: "McIntosh MC275",
    price: 6500,
  },
  {
    name: "McIntosh MA252",
    price: 3500,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let sum: number = 0;
  for (let item of array) {
    sum = item.price + sum;
  }
  return sum / array.length;
};

console.log(calcAverageProductPrice(products));
export default calcAverageProductPrice;
