function hasTargetSum(array, target) {
    // Write your algorithm here
    for (let i=0; i<array.length; i++) {
      console.log(array[i])
      for (let j=i+1; j<array.length; j++) {
        console.log(array[j])
        if (array[i]+array[j] === target) {
          console.log(array[i]+array[j])
          return true} 
        }
      }
    }

/* 
  Write the Big O time complexity of your function here
  time complexity is quadratic 0(n^2)
*/

/* 
  Add your pseudocode here
  iterate through the elements of array to grab each element
  then iterate through the same element to grab a 2nd element 
  sum up one element with another element
  check if the sum equals to the target
  return true if it does 
*/

/*
  Add written explanation of your solution here
  function that takes an array and a target number and checks if any pair of numbers in that array add up to a target.
  if sum is equal to target, the function returns true. If it does not, it returns false.
  array= [1,2,3,4] 
  target=6
  1+2 = 6 => false
  1+3 = 6 => false
  1+3 = 6 => false
  2+3 = 6 => false
  2+4 = 6 => true

  array= [2,5,7] 
  target=20
  2+5 = 20 => false
  2+7 = 20 => false
  5+7 = 20 => false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
