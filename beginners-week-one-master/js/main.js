// prints 'hello' to the console
console.log('hello!');

// An array of strings that when concatenated below will form the urls for the images in the image folder
var backgrounds = ['mike-yukhtenko', 'gabriele-garanzelli', 'fabian-oelkers'];

// Immediately invoked function expression - will execute once document has loaded
// Only fires logic after the page has fully loaded
(function() {
    // when the button is clicked it triggers a function
    document.querySelector('H1').addEventListener('click', function() {
        // 1. log to the console that you have clicked the button

        // this selects a randon background from above and stores it as the variable 'randomBackground'
        var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        // this creates a string that css will understand to be a background url
        var imageUrl = "url('./images/" + randomBackground + ".jpg')";

    // 2. using javascript, change the image url of the body background to the new one saved above



    // EXTENSION TASK!
    // 3. Change the text of the 'span' to be that of the photographer
    //   (hint, you should re-use randomBackground)
    // Double points if you replace '-' between their names with a space
    });
}());
