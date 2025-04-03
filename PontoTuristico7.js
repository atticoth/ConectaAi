import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, Linking, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico7({ navigation }) {
    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']}
            style={styles.backgroundGradient}
        >
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Fábrica de Cultura</Text>
                        <View style={styles.imageContainer}>
                            <Image source={require('./assets/imagens/galeria/fabrica/fabricadecultura4.jpg')} style={styles.imageLarge} resizeMode="cover" />
                        </View>
                        <Text style={styles.description}>
                            Resultado da parceria do Município com o Estado, a Fábrica de Cultura de Diadema, em fase final de construção, vai oferecer diversos cursos artísticos gratuitos para a população. 
                        </Text>
                        <Text style={styles.description}>
                            Além das aulas, haverá no local um grande auditório, biblioteca e outros espaços culturais.
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
                            onPress={() =>
                                Linking.openURL(
                                "https://maps.app.goo.gl/hKJ15jDZhs4Z6PYK7"
                                )
                            }
                            >
                            <Text style={[styles.buttonText, styles.secondButtonText]}>
                                Localização
                            </Text>
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
        marginLeft: Dimensions.get('window').width * 0.1,
        marginRight: Dimensions.get('window').width * 0.1,
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

export default PontoTuristico7;
