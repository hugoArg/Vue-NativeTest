import axios from "axios";



const ENDPOINT_PATH = "https://prueba-db-001.herokuapp.com/api/";


export default {

  ///API//

  ////X////
  updateData(id,nombre,apellido,telefono,direccion) {
    const user = { id,nombre,apellido,telefono,direccion };
    const headers = { 'Content-Type':'text/plain'};
    return axios.post(ENDPOINT_PATH +"usuario_update", user,{headers});
  },
  
  getData(id){

         return axios.get(ENDPOINT_PATH+"clientes/"+id);
            }

    };