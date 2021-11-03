const express = require('express');
const layouts = require('express-ejs-layouts');




const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());
app.use(layouts);

app.get('/',(req,res) => {
    res.render('index',{name: 'Yuanyuan Shou'});
});


app.listen(app.get('port'),
() => {
    console.log(`Server is running at the port ${app.get('port')}`)
}
);
