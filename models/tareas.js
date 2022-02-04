require('colors')

const Tarea = require('./tarea');
class Tareas{
  _listado={};

  constructor() {
    this._listado={};
  }

  crearTarea(desc=''){
    const tarea=new Tarea(desc);
    this._listado[tarea.id]=tarea;
  }

  get listadoArray(){
    const listado=[];

    Object.keys(this._listado).forEach( key=>{
      const tarea=this._listado[key];
      listado.push(tarea)
    })
    return listado;
  }

  cargarTareasFromArray(tareas=[]){
    // this._listado[tarea.id]=tarea;
    tareas.forEach(tarea=>{
      this._listado[tarea.id]=tarea;
    })
  }

  listadoCompleto(){
    console.log()
    this.listadoArray.forEach( (tarea,id)=>{
      const idx=`${id+1}.`.green
      const {desc,completadoEn}=tarea;
      const estado=(completadoEn) ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${idx} ${desc} :: ${estado}`)
    })
  }
  listarTareasCompletadas(completada=true){
    console.log()
    let contador=0;
    this.listadoArray.forEach( (tarea)=>{
      const {desc,completadoEn}=tarea;
      const estado=(completadoEn) ? 'Completada'.green : 'Pendiente'.red;
      if (completada){
        if(completadoEn){
          contador+=1;
        console.log(`${ (contador+'.').green } ${desc} :: ${completadoEn}`)
        }
        
      }else{
        if (!completadoEn){
          contador+=1;
          console.log(`${ (contador+'.').green}. ${desc} :: ${estado}`)
        }
      }
    })
  }

  borrartareas(id='') {
    if(this._listado[id]){
      delete this._listado[id];
    }
  }

  
}
module.exports =Tareas;