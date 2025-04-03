import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetailsScreenIacanga({ navigation }) {
    const handleImagePress = (imageName) => {
        let screenName = '';

        switch (imageName) {
            case 'imagem1':
                screenName = 'PontoTuristico13';
                break;
            case 'imagem2':
                screenName = 'PontoTuristico14';
                break;
            case 'imagem3':
                screenName = 'PontoTuristico15';
                break;
            case 'imagem4':
                screenName = 'PontoTuristico16';
                break;
            case 'imagem5':
                screenName = 'PontoTuristico17';
                break;
            default:
                screenName = 'HomeScreen';
                break;
        }

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
                    <View style={styles.imageRow}>
                        <TouchableOpacity onPress={() => handleImagePress('imagem1')}>
                            <Image
                                source={require('./assets/imagens/PontosIacanga/centrocultural3.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleImagePress('imagem4')}>
                            <Image
                                source={require('./assets/imagens/PontosIacanga/lago6.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageRow}>
                        <TouchableOpacity onPress={() => handleImagePress('imagem2')}>
                            <Image
                                source={require('./assets/imagens/PontosIacanga/presbiteriana4.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleImagePress('imagem5')}>
                            <Image
                                source={require('./assets/imagens/PontosIacanga/igrejamatriz6.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageRow}>
                        <TouchableOpacity onPress={() => handleImagePress('imagem3')}>
                            <Image
                                source={require('./assets/imagens/PontosIacanga/rosas1.jpg')}
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.2,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 10,
    },
});

export default DetailsScreenIacanga;