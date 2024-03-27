// Helper function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Main function to use the helper function
function main() {
    // Define the dimensions of the rectangle
    var length = 5;
    var width = 3;

    // Calculate the area using the helper function
    var area = calculateArea(length, width);

    // Print the result
    console.log("The area of the rectangle is: " + area);
}

// Call the main function to execute the code
main();
