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
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr ’s values to th e right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1) , change the array to [3,1,2] . Don’ t use built-in functions . 
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

// Second: allow negative shiftBy (shift L, not R) 
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
//     while (n < 0) {
//         var temp = arr.shift();
//         // temp = [2,3,4]
//         arr.push(temp);
//         n++;
//     }
//     return arr;
// }
// console.log(rotate([1, 2, 3, 4], -2))

// Third: minimize memory usage. With no new array, handle arrays/ shiftBy s in the millions . 

// Fourth: minimize the touches of each element .
//////////////////////////////////////////////////////////////////

//filter Range
// Alan is good at breaking secret codes. 
// One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. 

// function filterRange(arr, min, max) {
//     var newArr=[];
//     for(var i =0; i<arr.length; i++){
//         if(arr[i]>=min && arr[i]<=max){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(filterRange([1,3,7,8,11], 3, 6));

//////////////////////////////////////////////////////////////////

//concat
// function concat(arr1, arr2) {
//     var newArr = [];
//     for(var i = 0; i<arr1.length; i++){
//         newArr.push(arr1[i]);
//     }
//     for(var i = 0; i<arr2.length; i++){
//         newArr.push(arr2[i]);
//     }
//     return newArr;
// }
// console.log(concat([1,3,5],["hello","world"]));

//////////////////////////////////////////////////////////////////

//skyline heights
// function skyline_heights(arr) {
//     var newArr=[];
//     var temp_max=arr[0];
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i]>=temp_max && arr[i]>0){
//             temp_max = arr[i];
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(skyline_heights([-1,1,7,3]));

//////////////////////////////////////////////////////////////////

//remove negatives
// function remove_negatives(arr) {
//     var count = 0;
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i]<0){
//             count++;
//         }else{
//             arr[i-count]=arr[i];
//         }
//     }
//     arr.length = arr.length - count;
//     return arr;
// }
// console.log(remove_negatives([-1,4,-2,6]));

//////////////////////////////////////////////////////////////////

//remove negatives(stable)


//////////////////////////////////////////////////////////////////

//second to last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7] , return "Kate" . If array is too short, return null .
// function second_last(arr) {
//     var count = 0;
//     if (arr.length < 2) {
//         return null;
//     } else {
//         return arr[arr.length - 2];
//     }
// }
// console.log(second_last([42, true, 7]));

//////////////////////////////////////////////////////////////////

//nth to last
// function nth_last(arr, n) {
//     if(n<=0 || n>arr.length){
//         console.log("invalid n");
//     }else{
//         var count = 0;
//         if(arr.length<n){
//             return null;
//         }else{
//             return arr[arr.length-n];
//         }
//     }
// }
// console.log(nth_last([1,22,34,4,-5,6,7],6));

//////////////////////////////////////////////////////////////////

//second largest
// function second_largest(arr) {
//     arr.sort(function(a,b){
//         return a-b;
//     });
//     return arr[arr.length-2];

// }
// console.log(second_largest([1,77,15,7,8,9,9,0,4]));
//////////////////////////////////////////////////////////////////

//nth largest

//////////////////////////////////////////////////////////////////

//credit card validation

//////////////////////////////////////////////////////////////////


