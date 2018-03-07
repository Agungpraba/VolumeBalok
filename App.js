import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0,

    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#EEE8AA'}}>

        <View style={{backgroundColor:'#008000'}}>
           <Text style = {{padding: 10, fontSize: 40, color: 'white', textAlign:'center'}} >
            MENGHITUNG VOLUME BALOK
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#00FFFF'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi),
                luas: (2*((this.state.panjang*this.state.lebar)+(this.state.panjang*this.state.tinggi)+(this.state.lebar*this.state.tinggi)))
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color='#008000'
            />
       </View>

        <Text style = {{padding: 10, fontSize: 20}}>Volume Balok</Text>
        <View style={{margin:20, backgroundColor:'#FF69B4'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Volume Balok
              Panjang =  {this.state.panjang} {"\n"}
              Lebar =  {this.state.lebar} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Volume = {this.state.volume}
          </Text>
         </View>


   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
