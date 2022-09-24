const  cifrar=(frase, clave)=>{ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
   
    let cifrado  = alfabeto.slice(-clave);
    cifrado  += alfabeto.slice(0, alfabeto.length - clave);
  
    for(let i=0; i< frase.length; i++){  
        letra = frase[i].toLowerCase();
        if(letra ==' '){
            letra =' ';
            }
        else{
            letra = cifrado[alfabeto.indexOf(letra)] ;
            }
        respuesta += letra;
    }
  return respuesta
}

module.exports = {cifrar}