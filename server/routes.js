const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// own routes to controller here
router.get('/qa/questions', controllers.getQuestions);
router.get('/qa/questions/:question_id/answers', controllers.getAnswers);

router.post('/qa/questions', controllers.postQuestion);
router.post('/qa/questions/:question_id/answers', controllers.postAnswer);

router.put('/qa/questions/:question_id/helpful', controllers.helpQuestion);
router.put('/qa/questions/:question_id/report', controllers.reportQuestion);
router.put('/qa/answers/:answer_id/helpful', controllers.helpAnswer);
router.put('/qa/answers/:answer_id/report', controllers.reportAnswer);

router.get('/loaderio-1a366c60ec976061ee347d19846ec311/', (req, res)=>res.send('loaderio-1a366c60ec976061ee347d19846ec311'));
router.get('/test', (req, res)=>res.sendStatus(404));
module.exports = router;
