import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetalhesDiadema({ navigation }) {
    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']}
            style={styles.backgroundGradient}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Diadema - SP</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('./assets/imagens/Pracadamoca.jpg')} style={styles.imageLarge} resizeMode="contain" />
                    </View>
                    <Text style={styles.description}>
                        Diadema é um município localizado na região metropolitana de São Paulo, no estado de São Paulo, Brasil. Com uma área de apenas 30,8 km², é um dos menores municípios paulistas em extensão territorial, mas altamente urbanizado e populoso.
                    </Text>
                    <Text style={styles.description}>
                        A história de Diadema começa no século XIX, quando a região era composta por sítios e fazendas. No início do século XX, a chegada de imigrantes italianos e japoneses impulsionou a formação de pequenas vilas. A emancipação de Diadema ocorreu em 8 de dezembro de 1959, desmembrando-se de São Bernardo do Campo. O nome "Diadema" foi inspirado em uma antiga parada de bonde e remete à ideia de "coroa" ou "ornamento", reforçando a identidade do município como algo especial na região.
                    </Text>
                    <Text style={styles.description}>
                        Diadema é uma cidade industrial e comercialmente estratégica, devido à sua localização privilegiada próxima à capital paulista e a grandes rodovias, como a Imigrantes e a Anchieta. A economia local se diversificou ao longo do tempo, com destaque para os setores de serviços, indústria de transformação e comércio. O município tem forte ligação com manifestações culturais, como o samba-rock e o hip-hop, além de ser lar de várias ONGs e movimentos artísticos.
                    </Text>
                    <Text style={styles.description}>
                        Diadema é uma cidade dinâmica, marcada por desafios urbanos e um espírito inovador, destacando-se como um exemplo de resiliência e progresso na Grande São Paulo.
                    </Text>

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.firstButton]}
                        onPress={() => navigation.navigate('AtracoesDiadema')}
                    >
                        <Text style={styles.buttonText}>Atrações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.secondButton]}
                        onPress={() => navigation.navigate('DetailsScreenDiadema')}
                    >
                        <Text style={[styles.buttonText, styles.secondButtonText]}>Pontos Turísticos</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    backgroundGradient: {
        flex: 1,
    },
    container: {
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
        paddingVertical: Dimensions.get('window').height * 0.04,
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
        fontWeight: '100',
        textShadowColor: '#256fb9',
        textShadowOffset: { width: 0.2, height: 0.2 },
        textShadowRadius: 5,
        marginHorizontal: Dimensions.get('window').width * 0.1,
    },
    description: {
        fontSize: 14,
        textAlign: 'justify',
        color: 'white',
        marginVertical: Dimensions.get('window').height * 0.01, // Diminuído o espaçamento vertical
        marginHorizontal: Dimensions.get('window').width * 0.1,
    },
    imageLarge: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        marginBottom: Dimensions.get('window').height * 0.02,
    },
    logoImage: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.1,
        marginVertical: Dimensions.get('window').height * 0.02,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Dimensions.get('window').height * 0.02,
        paddingHorizontal: Dimensions.get('window').width * 0.1,
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
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.3,
    },
    secondButton: {
        backgroundColor: '#0084CA',
        borderColor: 'white',
        borderWidth: 1,
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.46,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white', // Texto do botão "Atrações" em branco
    },
    secondButtonText: {
        color: 'white', // Texto do botão "Pontos Turísticos" em branco
    },
});

export default DetalhesDiadema;
