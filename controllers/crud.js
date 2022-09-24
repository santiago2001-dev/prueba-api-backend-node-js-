const db = require('../db/config')

const getAllproducts = async(req,res)=>{
    const sql = `SELECT * FROM producto`
    db.query(sql,(error,rows)=>{
        
        if(error){
            throw error
        }else{
            res.json(rows)

        }
    })

}

const getbyID =  async(req,res)=>{
    const {id}= req.params;
    sql = `SELECT * FROM producto WHERE id = '${id}'`
    conec.query(sql,(error,rows)=>{
        if(error){
            throw error
    
        }else{
    
            res.json(rows)
        }
    })
    
    }

const insertProduct = async(req,res)=>{
    const {codigo,descripcion,imagen,produtoParaLaVenta,porcentajeIva}= await req.body;
    let sql = `INSERT INTO producto (codigo,descripcion,imagen,produtoParaLaVenta,porcentajeIva) VALUES ('${codigo}','${descripcion}','${imagen}','${produtoParaLaVenta}','${porcentajeIva}')`;
    db.query(sql,(error,rows)=>{
        if(error){
            throw error
        }else{

            res.json({
                status: 'registro insertado'
            })
        }
    })

}

const updateProduct = async(req,res) =>{
    const {id} = await req.params;
    const {codigo,descripcion,imagen,produtoParaLaVenta,porcentajeIva}= await req.body;
    let sql = `UPDATE producto SET  codigo = '${codigo}',descripcion ='${descripcion}',imagen = '${imagen}',produtoParaLaVenta = '${produtoParaLaVenta}', porcentajeIva = '${porcentajeIva}'  WHERE id = '${id}'`;
    db.query(sql,(error,rows)=>{
        if(error){
            throw error
        }else{

            res.json({
                status: 'registro actualizado'
            })
        }
    })    
}



const deliteProduct = async(req,res)=>{
    const {id}= await req.params;
    const sql = `Delete from producto where id = '${id}'`
    db.query(sql,(error,results)=>{
       if(error){
           throw error
       }else{
           res.json({
               status: 'registro eliminado'
           })
       }
   })

}
module.exports = {
    getAllproducts,
    getbyID,
    insertProduct,
    updateProduct,
    deliteProduct
}