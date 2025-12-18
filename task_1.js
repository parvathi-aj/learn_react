// Counting vowels in a string


function countVowels(text){
    let vowelcount = 0

    
    for (let i=0; i<text.length;i++){
        let theletter = text[i]
        if (theletter == "a" ||
        theletter == "e" ||
        theletter == "i" ||
        theletter == "o" ||
        theletter == "u" )
        {
            vowelcount = vowelcount + 1 
        }
        
    }
    
return vowelcount;

}
console.log(countVowels("umbrella"))