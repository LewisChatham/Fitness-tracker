const router = require("express").Router();
const path = require('path')
const apiRoutes = require('./apiRoutes')
const htmlRoutes = require('./htmlRoutes')


router.use('/api', apiRoutes)

router.use('/', htmlRoutes)



router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})


module.exports = router;