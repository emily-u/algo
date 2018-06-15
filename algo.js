//  pop front
// var arr = [99,11,22,33,44];
// var temp = arr[0];
// for(var i=0; i<arr.length-1; i++){
//   arr[i]=arr[i+1];
// }
// arr.length = arr.length - 1;
// console.log(arr);

//////////////////////////////////////////////////////////////////

// push front
// function pushFront(arr,n){
//   for(var i=arr.length;i>=0;i--){
//     arr[i]=arr[i-1];
//     if (i===0){
//       arr[i]=11;
//     }
//   }
//   console.log(arr);
// }
// pushFront([22,33,44],11);

//////////////////////////////////////////////////////////////////

// insertAt 1.
//      function InsertAt(arr,n,val){
//        var arr = [11,22,44];
//        arr.splice(2,0,33);
//        console.log(arr)
//      }
//      InsertAt();

//////////////////////////////////////////////////////////////////

// insertAt 2.
//function InsertAt(arr,n,val){
//  if(n>arr.length || n<0){
//    console.log("this index number is out of range of array: ", n)
//  }else{
//    for(var i=arr.length; i>=n; i--){
//    arr[i]=arr[i-1];
//    if (i===n){
//      arr[i]=val;
//    }
//  }
//  console.log(arr);
//  }
//}
//InsertAt([1,2,3],0,1000);

//////////////////////////////////////////////////////////////////

// removeAt
//function removeAt(arr,n){
//  if(n>=arr.length || n<0){
//    console.log("This index is not valid: ", n)
//  }else{
//    for(var i=n; i<arr.length-1; i++){
//    arr[i]=arr[i+1];
//  }
//  arr.length = arr.length - 1;
//  console.log(arr);
//  }
//}
//removeAt([100,200,300,400],3);

//////////////////////////////////////////////////////////////////

// swap pairs
//function swap_pairs(arr){
//  for(var i=0; i<arr.length;i=i+2){
//    if(arr[i+1]){
//      var temp = arr[i];
//      arr[i]=arr[i+1];
//      arr[i+1] = temp;
//    }
//  }
//  return arr;
//}
//console.log(swap_pairs([1,2,3,4,5]))

//////////////////////////////////////////////////////////////////

// remove duplicates
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
//
//Second: solve this without using any nested loops.

//function redup(arr){
//  var count = 1;
//  for(var i =1; i <arr.length; i++){
//    if(arr[i] !== arr[i-1]){
//      arr[count] = arr[i];
//      count ++;
//    }
//  }
//  arr.length =count;
//  return arr;
//}
//console.log(redup([1,2,2,2,5,5,9]));

//////////////////////////////////////////////////////////////////

// min to front, move the lowest element to array’s front.  
// Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it.
// function min_front(arr) {
//     var min = arr[0];
//     var n = 0;
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             n = i;
//         }
//     }
//     for(var j=n; j>0; j--){
//         arr[j]=arr[j-1]
//     }
//     arr[0] = min;
//     return arr;
// }
// console.log(min_front([4,2,1,3,5]));

//////////////////////////////////////////////////////////////////

// reverse 
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]
// function reverse(arr) {
//     for (var i = 0; i < Math.floor(arr.length / 2); i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - i - 1];
//         arr[arr.length - i - 1] = temp;
//     }
//     return arr;
// }

// console.log(reverse([1, 2, 3, 4]))
//////////////////////////////////////////////////////////////////

//rotate
// function rotate(arr, n) {
//     if (n == 0 || n > arr.length) {
//         return arr;
//     }
//     if (n > arr.length) {
//         n = n % arr.length;
//     }
//     while (n > 0) {
//         var temp = arr.pop();
//         //temp = [4]
//         arr.unshift(temp);
//         // [4,1,2,3]
//         n--;
//     }
//     return arr;
// }
// console.log(rotate([1, 2, 3, 4], 1))

//////////////////////////////////////////////////////////////////
//filter Range

//////////////////////////////////////////////////////////////////
//concat
//////////////////////////////////////////////////////////////////
//skyline heights
//////////////////////////////////////////////////////////////////
//remove negatives
//////////////////////////////////////////////////////////////////
//remode negatives(stable)
//////////////////////////////////////////////////////////////////

//second to last
//////////////////////////////////////////////////////////////////
//nth to last
//////////////////////////////////////////////////////////////////
//second largest
//////////////////////////////////////////////////////////////////
//nth largest
//////////////////////////////////////////////////////////////////
//credit card validation
//////////////////////////////////////////////////////////////////
