const fs = require('fs');
// guarda en el archivo
const archivo='./db/data.json';

const guardarData=(data)=>{
  fs.writeFileSync(archivo, JSON.stringify(data));
}

const leetData=()=>{
  // si existe
  if(!fs.existsSync(archivo)){
    return null;
  }

  const info =fs.readFileSync(archivo, { encoding: 'utf8'})
  const data=JSON.parse(info);

  return data;
}



module.exports={guardarData,leetData}