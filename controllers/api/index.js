/*************************************************
* 
* The purpose of this file is to combine all of your 
* api routes into a single router then pass it up to 
* main routes index file.
*
**************************************************/

const router = require('express').Router();
// rename this
const apiRoutes = require('./apiRoutes');

// rename this
router.use('/other', apiRoutes);

module.exports = router;
