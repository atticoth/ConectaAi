import * as React from 'react';
import { useEffect } from 'react';
import { Image, ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function LoadingScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen');
        }, 4000);
    }, []);

    return (
        <LinearGradient colors={['#0084CA', '#702F8A', '#565294']} style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={require('./assets/imagens/capaapp.jpg')} style={styles.image} resizeMode="stretch" />
            </View>
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator size="large" color="white" />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - Dimensions.get('window').height * 0.12,
    },
    activityIndicatorContainer: {
        position: 'absolute',
        bottom: Dimensions.get('window').height * 0.01,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
});

export default LoadingScreen;
