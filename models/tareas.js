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

  
}
module.exports =Tareas;