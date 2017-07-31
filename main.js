
// 1. Write a function which takes an array of numbers and returns the mode of that array.
// [2, 4, 4, 4, 6, 6, 1] - > 4
// [0, 0, 0, 10] -> 0
// [1] -> 1
// Done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var testArray =[2,4,4,4,6,6,1] 
// 		var keeptrack = {}
// 	var findTheMode = function(numbers){
// 		for(var i = 0;i<numbers.length; i++){
// 	if (!(numbers[i] in keepTrack)) {
// 	keeptrack[numbers[i] =1
// 	}
// 	else{
// 		keeptrack[numbers[i]]s++
// 	}
// 		}
// 		var biggest = 0
// 		for( var key in keppTrack) {
// 			if( keepTrack[key] > biggestNum){
// 				biggestNum = keepTrack[key]
// 				biggestKey = key
// 			}
// 		}
// 		return biggestKey
// 	})
// console.log(findTheMode(testArray))

// 2. Write a funciton which, given a year as a number, returns whether that number is a leap year.

// Done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2000 -> true
// 1900 -> false
// 2016 -> true


// var leapYear=function(year){
// 	if(year%4===0){
// 		return true
// 	}else{
// 		return false
// 	}
// }
// console.log(leapYear(1864))


// Done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

// newArray= [1,2,3,4,5,6, 8]

// var missinNum = function(numbers){
// 	for(var i = 1; true;i++){
// 		if(numbers.indexOf(i)===-1){
// 			return i
// 		}
// 	}
// }
 
//  console.log(missinNum(newArray))


// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]
// Done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var num = [1,2,4,4,5,8];
// var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7]

// var sorted_arr = arr.slice().sort(){

// for (var i = 0; i < arr.length - 1; i++) {
//     if (sorted_arr[i + 1] === sorted_arr[i]) {
//         results.push(sorted_arr[i])
//     }
// }
// }
// console.log(results(num))
// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".
// var engToPig = function(oldword){
// //turn input string into array
// var newArr =[]
// var pigLatin=""
// newArr = oldword.toLowerCase().split(" ")
// for(var i=0;i<newArr.length;i++){

// newArr[i] =newArr[i] + newArr[i][0]//adds letter to the end of each word
// newArr[i] =newArr[i].substring(1)//removed first letter

// newArr[i] =newArr[i]+'ay'//added ay to every word
// // newArr[i] =newArr[i].toLowerCase()//made all letters lowercase
// }
// pigLatin = newArr.join(" ")//made array a string again
// pigLatin = pigLatin.charAt(0).toUpperCase() + pigLatin.substring(1)//makes first letter of sentence capital
// return (pigLatin)
// }
// console.log(engToPig('The quick brown fox'))
//===================
// var latToEn = function(oldword){
// //turn string into array
// var newArr=[]
// newArr = oldword.split(" ")
// for(var i=0;i<newArr.length;i++){
// 	newArr[i]= newArr[i].slice(0, -2);//takes ay from each word
// 	newArr[i]=newArr[i][newArr[i].length - 1]+newArr[i]
// 	newArr[i]=newArr[i].slice(0,-1)
// 	newArr[i] =newArr[i].toLowerCase()
// }
// english=newArr.join(" ")
// english = english.charAt(0).toUpperCase() + english.substring(1)
// console.log(english)
// }

// console.log(latToEn("Hetay uickqay rownbay oxfay"))

// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false
// var equalArr = function(arr1,arr2){
// 	var nArr1=arr1.sort()
// 	var nArr2=arr2.sort()

// if(nArr1.join()===nArr2.join()){
// 	return true
// }
// else{
// 	return false
// }
// }
// equalArr([1,2,3,4,5],[1,2,3,4,5])
// equalArr(["a", "c", "b"], ["a", "b", "c"])
// equalArr([],[])

// var douggy=[1,2,3,4,56]
// var shuggy=[1,2,3,4,56]
// var A = [2, 15, 3, 12];
// var B = [2, 15, 3, 12];

// var len = Math.max(A.length, B.length);
// console.log(len)
// for (var i = 0; i < len; i++) {
//   console.log(A[i], B[i], A[i] === B[i])
// }
// var valcomparer = function(ArrA,ArrB){
// 	var isValid = true

// 	for(var i =0;i<arrA.length;i++){
// 		for(var i =0;i<arrB.length;i++){
// 			if((arrA+arrB)-arrA===arrA{
// 				return true
// 			}
// 			else{
// 				return false
// 			}
// 		}
// 	}
// 	return isValid
// }
// console.log(valcomparer(douggy,shuggy))


// var valcomparer = function(ArrA,ArrB){
// 	var isValid = true

// 	for(var i =0;i<arrA.length;i++){
// 		for(var i =0;i<arrB.length;i++){
// 			if((arrA+arrB)/2===arrA{
// 				return true
// 			}
// 			else{
// 				return false
// 			}
// 		}
// 	}
// 	return isValid
// }
// console.log(valcomparer(douggy,shuggy))

// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]


// var arry=[1,5,7,3,1,5,7]
// var maxCutoff=function(arr){
// 	for(var i= 0; i<arr.legth; i++){
// 		var arrN = arr.length<[5]
// 		return arrN
// 	}
// }
// 	console.log(maxCutoff(arry))


// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)

// var randomArr = function(){
// for (var a=[],i=0;i<10;++i)
// 	Math.floor(Math.random(i) * 101)
// a * 10
// return (i)
// 	console.log(i)
// }
// console.log(randomArr())

// 9. Write a function which takes two sorted lists and merges them into a new sorted list.

// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]

// var listo1=[4,8,5,6,7,9,2,1,1]
// var listo2=[6,7,9,2,0,2,2,3,4]

// var sortMash=function(numberA,numberB){
// 	var newListo = numberA+numberB
//  	return newListo
// }
// console.log(sortMash(listo1,listo2))

// (Source: https://adriann.github.io/programming_problems.html)

// 10. Write a function which, given an array, determines the subarray with the largest sum.

// [1, 1, 1, -1] -> [1, 1, 1]
// [1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
// [2, 2, -10, 5, -10, 2, 2] -> [5]
// [1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]

// (Source: http://venus.cs.qc.edu/~ryba/cs111/Array.pdf with edits, which may no longer be accessable)

// 11. One way of encoding a message is called a "square code". Given a message like:

// "Have a nice day!"

// We determine an appropriate size of a square or rectangle to contain this message without spaces like so:

// have
// anic
// eday
// !

// We then read the square in columns, which gives us our encoded message:

// hae! and via ecy

// Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.

// (source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)

// 12. Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur.

// Example output:
// th 2.37%
// in 2.20%
// fj 2.00%
// ...


// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num) {
//   return num * 2;
// });

// var words = ["bill", "bob", "thomas"]
// var capitals = words.map(function(word){
// 	return word.toUpperCase()
// }) 

// console.log(capitals(words))




