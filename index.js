// If you know how many times you are going to run your loop then the for loop is the way to go. 


//     const gifts = ["teddy bear", "drone", "doll"];
//     
//     function wrapGifts(gifts) {
//       for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//       }
//     
//       return gifts;
//     }
//     
//     wrapGifts(gifts); 
//     
//     
//     function writeCards(cards)



 // for (let i = 0; i < letters.length; i++) {
 // console.log(letters[i]); 


    
    
 /// let j = 0 
 ///  
 ///  while(j < letters.length) {
 ///      console.log(letters[j]);
 ///      j++; 
 ///  }



function writeCards(names, event) {
    let messages = []; 
    for(let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`); 
    }
    return messages; 
}

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber); 
        positiveNumber--; 
    }
    
}












