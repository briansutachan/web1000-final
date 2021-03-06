/* 1. What are the four steps of mergesort? */
/*  a. Recognize base case.
    b. Divide.
    c. Conquer.
    d. Combine.
    */

/* 2. Using JavaScript, generate a random number between 50 and 100. */
/* console.log(Math.random()* 50 + 50);*/


/* 3. Using Javascript, generate a random number between -100 and 100. */
/*console.log((Math.random() * (100 - (-100) + 1) + (-100))) */

/* 4. Write a coin flip function. It should return the string "heads" half the time and the string "tails" the other half */

/*function coinFlip() {
    return ((Math.round(Math.random()) * 1) < 1) ? 'heads' : 'tails';
    

}
console.log(coinFlip())*/
/* 5.  Re-state the following expression without using negation: !(10 > x) */
/* (10 <= x) */


/* 6.Re-state the following expression without using negation: !(a > 10 && b <= 5) */
/* (a <= 10 || b > 5) */


/* 7. Re-state the following expression without repeating variable a: (a && x <= 10) || (a && y < 0) */
/* (a || x <= 10 && y < 0) */


/* 8. Re-state the following expression without negations: !( (a > 10) || (b > 10) || (c > 10) || (isAdmin) ) */
/* (a <= 10) && (b <= 10) && (c <= 10) && (isAdmin) */


/* 9. Write a function which, given a 2-d array of strings, returns the concatenation of all the strings. */
function twodconcat(arr){

}

/* 10. Write a function which, given a 2-d array and another value x, returns true if x is present in the 2-d array, and false otherwise. */
function containsElement(arr, x){

}

/* 11. Write a function which, given an two sorted arrays of sizes m and n, returns a larger sorted array of size m+n. This function must work in O(m+n) time. */
/* function larger(m,n){
    return m+","+n;
} */

/* 12. Given the following edge list, draw the graph. Use MS Paint and include the file in your repo. E = [[1,2], [2,3], [4,5], [2,4], [1,5]  ] */


/* 13. Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.
 M = [
  [0,0,1,0,1],
  [0,0,0,0,1],
  [0,1,0,0,0],
  [0,1,0,0,0],
  [0,0,0,0,1],
]*/

/* 14. For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote? */


/* 15. What is the time complexity of the following function? */
/*function thugPop(arr){
    var ret = [];
    for (var i === 0; i < arr.length; i++){
      if (arr[i] % 15 == 0) ret.push('thugPop');
      else if (arr[i] % 5 == 0) ret.push('thug');
      else if (arr[i] %3 == 0 ) ret.push('pop');
      else ret.push(arr[i]);
    }
    return ret;
  }*/


  /* 16. What is the time complexity of the following function? */ /*==> O(N^2) */
  /*    function thugify(schoolList){
    return schoolList.map(function(schoolObj){
      var school = Object.assign({}, schoolObj);
      school.students.forEach(function(student){
        if (Math.random() > 0.5){
          student.lastName += 'dogg';
        }
        else {
          student.firstName = "lil' "+ student.firstName;
        }
      });
    });
  } */


  /* 17. What is the time complexity of the following function? */
  /*function countRepeats(strArr){
    var repeats = 0;
    strArr.forEach(function(str, index){
      var currentRepeats = strArr.filter(function(innerStr, idx){
        return (innerStr === str && index != idx)
      });
      if (currentRepeats.length > 0){
        repeats++;
      }
    });
    return repeats;
  }*/



  /* 18. What are the main operations of a stack?*/
  /*Push() Adds an item in the stack*/
  /*Pop() Removes an item from the stack.*/


  /* 19. What are the main operations of a queue?*/
  /*Enqueue()Adds an item to the queue at the  end. */
  /*Dequeue() Adds to the head and remove the first item added.*/
  /*Initialize*/


  /* 20. What is the runtime of bubblesort? How does it work? */
  /* Runtime of a bubblesort is O(N^2). */
  /* Bubblesort loops through a list comparing adjacent elements and swaps higher item towards the end .*/


  /* 21.Create a personal website and upload it so that it is accessible at yourdomain.fvi-grad.com.

The website must have your name, contact information, skills, and at least two links to portfolio items you are hosting on fvi-grad.
The website must not be in a subdirectory of the document root. ie. It needs to be accessible by going to yourusername.fvi-grad.com/ without anything after the slash.
You can and should use a template
Include the link to your website in your answers document*/



