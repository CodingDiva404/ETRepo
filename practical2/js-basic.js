function flattenArray(nestedArray)
{
    let result = [];

    for (let element of nestedArray){
        if(Array.isArray(element))
        {
            result = result.concat(flattenArray(element));
        }
        else
        {
            result.push(element);
        }

    }
    return result;
}

let nestedArray = [1, [2,3],[4,[5]]];
let flattenArray1= flattenArray(nestedArray);
// console.log(flattenArray1);


function rotateArray(arr, steps)
{
    steps = steps % arr.length;
    return arr.slice(-steps).concat(arr.slice(0,-steps));
}

let array = [6,7,0,3];

let rotateArrayVal = rotateArray(array,2);
// console.log(rotateArrayVal);

function findElementIndex(array, element)
{
    for(let i=0; i<array.length; i++)
    {
        if (array[i]=== element)
            return i;
    }
           return -1;
}

let arr = [10, 20, 67, 104, 50 ];
// console.log(findElementIndex(arr, 104));
// console.log(findElementIndex(arr, 100));


function calculateTotal(price, discount = 0.1)
{
    let discountedPrice = price - price * discount
    return discountedPrice;
}

// console.log(calculateTotal(100));
// console.log(calculateTotal(6703,0.5));


function doubleValue(array)
{
    var result = [];
    for(let i=0; i<array.length; i++)
    {
        result.push(array[i] * 2);

    }
           return result;

}

var list = [2,4,6,4];
function updatePersonImmutable(person, updates)
{
    return {...person, ...updates};
}

const person = {name: "Shraddha", age: 20};

const updatedPerson = updatePersonImmutable(person, {city: "Mumbai"});
// console.log("Original: ", person);
// console.log("Updated: ", updatedPerson);


function ratelimiter(limit){
  let count = 0;
  return function(){
    if (count < limit)
    {
      count ++
      return "Action Required";
    }
    else
    {
      return "Rate limit exceeded";
    }
  };
}

const limitedAction = ratelimiter(3);
console.log(limitedAction());
console.log(limitedAction());
console.log(limitedAction());
console.log(limitedAction());


