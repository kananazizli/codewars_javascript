/* the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

function countSheeps(arrayOfSheep) {
  let sumOfSheep = 0;
  arrayOfSheep.forEach(x => {
    if (x === true) {
      sumOfSheep += 1;
    }
  });
  
  return sumOfSheep;
}