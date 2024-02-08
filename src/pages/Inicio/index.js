import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, View } from 'react-native'

const logo = require('../../../assets/senai-logo.png')

export default function Inicio() {
    return (
        <SafeAreaView style={styles.styleInicio}>
            <View style={styles.styleImage}>
                <Image source={logo} style={{width:400, height:110}}></Image>
            </View>
            <Text>Gabriel Augusto Lopes Pantalhão</Text>
            <Text>Sumaré, 30/01/2024</Text>
            <Text>Escola SENAI Celso Charuri</Text>
            <Text>Técnico em Desenvolvimento de Sistemas</Text>
            <Text>INDMO - Interface para Dispositivos Móveis</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleInicio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleImage:{
        bottom: 200
    }
})