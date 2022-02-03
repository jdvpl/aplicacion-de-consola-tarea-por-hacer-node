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
// /opciones
const inquirerMenu=async()=>{
  console.clear();

  console.log("===============".green)
    console.log("selecciona".green)
    console.log("===============\n".green)

  const {opcion}=await inquirer.prompt(preguntas)
  return opcion
}

// para pausar cuando se digie una opcion
const pausa =async()=>{
  const question=[
    {
      type:'input',
      name:'Enter',
      message:`Presiones ${'ENTER'.green} para continuar`
    }
  ]
  console.log('\n');
  await inquirer.prompt(question);

}
// para leer lo que escribe
const leetInput=async(message)=>{
  const question=[
    {
      type: 'input',
      name: 'desc',
      message,
      validate (value) {
        if(value.length===0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];

  const {desc}=await inquirer.prompt(question);
  return desc;
}

module.exports ={
  inquirerMenu,
  pausa,
  leetInput
};