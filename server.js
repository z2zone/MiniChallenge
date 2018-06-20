const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


if(process.env.NODE_ENV === 'production') {
	app.disable('x-powered-by');
	app.use(compression());
	app.use(morgan('common'));
	app.use(express.static(path.resolve(__dirname, 'client/build')));
	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 3090;
app.listen(port, error =>{
	if(error){	
		throw error;
	}
	console.log('Listening on', port);
});


