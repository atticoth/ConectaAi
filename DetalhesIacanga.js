import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetalhesIacanga({ navigation }) {
    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']}
            style={styles.backgroundGradient}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Iacanga - SP</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('./assets/imagens/igrejamatriz3.jpg')} style={styles.imageLarge} resizeMode="contain" />
                    </View>
                    <Text style={styles.description}>
                    Iacanga é um município localizado no interior do estado de São Paulo, na região administrativa de Bauru. Com uma população estimada em cerca de 12 mil habitantes (de acordo com o último Censo IBGE), a cidade é conhecida por sua tranquilidade, paisagens naturais e eventos culturais.
                    </Text>
                    <Text style={styles.description}>
                    A história de Iacanga remonta ao início do século XX, quando era uma pequena povoação situada nas margens do rio Tietê. Seu nome tem origem indígena, possivelmente do tupi, significando "terra molhada" ou "lugar alagadiço". O município se desenvolveu inicialmente com a agricultura, sendo o cultivo de café uma das principais atividades econômicas. Com o tempo, a cidade diversificou suas atividades, incluindo pecuária e, mais recentemente, o turismo ecológico.
                    </Text>
                    <Text style={styles.description}>
                        Iacanga foi elevada à categoria de município em 1948, desmembrando-se de Avaí. 
                    </Text>
                    <Text style={styles.description}>
                        A cidade possui uma rica biodiversidade, com destaque para a flora e fauna típicas da região do Cerrado e da Mata Atlântica. O rio Tietê desempenha um papel importante na identidade do município, sendo uma fonte de lazer e inspiração para os moradores.
                    </Text>
                    <Text style={styles.description}>
                        Iacanga é conhecida nacionalmente por abrigar o "Festival de Águas Claras", que aconteceu na cidade em diferentes edições nas décadas de 1970 e 1980. O festival ficou conhecido como o "Woodstock Brasileiro", reunindo milhares de pessoas e artistas renomados da música brasileira. 
                    </Text>
                    <Text style={styles.description}>
                        Embora seja uma cidade pequena, Iacanga enfrenta desafios comuns a municípios do interior, como a necessidade de diversificar ainda mais sua economia e investir em infraestrutura. No entanto, sua riqueza natural e herança cultural são grandes trunfos para o desenvolvimento sustentável e para atrair visitantes.
                    </Text>
                    

                  

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.firstButton]}
                        onPress={() => navigation.navigate('AtracoesIacanga')}
                    >
                        <Text style={styles.buttonText}>Atrações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.secondButton]}
                        onPress={() => navigation.navigate('DetailsScreenIacanga')}
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

export default DetalhesIacanga;
