const apiRoutes = require('./api');

router.use((req, res) => {
    res.status(404).send('<h1>404 error</h1>');
});

module.exports = router;