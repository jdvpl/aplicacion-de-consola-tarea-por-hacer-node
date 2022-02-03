const fs = require('fs');

const guardarData=(data)=>{

  const archivo='./db/data.json';
  fs.writeFileSync(archivo, JSON.stringify(data));

}

module.exports={guardarData}