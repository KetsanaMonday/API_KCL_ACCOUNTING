const Controler = require('../controllers/User1');
const router = require('express').Router();
const url = "/User1";
router.get(url + '/get', Controler.get);
router.post(url + '/getbyid', Controler.getbyid);
router.post(url + '/getbyone', Controler.getByOne);
router.post(url + '/create', Controler.create);
router.put(url + '/update', Controler.update);
router.delete(url + '/delete', Controler.delete);

module.exports = router;