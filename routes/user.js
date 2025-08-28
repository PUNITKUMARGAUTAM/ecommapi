
const router = require('express').Router();

router.get('/user/Detail',(req , res) => {
    res.send("Rest api function is working now ");
});

router.post('/createUser', (req , res) => {
    userName = req.body;
    res.send(userName);
});

module.exports = router;
