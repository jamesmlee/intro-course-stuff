function countingCharacters(stringToCount){
    // The length property has been mentioned in 
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " + 
              stringToCount.length + " characters.");
}

// find the count of particular character in a given string
function countingCharacters2(stringToCount, characterToFind){
    var characterCount = 0;
    for (var characterPosition = 0; 
           characterPosition < stringToCount.length; 
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                  characterCount);
}

// count a series of characters in a string
// str = the given string; search = the characters to search for
function countingCharacters3(str, search){    
    var count = 0;
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
       var current = str.substring(index, index + numChars);
        if (current == search){            
            count++;
        }
    }
    return count;
}
