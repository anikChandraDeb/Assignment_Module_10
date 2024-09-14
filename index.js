/*
1) Write a function named calculateDifference that takes two 
arguments and returns the difference between the first and 
second argument.
*/

function calculateDifference(number1,number2){
    return Math.abs(number1-number2);
}

//console.log(calculateDifference(1,10));

/*
2) Write a function named isOdd that takes one argument and returns 
true if the number is odd, and false if it is not.
*/

function isOdd(number){
    return (number%2!=0)?true:false;
}

//console.log(isOdd(10));

/*
3) Write a function named findMin that takes an array of numbers and 
returns the smallest number in the array.
*/

function findMin(arr){
    return Math.min(...arr);
}

//console.log(findMin([1,2,3,10,0]));

/*
4) Write a function named filterEvenNumbers that takes an array of 
numbers and returns a new array containing only the even numbers.
*/

function filterEvenNumbers(arr){
    let evenNumber=[];
    arr.forEach(element => {
        if(element%2==0) evenNumber.push(element);
    });
    return evenNumber;
}

//console.log(filterEvenNumbers([1,2,3,4,10,2,3,5]));
/*
5) Write a function named sortArrayDescending that takes an array of 
numbers and returns a new array sorted in descending order.
*/

function sortArrayDescending(arr){
    arr.sort((a,b)=>(b-a));
    return arr;
}

//console.log(sortArrayDescending([1,2,3,4,3331,3333,10,44444,44443,1234]));

/*
6) Write a function named lowercaseFirstLetter that takes a string and 
returns the same string with the first letter lowercased.
*/

function lowercaseFirstLetter(str){
    //if empty return empty string
    if(!str) return str;
    let array=str.split('');
    array[0]=array[0].toLowerCase();
    return array.join('');
}
//console.log(lowercaseFirstLetter("ABCD"));

/* 
7) Write a function named countVowels that takes a string and returns 
the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. 
It should filter vowels from the string.
*/

function countVowels(string){
    const vowels="aeiouAEIOU";
    let vowelString="";
    for(let i=0;i<string.length;i++){
        //filter vowel and store in vowelString
        if(vowels.includes(string.charAt(i))){
            vowelString+=string.charAt(i);
        }
    }
    return vowelString.length;
}

//console.log(countVowels("abcdefghiouA"));

/*
8) Write a function named findAverage that takes an array of numbers 
and returns the average of all elements.   
*/

function findAverage(arr){
    let sum=0;
    for(let element of arr){
        sum+=element;
    }
    return sum/arr.length;
}

//console.log(findAverage([1,2,3,4]));