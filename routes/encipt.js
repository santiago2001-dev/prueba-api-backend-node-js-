const {Router} =require ('express');
const router = Router();

const {encript,desencript} =require('../controllers/encript')

router.post('/cifrar',encript);
router.post('/descifrar',desencript);


module.exports =  router;