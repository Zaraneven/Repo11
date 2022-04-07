var myStr = "Paragon is the best!";

function useMethods(str){

    
    var mySplit = str.split("")
    var myReverse = mySplit.reverse();

    var myReverse = mySplit.join("");
    var leng = myStr.split().reverse();
    
    var countCharacter = leng.map(x => x.length);
   
    return {myReverse, countCharacter};
    

}
console.log(useMethods(myStr));
module.exports = useMethods;
