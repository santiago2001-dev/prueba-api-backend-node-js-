
var alimentos = {
 "codigo" :"123",
 "descripcion" : "jugete inflable",
 "imagen" : "https://img.freepik.com/vector-premium/conjunto-juguete-inflable-elemento-piscina_1639-36539.jpg?w=2000",
  "produtoParaLaVenta" : true ,
  "porcentajeIva" : 19 
}

const getAllproducts = async(req,res)=>{
    res.json(alimentos)

}


const updateProduct = async(req,res) =>{
    const {codigo,descripcion,imagen,produtoParaLaVenta,porcentajeIva}= await req.body;
    // const entries = Object.entries(alimentos);
    // console.log(entries);
    alimentos.codigo = codigo
    alimentos.descripcion = descripcion
    alimentos.imagen = imagen
    alimentos.produtoParaLaVenta =  produtoParaLaVenta
    alimentos.porcentajeIva = porcentajeIva
    res.json(  `registro actualizado ${alimentos}`);

}
const deliteProduct = async(req,res)=>{
    alimentos.codigo = null
    alimentos.descripcion = null
    alimentos.imagen = null
    alimentos.produtoParaLaVenta =  null
    alimentos.porcentajeIva = null
    res.json(  `registro elimnado ${alimentos}`);

}
module.exports = {
    getAllproducts,
    updateProduct,
    deliteProduct
}