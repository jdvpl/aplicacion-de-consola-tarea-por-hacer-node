require('colors');
const { guardarData } = require('./helpers/guardarArchivo');
const {inquirerMenu,pausa,leetInput}= require('./helpers/inquirer')
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main =async()=>{
  let opt='';
  const tareas=new Tareas();
  do {

    opt=await inquirerMenu();

    switch (opt) {
      case '1':
        // crear opcion
        const des=await leetInput('Decription:');
        tareas.crearTarea(des);
      break;
      case '2':
        console.log(tareas.listadoArray)
      break;
    
    }
    // guardarData(tareas.listadoArray);
    await pausa();
  } while (opt !=='0');
}

main()