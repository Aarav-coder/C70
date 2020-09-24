
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state={
      hascamerapermissions:null,
      scanned:false,
      scannedData:'',
      scannedBookId:'',
      scannedStudentId:'',
      buttonState:'normal'
    }
  }
  getcamerapermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hascamerapermissions:status === "granted",
      buttonState:id,
      scanned:false
    })
  }
  handlebarcodescanned=async(type,data)=>{
    const {buttonState}=this.state
    if(buttonState==='bookid'){
    this.setState({
      scanned:true,
      scannedBookId:data,
      buttonState:'normal'
    })
  }
  else if(buttonState==='studentid'){
    this.setState({
      scannedStudentId:true,
      scannedData:data,
      buttonState:'normal'
    })
  }
}
  render(){
    const hascamerapermissions=this.state.hascamerapermissions;
    const scanned=this.state.scanned;
    const buttonState=this.state.buttonState;
    if(buttonState!=='normal' && hascamerapermissions){
    return(
     <BarCodeScanner
     onBarCodeScanned={scanned?undefined:this.handlebarcodescanned}
     style={StyleSheet.absoluteFillObject}
     >

     </BarCodeScanner>
    )
    }
    else if(buttonState==='normal'){
  return (
    <View style={styles.container}>
      <View>
      <Image
    source={require('../assets/booklogo.jpg')}
    style={{width:200,height:200}}
    ></Image>
      </View>
      <Text>{hascamerapermissions===true? this.state.scannedData:'request camera permission'}</Text>
      <TextInput
      placeholder='bookid'
      value={this.state.scannedBookId}
      
      />
      <TouchableOpacity style={{backgroundColor:'blue',padding:10,margin:10,width:200,height:50,}}
      onPress={()=>{this.getcamerapermissions('bookid')}
  }
      >
<Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>
  Scan bookid code
</Text>
      </TouchableOpacity>
      <TextInput
      placeholder='studentid'
      value={this.state.scannedStudentId}
      
      />
      <TouchableOpacity style={{backgroundColor:'blue',padding:10,margin:10,width:200,height:50,}}
      onPress={()=>{this.getcamerapermissions('studentid')}
  }
      >
<Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>
  Scan studentid code
</Text>
      </TouchableOpacity>
    </View>
  );
}
}
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
