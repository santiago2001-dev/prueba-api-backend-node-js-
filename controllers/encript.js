const {cifrar} =require('../middelwares/crifrar')
const{descifrar} = require('../middelwares/desifrar');
const encript =  async(req,res)=>{
    const {frase,clave} =await req.body;
   

    res.json(cifrar(frase,clave));
    
}


const desencript = async(req,res)=>{
    const {frase,clave}= await req.body;
    res.json(descifrar(frase,clave));
}



module.exports = {
    encript,
    desencript
}

