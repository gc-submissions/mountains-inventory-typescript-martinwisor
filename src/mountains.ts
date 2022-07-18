import Mountain from "../models/practice-mountains";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length) {
    let currentTallest: Mountain = array[0];
    array.forEach((item) => {
      if (item.height > currentTallest.height) {
        currentTallest = item;
      }
    });
    return currentTallest.name;
  } else {
    return "";
  }
};
console.log(findNameOfTallestMountain(mountains));
export default findNameOfTallestMountain;
