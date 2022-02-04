require('colors');
const { guardarData,leetData } = require('./helpers/guardarArchivo');
const {inquirerMenu,pausa,leetInput, listadoTareasBorrar}= require('./helpers/inquirer')
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main =async()=>{
  let opt='';
  const tareas=new Tareas();

  const tareasDb=leetData();

  if(tareasDb){
    tareas.cargarTareasFromArray(tareasDb);
  }

  do {

    opt=await inquirerMenu();

    switch (opt) {
      case '1':
        // crear opcion
        const des=await leetInput('Decription:');
        tareas.crearTarea(des);
      break;
      case '2':
        tareas.listadoCompleto()
      break;
      case '3':
        tareas.listarTareasCompletadas(true);
      break;
      case '4':
        tareas.listarTareasCompletadas(false);
      break;

      case '6': //borrar
        const id=await listadoTareasBorrar(tareas.listadoArray);
        console.log({id})
        // tareas.listarTareasCompletadas(false);
      break;
    
    }
    guardarData(tareas.listadoArray);
    await pausa();
  } while (opt !=='0');
}

main()