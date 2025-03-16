function changeText() {
    // Array of texts to display
    var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
    
    // Get a random index from the array
    var number = getRandomNumberBetween(0, textsArray.length - 1);
    
    // Debugging: Log the index to the console
    console.log("Index: ", number);
    
    // Update the heading text
    document.getElementById("heading").innerHTML = textsArray[number];
}

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}