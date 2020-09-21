// 1.
// Create a promise called myFirstPromise
let myFirstPromise = new Promise((resolve, reject) => {
  // Inside the promise
  // Create a boolean variable check and set it to true
  let bool = true;
  // Create a variable rand and it should calculate a random number between 1 and 10
  let rand = Math.floor((Math.random() * 10) + 1);
  
  
  // If the check boolean is true it should resolve with the
  // result of a random number between one and ten
  if(bool) {
    setTimeout(() => {
      resolve(rand);
    }, 2000);
  }
  
  // if the check boolean is false, it should reject with
  // a string that says: Cannot computer random number
  setTimeout(() => {
    reject('Cannot compute random number');
  }, 2000);
  
  // Both resolve and reject should only occur after 2 seconds
});

// Now call the promise you created and chain your thenables.
// In your first thenable
// console.log('I have my random number <the number> and I will multiply it by 5')
// Multiply your random number by 5 and pass the data to the next thenable
myFirstPromise.then((num) => {
  console.log(`I have my random number ${num} and I will multiply it by 5.`);
  let multipledNum = num * 5;
  return multipledNum;
})
// In your second thenable log a String
// that says `Here is the result of my random number multiplied
// by 5: < place number result here>`
  .then((x) => {
    console.log(`Here is the result of my random number multiplied by 5: ${x}`);
  });



// 2.
// create a function called getDataPromise that returns a promise
let getDataPromise = (data) => {
  return new Promise((resolve, reject) => {
  // inside the function create an error variable and set it to boolean false
    let err = false;
  // create a conditional that handles the rejection if there is an error with a message 'Something went wrong'
    if(err) {
      reject(`Something went wrong.`);
    }
  // Create a set timeout function that after 4 seconds returns the data (we are mimicking a 3rd party API call)
    setTimeout(() => {
      resolve(data);
    }, 4000)
  })
}

let data = [
  { firstName: 'Joe', lastName: 'Peters' },
  { firstName: 'Doug', lastName: 'Lawson' },
  { firstName: 'Sandra', lastName: 'Mathers' },
];

// consume your promise
getDataPromise(data)
// take the result and log the data
  .then((data) => {
    console.log(data);
    return data;
  })
  // take data and output 'Hello Joe Peters' for each object
  .then((data) => {
    data.forEach(object => {
      console.log(`Hello ${object.firstName} ${object.lastName}`);
    })
    return data;
  })
// This should be 3 separate steps
// Handle the error in case there is one
.catch((err) => {
  console.log(`${err}: Something bad happened.`);
})
// Test by setting your error variable to false then true
// Tested
