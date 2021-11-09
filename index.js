console.log('Yayyy node works')

/*

const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

*/

/*
var faker = require('faker');


for (let i=0; i< 5; i++) {
	console.log(faker.commerce.productName(), faker.commerce.price())
}
*/

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/


const express = require('express')
const app = express()

// app.use((req, res, next) => {
// 	console.log('My middleware')
// 	next()
// })

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use( express.static(__dirname + '/public') )
 

// ROUTES 
app.get('/', (req, res, next) => {
	// res.sendFile('')
	console.log('Hey in my landing route')
	res.sendFile(__dirname + '/views/landing.html' )
})

app.get('/home', (req, res, next) => {
	res.sendFile(__dirname + '/views/home.html' )
})

app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/about.html' )
})


app.listen(3000)