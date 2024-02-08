import { SafeAreaView, Text, TextInput, Button, StyleSheet, View } from 'react-native'

export default function Contatos() {
    return (
        <SafeAreaView>
            <View>
                <Text>Nome Completo</Text>
                <TextInput placeholder='Alcindo Silva'></TextInput>
            </View>
            <TextInput></TextInput>
            <TextInput></TextInput>
        </SafeAreaView>
    )
}