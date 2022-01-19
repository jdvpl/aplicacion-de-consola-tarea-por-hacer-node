require("colors");

const mostrarMenu=()=>{
  console.clear()
  console.log("===============".green)
  console.log("selecciona".green)
  console.log("===============\n".green)

  console.log(`${'1.'.green} Crear una tarea`);
  console.log(`${'2.'.green} listar tareas`);
  console.log(`${'3.'.green} listar tareas completadas`);
  console.log(`${'4.'.green} Listar tareas pendientes`);
  console.log(`${'5.'.green} Completar tarea`);
  console.log(`${'6.'.green} borrar una tarea`);
  console.log(`${'0.'.green} salir\n`)

  // recibe info del usuario
  const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
  });
  readline.question("Seleccione una opcion: ",(opt)=>{
    readline.close();
  })
}

// pausar
const pausa=()=>{
    // recibe info del usuario
    const readline=require('readline').createInterface({
      input:process.stdin,
      output:process.stdout
    });
    readline.question(`\nPresione ${'Enter'.green} para continuar\n`,(opt)=>{
      readline.close();
    })

}

module.exports={
  mostrarMenu,
  pausa
}