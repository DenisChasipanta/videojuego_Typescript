import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/components/Game';

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Game />
    </GestureHandlerRootView>
  );
}

// import { PaperProvider } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <PaperProvider>
//         <StackNavigator/>
//       </PaperProvider>
//     </NavigationContainer>
//   )
// }

// export default App;