let candies = [2,3,5,1,3]
function getHighestCandies(array){
    let max = array[0];
    for(let i =0;i<array.length;i++){
        if(array[i]>max){
            max = array[i]
        }
    }
    return max;
}

/**
 * @param {[number]} candies
 * @param {number} extraCandies
 * @return {[boolean]}
*/
function kidWithHighestCandies(candies, extraCandies) {
    let result = [];
    let val = getHighestCandies(candies);
	for(let i =0;i<candies.length;i++){
        if(candies[i]+extraCandies>=val){
            result.push(true);
        }else{
            result.push(false);
        }
    }
    return result;
}
console.log(kidWithHighestCandies(candies,3));