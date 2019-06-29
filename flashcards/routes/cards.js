const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');  // {data} is the equivelant of require().data
const {cards} = data; // {cards} is the equivalent of data.cards

router.get('/:id', (req, res) => {
  const {side} = req.query;
  const {id} = req.params;
  const text = cards[id][side];
  const {hint} = cards[id];

  const templateData = {id, text};

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer'
    templateData.sideToShowDisplay = 'Answer';
  } else if (side === 'answer') {
    templateData.sideToShow = 'question'
    templateData.sideToShowDisplay = 'question';
  }

  res.render('card', templateData);
});

module.exports = router;