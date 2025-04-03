import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico3({ navigation }) {
    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']}
            style={styles.backgroundGradient}
        >
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Deusa NIKKI e a Irmanação de Olimpia</Text>
                        <View style={styles.imageContainer}>
                            <Image source={require('./assets/imagens/galeria/3/imagem1.jpg')} style={styles.imageLarge} resizeMode="cover" />
                        </View>
                        <Text style={styles.description}>
                            Segundo relatos da história, Deusa Nikki, conhecida também como a Deusa Vitória, é uma obra do escultor Peônio (Paionios), nascido em Mende, na Macedônia, que foi esculpida em celebração à vitória de Messênios e Naupactianos sobre os Espartanos, em meados do ano 420 a.C. durante a Guerra da Arquidâmia, como foi intitulada a primeira parte da Guerra do Peloponeso, motivada pela batalha entre os povos em busca da expansão territorial.A obra original foi encontrada em dezembro de 1875, durante escavações no sítio arqueológico da Olympia Antiga, em frente ao lado sudeste do Templo de Zeus, e, desde 1994, ocupa uma sala especial do Museu Arqueológico da cidade. O monumento completo, com o pedestal, possui quase 11 metros de altura, sugerindo a ideia da Deusa Nikki descendo em triunfo do Monte Olimpo, morada dos deuses, dominando os elementos da natureza e proclamando a vitória.
                            A simbologia diz que Deusa Nikki desce dos céus e toca seu pé esquerdo sobre a cabeça do ser humano que conquista uma vitória. A imagem reflete o corpo inclinado para frente, com o manto esvoaçante, abrindo suas asas, e o pé direito descansando sobre uma águia, símbolo de Zeus.
                            Desde 2004, quando os Jogos Olímpicos foram celebrados em Atenas, sua imagem vem sendo cunhada nas medalhas de ouro, prata e bronze das Olimpíadas.

                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.firstButton]}
                            onPress={() => navigation.navigate('AtracoesOlimpia')}
                        >
                            <Text style={styles.buttonText}>Atrações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.secondButton]}
                            onPress={() => navigation.navigate('MapScreen3')}
                        >
                            <Text style={[styles.buttonText, styles.secondButtonText]}>Localização</Text>
                        </TouchableOpacity>
                    </View>
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
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Dimensions.get('window').height * 0.01,
        paddingBottom: Dimensions.get('window').height * 0.01,
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
        fontWeight: '100',
        textShadowColor: 'rgba(55, 14, 67, 1)',
        textShadowOffset: { width: 0.2, height: 0.2 },
        textShadowRadius: 5,
        marginLeft: Dimensions.get('window').width * 0.03,
        marginRight: Dimensions.get('window').width * 0.03,
    },
    description: {
        fontSize: 14,
        textAlign: 'justify',
        color: 'white',
        marginBottom: Dimensions.get('window').height * 0.03,
        marginLeft: Dimensions.get('window').width * 0.1,
        marginRight: Dimensions.get('window').width * 0.1,
    },
    imageLarge: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.36,
        marginBottom: Dimensions.get('window').height * 0.03,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height * 0.04,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginHorizontal: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 1,
        paddingHorizontal: 20,
    },
    firstButton: {
        backgroundColor: '#0084CA',
        borderColor: 'white',
        borderWidth: 1,
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.30,
    },
    secondButton: {
        backgroundColor: '#0084CA',
        borderColor: 'white',
        borderWidth: 1,
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.37,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    secondButtonText: {
        color: 'white',
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Dimensions.get('window').height * 0.02,
        paddingHorizontal: Dimensions.get('window').width * 0.1,
    },
    imageSmall: {
        width: Dimensions.get('window').width * 0.25, // Ajuste o tamanho conforme necessário
        height: Dimensions.get('window').height * 0.15, // Ajuste o tamanho conforme necessário
        marginBottom: Dimensions.get('window').height * 0.01,
    },
});

export default PontoTuristico3;
