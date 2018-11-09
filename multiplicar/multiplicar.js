const fs = require('fs');
const colors = require('colors');

/* let data = '';

for(let i = 0; i<=10; i++){

     let r = base * i;
    data += `${base} * ${i} = ${r} \n`;    

} */



/* let multiplicar = async (base) => {
    
    let data ='' ;

    for (let i=0; i<=10; i++ ) {
        
       data += `${base} * ${i} = ${base * i}\n` ;
    }

    fs.writeFileSync(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(`Falla al generar archivo`);            
        }else {
            return `tabla-${base}`;
        }
        
      });    
} */

let multiplicar = (base, limite) =>{

    return new Promise( (resolve, reject) => {

        if(!Number(base)){
            reject (`El valor ${base} no es un número`);
            return;
        }
        let data ='' ;

    for (let i=0; i<=limite; i++ ) {
        
       data += `${base} * ${i} = ${base * i}\n` ;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err)=>{

        if (err)
            reject (err)
        else
         resolve (`tabla-${base}`)
    })

    
    })
}

listarTabla = ( base , limite ) => {
    for (let i=0; i<=limite; i++ ) {
        
         console.log(`${base} * ${i} = ${base * i}\n`.green) ;
     }
     
}

module.exports ={
    multiplicar,
    listarTabla
}