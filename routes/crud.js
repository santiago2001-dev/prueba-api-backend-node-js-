const {Router} = require('express');
const router = Router();
const {getAllproducts,updateProduct,deliteProduct}=require('../controllers/crud')
router.get('/',getAllproducts)
router.post('/',updateProduct)
router.delete('/',deliteProduct)
module.exports = router