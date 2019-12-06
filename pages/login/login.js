import * as React from 'react';
import { TextInput , Text, View, StyleSheet, Button, Alert } from 'react-native';
import Service from '../services/service'

export default class Login extends React.Component {
  service = new Service;
  constructor(props){
    super(props)


  }
  render(){  
  return (
    <>                
            <View style={styles.top}>
                 <Text style={styles.labelLogin}>Login</Text> 
            </View>
            <View style={styles.container}>              
              <TextInput style={styles.login} placeholder="User" onChangeText={(usuario) => this.setState({usuario})} ></TextInput>
              <TextInput style={styles.login} placeholder="Password" onChangeText={(senha) => this.setState({senha})} ></TextInput>
             <View  style={styles.button}> 
              <Button title="Login" onPress={this.valida}/>
            </View>
            </View>                           
    </>
    
  );
  
}

// onLogin = (usuario, senha) => {
onLogin = () => {
    
    this.retorno = this.service.validaUsuario(this.state.usuario, this.state.senha) 
    console.log(this.retorno)
    return this.retorno;    
}
valida = () => {
  const res = this.onLogin()
  this.setState({ res })
  if(res.codigo=='1'){  
    Alert.alert('Conectado', 'Usuario conectado com sucesso!', [{text: 'OK'}]);  
    //console.log("Usuario conectado.")
    }else{    
        Alert.alert('Falha', res.codigo, [{text: 'OK'}]);    
        console.log("Usuário ou senha inválido!")
    }
}
}



const styles = StyleSheet.create({
   login: {
     marginLeft: '10%',
     marginTop:'10%',
     borderBottomWidth: 0.6,
     width: '80%'
   },
   labelLogin:{
     fontSize: 30,
     marginLeft: '10%',
     marginTop: '3%',
     color:'#FFFFFF'
   },
   button: {
    borderRadius: 10,
    marginLeft: '20%',
    marginRight: '20%',
    marginTop:'15%'
   },
   container: {
     width: '90%',
     height: '55%',
     marginTop: '30%',
     marginLeft: '5%',
     zIndex: 10
   },
   top: {
     width: '100%',
     backgroundColor:'#33BBFF',
     height: '12%',
     marginTop: '0%',
     marginLeft: '0%',
     marginRight: '0%',
     zIndex: 0
   }
});

