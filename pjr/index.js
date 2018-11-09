// content of index.js
const http = require('http')
const port = 3000
//var person ={"name":"Harry", "age":32, "birthplace":"Hammersmith"};

var people = {	"person1":
					{"name":"Harry", "age":27, "birthplace":"Hammersmith"},
				"person2":
					{"name":"Hermione", "age":32, "birthplace":"Newcastle-upon-Tyne"},
				"person3":
					{"name":"Ron", "age":26, "birthplace":"Slough"}

			 }


// make a template string that uses each person in people
function templateMaker(people) {

	var template = "<!DOCTYPE html>\
	<html>\
	<body>";
	
	for(person in people){
  		template += `<h1>\$\{${person}.name\} comes from \$\{${person}.birthplace\}</h1><p>and is \$\{${person}.age\} years old.</p>`;
	}

	template += "</body>\
	</html>";

  return template;
}


// Will this work for more deeply nested json?
String.prototype.interpolate = function(params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
}



const requestHandler = (request, response) => {
  console.log(request.url)

	var template =  templateMaker(people);
	
	response.end(
		template.interpolate(
			people		
		)
	)
	
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {

  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on at http://localhost:${port} `)
})

