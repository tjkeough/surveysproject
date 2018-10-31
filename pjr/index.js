// content of index.js
const http = require('http')
const port = 3000
var person ={"name":"Harry", "age":32, "birthplace":"Hammersmith"};

var people = { }


function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}






const requestHandler = (request, response) => {
  console.log(request.url)
//  response.end(`${person.name} comes from ${person.birthplace}, and is ${person.age} `)

response.end(`<!DOCTYPE html>
<html>
<body>

<h1>${person.name} comes from ${person.birthplace}</h1>
<p>and is ${person.age} years old.</p>

</body>
</html>`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {

  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on at http://localhost:${port} `)
})
