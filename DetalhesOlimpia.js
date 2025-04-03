import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetalhesOlimpia({ navigation }) {
    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']}
            style={styles.backgroundGradient}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Olímpia - SP</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('./assets/imagens/image1.jpeg')} style={styles.imageLarge} resizeMode="contain" />
                    </View>
                    <Text style={styles.description}>
                        Localizada a 430 quilômetros da Capital paulista, a cidade de Olímpia está situada sobre o Aquífero Guarani, em uma região privilegiada do noroeste paulista. O município possui população estimada em 55.075 habitantes (Estimativa IBGE – 2022) e tem se destacado como um dos mais importantes polos turísticos do Estado de São Paulo, tendo conquistado o título de Estância Turística em 2014, com um fluxo médio anual de cerca de 3 milhões de visitantes, além de ser o 1º Distrito Turístico do Brasil, regulamentado pela Lei 17.374/21, do Governo do Estado de São Paulo, mudança que cria melhores condições para a cidade receber investimentos no setor pela iniciativa privada.
                    </Text>
                    <Text style={styles.description}>
                        A economia local teve sua origem na agroindústria e no comércio, mas o turismo é, hoje, a principal pujança econômica do município. Devido aos parques aquáticos e temáticos e à ampla oferta de entretenimento, a cidade é considerada a “Orlando Brasileira”, o que também tem atraído novos investimentos. O município é sede do Parque Aquático Thermas dos Laranjais, considerado o 2º parque aquático mais visitado do mundo e o primeiro do Brasil e da América Latina, e o Hot Beach Olímpia, o 9º mais visitado da América Latina.
                    </Text>
                    <Text style={styles.description}>
                        Além disso, a cidade carrega ainda o título oficial de Capital Nacional do Folclore (Lei Federal Nº 13.566, de 21 de dezembro de 2017), por realizar há quase 60 anos o Festival do Folclore, que, em agosto, reúne grupos de danças e manifestações culturais de todo o Brasil e um público de 160 mil pessoas em 9 dias de evento. A festa nasceu por iniciativa do Professor José Sant'anna (falecido em 1999), com a preocupação de fomentar e preservar as manifestações culturais populares do país. Em 2024, o evento completa 60 anos realizando sua edição, 03 a 11 de agosto de 2024.
                    </Text>

                    {/* Aqui é onde a imagem do logo será inserida */}
                    <Image
                        source={require('./assets/imagens/logocondumax e Incesa.jpg')} // Caminho da imagem do logo
                        style={styles.logoImage} // Estilo da imagem do logo
                        resizeMode="contain"
                    />

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
                        onPress={() => navigation.navigate('DetailsScreenOlimpia')}
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

export default DetalhesOlimpia;
