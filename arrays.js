//Find the last element of the arrays
let arr1=[3,7,34,90,12];
let lastElement = arr1[4];
console.log({lastElement});

let arr2 = [true,"green","where",12,56];
let finalElement = arr2[4];
console.log({finalElement});

//Write a program that will join these array elements into a string.
let myPets=["Cow","Bird","Snake","Dog"];
let stringMyPets= myPets.join(" ");
console.log({stringMyPets});

//Write a script to sort the array items
let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log({arr3});

//Write a program to remove duplicates from the array. Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy","man","girl", "school","girl","woman"];
let uniqueArr = arr.filter((value,index) => arr.indexOf(value) === index);
console.log({uniqueArr});

let duplicateArr = (dupArr) =>{
    let duplicates = dupArr.filter((value,index) => dupArr.indexOf(value) != index);
    return Array.from(new Set(duplicates));
}
let newArr= ["boy","man","girl", "school","girl","woman"];
console.log(duplicateArr(newArr));

//Write a script to search for the word in the array
//If the word is present, return it. Else return "the search word was not found"



// let arr5 = ["the","way","x",4];
// console.log(includes(arr5,"food"));

// function search(){
//     for (word in array){
//         if (word === searchWord){
//             return "food";
//         }
//         else{
//             return "the search word was not found";
//         }
//     }

// };

// Write a script to sort the following string
let word = "renniw";
let newWord = word.split("").reverse().join("");
console.log(newWord);

let sortedWord = word.split("").sort().join("");
console.log(sortedWord);


