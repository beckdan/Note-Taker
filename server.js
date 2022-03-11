//Import Dependencies//
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

//Initialize express//
const app = express();
//Define the PORT to use the deployed PORT or local (3000)//
const PORT = process.env.PORT || 3000

//Define uses of express//
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//All static files being served from Public folder//
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, ()=> console.log(`Listening on PORT: ${PORT}`));