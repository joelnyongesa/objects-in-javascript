// Trying to understand objects in JavaScript.

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

// console.log(Object.keys(wednesdayMenu));

// console.log(Object.values(wednesdayMenu));

// MODIFYING OBJECTS.
const circle = {};

// adding  key using the dot notation.
circle.radius = 5;
circle.diameter = 10;
circle.circumference = ((Math.PI) * circle.diameter);
circle.area = ((Math.PI)**2)*circle.radius;

// console.log(circle);

// modify a property using the dot notation.
const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};

mondayMenu.fries = "Sweet Potato";
console.log(mondayMenu);