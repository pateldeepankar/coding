const getAllSubArray = (arr,k) => {
    let i = 0;
    let j = 0; //pointer initialisation
  
    let result = [];
    let currResult = []; //result array and temp array initialisation
  
    while (j < arr.length) { //SW technique implimentation O(n)
      currResult.push(arr[j]);
      if (j - i + 1 < k) { // this parts executes till first window created.
        j++;
      } else if (j - i + 1 == k) { // this is the heart of algo where optimisation happens
        result.push([...currResult]);
        currResult = currResult.slice(1, 4);
        j++;
        i++;
      }
    }
    return result;
  };
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];// test input.
  
  console.log(getAllSubArray(arr,4));
  