const { Router } = require('express');

const { hello } = require('./root.ctrl');

router.get('/', hello);


module.exports = router;