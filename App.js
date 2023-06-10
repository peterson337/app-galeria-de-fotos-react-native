import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (

      <WebView
        
        source={{ uri: 'https://web-app-galeria-de-fotos.vercel.app/' }}
      >
        <StatusBar hidden/>

      </WebView>
  );
}

const styles = StyleSheet.create({

});
