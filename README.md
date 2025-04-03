# conecta-mundo-react

## Versões utilizadas para execução do projeto

Installar o NodeJS versão 18.20.4 (LTS - Long Term Support) 
* https://nodejs.org/en/blog/release/v18.20.4 

Projeto desenvolvido React utilizando Expo saiba mais em:
* https://expo.dev/
* https://docs.expo.dev/
  
Comandos para verificar as versões e versões utilizadas para executar e buildar o projeto
    
    node -v
    v18.20.4
    
    npx --version
    10.8.2

    npm --version
    10.8.2

    expo --version
    6.3.12

Se necessário, instalar as versões acima, exemplos:    

    npm install -g npm@10.8.2
    npm install -g expo-cli@6.3.12


## Resetando o projeto antes de executar

Limpa o cache do NPM

    npm cache clean --force

Remove a pasta node_modules para recriar os modulos baseado nas dependencias (comando powershell)

    Remove-Item -Recurse -Force node_modules

Resinstala as dependencias

    npm install

## Executando o projeto

    npx expo start

Uma vez com o expo server iniciado, escanear o QR code emitido com o Expo Go do celular

O projeto usa o Expo versão 50 dessa forma a versão do Expo Go precisa ser a mesma e pode ser obtida em:

* https://expo.dev/go?sdkVersion=50&platform=android&device=true

## Gerando a build

Build para plataforma Android

    eas build --platform android


Build para plataforma iOS

    eas build --platform ios


## Sequencia

1 - Ajustar tela Home para incluir cidade de iacanga
2 - Tela Detalhes iacanga
3 - Tela Pontos Turisticos (DetailsScreen)
4 - Incluir cada ponto turistico
5 - Tela de Atrações