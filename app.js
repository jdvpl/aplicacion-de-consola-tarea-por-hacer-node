require('colors');
const {inquirerMenu,pausa}= require('./helpers/inquirer')
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const main =async()=>{
  console.clear();

  let opt='';

  do {
    const tarea=new Tarea("Kisama")
    const tareas= new Tareas();
    tareas._listado[tarea.id] = tarea;
    console.log(tareas)

    opt=await inquirerMenu();
    await pausa();
  } while (opt !=='0');
}

main()