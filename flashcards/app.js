const express = require('express');

const app = express();

const names = [
    {
        first: "Dennis",
        last: "Henderson",
    },
    {
        first: "Jennifer",
        last: "Henderson"
    },
    {
        first: "Zachariah",
        last: "Henderson"
    },
    {
        first: "Elijah",
        last: "Henderson"
    }
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', {prompt: "Who is buried in Grant's tomb?"});
});

app.get('/names', (req, res) => {
  res.render('names', {names});
});

app.listen(3000, () => {
  console.log('The application is runnong on localhost:3000!')
});