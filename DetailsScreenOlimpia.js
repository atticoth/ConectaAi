import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetailsScreenOlimpia({ navigation }) {
    const handleImagePress = (imageName) => {
        let screenName = '';

        // Definindo a tela de destino com base no nome da imagem
        switch (imageName) {
            case 'imagem1':
                screenName = 'PontoTuristico1';
                break;
            case 'imagem2':
                screenName = 'PontoTuristico2';
                break;
            case 'imagem3':
                screenName = 'PontoTuristico3';
                break;
            case 'imagem4':
                screenName = 'PontoTuristico4';
                break;
            case 'imagem5':
                screenName = 'PontoTuristico5';
                break;
            case 'imagem6':
                screenName = 'PontoTuristico6';
                break;
            default:
                screenName = 'HomeScreen'; // Tela padrão, se necessário
                break;
        }

        // Navegar para a tela correspondente
        navigation.navigate(screenName);
    };

    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']}
            style={styles.backgroundGradient}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Pontos Turísticos</Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imageColumn}>
                        <TouchableOpacity onPress={() => handleImagePress('imagem1')}>
                            <Image
                                source={require('./assets/imagens/pontos/destaques/imagem1.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleImagePress('imagem2')}>
                            <Image
                                source={require('./assets/imagens/pontos/destaques/imagem2.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleImagePress('imagem3')}>
                            <Image
                                source={require('./assets/imagens/pontos/destaques/imagem3.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageColumn}>
                        <TouchableOpacity onPress={() => handleImagePress('imagem4')}>
                            <Image
                                source={require('./assets/imagens/pontos/destaques/imagem4.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleImagePress('imagem5')}>
                            <Image
                                source={require('./assets/imagens/pontos/destaques/imagem5.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleImagePress('imagem6')}>
                            <Image
                                source={require('./assets/imagens/pontos/destaques/imagem6.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 33,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
        textShadowColor: 'rgba(55, 14, 67, 1)',
        textShadowOffset: { width: 0.2, height: 0.2 },
        textShadowRadius: 5,
        fontWeight: '100',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    imageColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.2,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 10,
    },
});

export default DetailsScreenOlimpia;


