const { apartmentHunting } = require('./apartmentHunting');

const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];
const reqs = ["gym", "school", "store"];

console.log(apartmentHunting(blocks, reqs));
//Output=3
