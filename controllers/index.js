/*************************************************
* 
* The purpose of this file is to combine all of your 
* routes into a single router
*
**************************************************/

const router = require('express').Router();

const apiRoutes = require('./api');
const otherRoutes = require('./viewRoutes');

router.use('/', otherRoutes);
router.use('/api', apiRoutes);

module.exports = router;
