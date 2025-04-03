import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  {
    id: 1,
    title: 'Olímpia - SP',
    description: 'Descrição Olímpia',
    imageUrl: require('./assets/imagens/image1.jpeg'),
    logoUrl: [
      require('./assets/imagens/condumax.png'),
      require('./assets/imagens/incesa.png'),
    ],
    screen: 'DetalhesOlimpia',
  },
  {
    id: 2,
    title: 'Diadema - SP',
    description: 'Descrição Diadema',
    imageUrl: require('./assets/imagens/Pracadamoca.jpg'),
    logoUrl: [
      require('./assets/imagens/acz-transparente.png'),
      require('./assets/imagens/lbgs-transparente.png'),
      require('./assets/imagens/logfarma-transparente.png'),
    ],
    screen: 'DetalhesDiadema',
  },
  {
    id: 3,
    title: 'Iacanga - SP',
    description: 'Descrição Iacanga',
    imageUrl: require('./assets/imagens/PontosIacanga/igrejamatriz2.jpg'),
    logoUrl: [
      require('./assets/imagens/serve.jpg'),
    ],
    screen: 'DetalhesIacanga',
  },
];

export function HomeScreen() {
  const navigation = useNavigation();

  const handleCardPress = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cidades',
    });
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#0084CA', '#702F8A', '#565294']}
      style={styles.backgroundGradient}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => handleCardPress(item.screen)}
            >
              <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.mainImage} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.sponsorContainer}>
                  {item.logoUrl.map((logo, index) => (
                    <Image
                      key={index}
                      source={logo}
                      style={styles.sponsorLogo}
                      resizeMode="contain"
                    />
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    padding: Dimensions.get('window').width * 0.06,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: Dimensions.get('window').height * 0.1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginBottom: Dimensions.get('window').width * 0.06,
    padding: Dimensions.get('window').width * 0.04,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    minHeight: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').width * 0.8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Dimensions.get('window').width * 0.04,
  },
  mainImage: {
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').width * 0.23,
    borderRadius: Dimensions.get('window').width * 0.5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: Dimensions.get('window').width * 0.02,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  sponsorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Dimensions.get('window').width * 0.08,
  },
  sponsorLogo: {
    width: Dimensions.get('window').width * 0.16,
    height: Dimensions.get('window').width * 0.15,
  },
});

export default HomeScreen;