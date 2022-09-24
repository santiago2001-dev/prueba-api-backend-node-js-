const {Router} = require('express');
const router = Router();
const {getAllproducts,insertProduct, updateProduct,deliteProduct,getbyID}=require('../controllers/crud')
router.get('/',getAllproducts)
router.get('/:id',getbyID)
router.post('/',insertProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deliteProduct)
module.exports = router 