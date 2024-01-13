import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return(
    <View style={{backgroundColor: '#32252e', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#fff'}}>NuWallet</Text>
    </View>
  );
}

export default App;