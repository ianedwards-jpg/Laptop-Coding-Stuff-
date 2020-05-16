var fs = require('fs');

fs.writeFile("output.txt", "suck a duck", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("File saved successfully!");
});
