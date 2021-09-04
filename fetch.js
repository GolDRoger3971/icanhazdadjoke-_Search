const request = require('request');
const fs = require('fs');
const prompt = require('prompt')
const curl = require('curl')

prompt.start();

let options = {
    url: 'https://icanhazdadjoke.com/search?term=', 
    method: 'GET',
    headers: 'Accept: text/plain'
}
updateURL()

function updateURL(searchTerm){
      prompt.get(['  username: ','  email: ','keyword'], function (err, result) {
        //
        // Log the results.
        //
        console.log('Command-line input received:');
        console.log('  username: ' + result.username);
        console.log('  email: ' + result.email);
        searchTerm = result.keyword;
        console.log('  Enter the keyword: ' + result.keyword);
        options.url += searchTerm;
        console.log(options.url)
      });

      
      

    
}


//console.log(updateURL(process.argv[1]))

request(options, function(error, response, body,newUrl){
    if (error) {
        console.log(error);
    } else if (!error && response.statusCode === 200) {
        //flag += 1;
        //console.log(flag);
        //newUrl = updateURL();
        let jokes = fs.createWriteStream('jokes.txt');
        jokes.write(body)
        //console.log(flag);

    }
    
})