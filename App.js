import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-reanimated';
import { LoadingScreen } from './LoadingScreen';
import { HomeScreen } from './HomeScreen';
import { DetailsScreenOlimpia } from './DetailsScreenOlimpia';
import { DetailsScreenDiadema } from './DetailsScreenDiadema';
import { DetailsScreenIacanga } from './DetailsScreenIacanga';
import { DetalhesOlimpia } from './DetalhesOlimpia';
import { DetalhesDiadema } from './DetalhesDiadema';
import { DetalhesIacanga } from './DetalhesIacanga';
import { PontoTuristico1 } from './PontoTuristico1';
import { PontoTuristico2 } from './PontoTuristico2';
import { PontoTuristico3 } from './PontoTuristico3';
import { PontoTuristico4 } from './PontoTuristico4';
import { PontoTuristico5 } from './PontoTuristico5';
import { PontoTuristico6 } from './PontoTuristico6';
import { PontoTuristico7 } from './PontoTuristico7';
import { PontoTuristico8 } from './PontoTuristico8';
import { PontoTuristico9 } from './PontoTuristico9';
import { PontoTuristico10 } from './PontoTuristico10';
import { PontoTuristico11 } from './PontoTuristico11';
import { PontoTuristico12 } from './PontoTuristico12';
import { PontoTuristico13 } from './PontoTuristico13';
import { PontoTuristico14 } from './PontoTuristico14';
import { PontoTuristico15 } from './PontoTuristico15';
import { PontoTuristico16 } from './PontoTuristico16';
import { PontoTuristico17 } from './PontoTuristico17';
import { MapScreen1 } from './MapScreen1';
import { MapScreen2 } from './MapScreen2';
import { MapScreen3 } from './MapScreen3';
import { MapScreen4 } from './MapScreen4';
import { MapScreen5 } from './MapScreen5';
import { MapScreen6 } from './MapScreen6';
import { AtracoesOlimpia } from './AtracoesOlimpia.js';
import { AtracoesDiadema } from './AtracoesDiadema.js';
import { AtracoesIacanga } from './AtracoesIacanga.js';





const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetalhesOlimpia" component={DetalhesOlimpia} options={{ title: 'Detalhes sobre Olímpia - SP' }} />
        <Stack.Screen name="DetalhesDiadema" component={DetalhesDiadema} options={{ title: 'Detalhes sobre Diadema - SP' }} />
        <Stack.Screen name="DetalhesIacanga" component={DetalhesIacanga} options={{ title: 'Detalhes sobre Iacanga - SP' }} />
        <Stack.Screen name="DetailsScreenOlimpia" component={DetailsScreenOlimpia} options={{ title: 'Detalhes sobre Olímpia - SP' }} />
        <Stack.Screen name="DetailsScreenDiadema" component={DetailsScreenDiadema} options={{ title: 'Detalhes sobre Diadema - SP' }} />
        <Stack.Screen name="DetailsScreenIacanga" component={DetailsScreenIacanga} options={{ title: 'Detalhes sobre Iacanga - SP' }} />
        <Stack.Screen name="AtracoesOlimpia" component={AtracoesOlimpia} options={{ title: 'Atrações turísticas' }} />
        <Stack.Screen name="AtracoesIacanga" component={AtracoesIacanga} options={{ title: 'Atrações turísticas' }} />
        <Stack.Screen name="AtracoesDiadema" component={AtracoesDiadema} options={{ title: 'Atrações turísticas' }} />
        <Stack.Screen name="PontoTuristico1" component={PontoTuristico1} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico2" component={PontoTuristico2} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico3" component={PontoTuristico3} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico4" component={PontoTuristico4} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico5" component={PontoTuristico5} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico6" component={PontoTuristico6} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico7" component={PontoTuristico7} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico8" component={PontoTuristico8} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico9" component={PontoTuristico9} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico10" component={PontoTuristico10} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico11" component={PontoTuristico11} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico12" component={PontoTuristico12} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico13" component={PontoTuristico13} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico14" component={PontoTuristico14} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico15" component={PontoTuristico15} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico16" component={PontoTuristico16} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico17" component={PontoTuristico17} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen1" component={MapScreen1} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen2" component={MapScreen2} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen3" component={MapScreen3} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen4" component={MapScreen4} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen5" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen6" component={MapScreen6} options={{ title: 'Localização' }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



