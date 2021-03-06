require('colors');
const { guardarData,leetData } = require('./helpers/guardarArchivo');
const {inquirerMenu,pausa,leetInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList}= require('./helpers/inquirer')
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
      case '5':
        const ids=await mostrarListadoCheckList(tareas.listadoArray);
        tareas.toggleCompletar(ids);
      break;

      case '6': //borrar
        const id=await listadoTareasBorrar(tareas.listadoArray);

        if (id !=='0'){
          const ok=await confirmar("Esta seguro de borrar?");
          if (ok) {
            tareas.borrartareas(id);
            console.log("Tarea borrada!")
          }
        }else{

        }
        
        
      break;
    
    }
    guardarData(tareas.listadoArray);
    await pausa();
  } while (opt !=='0');
}

main()