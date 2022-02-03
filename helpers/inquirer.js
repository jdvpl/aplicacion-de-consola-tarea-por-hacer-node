const inquirer = require('inquirer');
require('colors');


// preguntas
const preguntas=[
  {
    type: 'list',
    name: 'opcion',
    message:'Que deseas hacer?',
    choices:[
      {
        value: '1',
        name:'1. Crear tarea'
      },
      {
        value: '2',
        name:'2. Listar tareas'
      },
      {
        value: '3',
        name:'3. Listar completadaas'
      },
      {
        value: '4',
        name:'4. Listar pendientes'
      },
      {
        value: '5',
        name:'5. commpletar tarea(s)'
      },
      {
        value: '6',
        name:'6. borrar tarea(s)'
      },
      {
        value: '0',
        name:'0. Salir'
      },
    ],
  }
]
const inquirerMenu=async()=>{
  // console.clear();

  console.log("===============".green)
    console.log("selecciona".green)
    console.log("===============\n".green)

  const {opcion}=await inquirer.prompt(preguntas)
  return opcion
}

module.exports ={
  inquirerMenu
};