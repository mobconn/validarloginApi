import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'
import axios from 'axios'



export default class Service {    

  async validaUsuario (user= String, password= String){                
    await axios.get(`http://www.mobconn.com.br/west/ws/WSRfull/GET/valida.php?user=${user}&senha=${password}`, {headers:{'Content-Type': 'application/json','Accept': 'application/json'}}).then(retorno=> retorno.data);
    return this.retorno;
         
      }
  
}


