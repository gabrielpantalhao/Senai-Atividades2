import { SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function Cursos() {
    return (
        <SafeAreaView style={styles.styleCursos}>
            <Text>Cursos</Text>
            <Text>Técnico em Desenvolvimento de Sistemas</Text>
            <Text>Focado em programas de linguagem WEB e Mobile. Trabalha alguns tipo de linguagem SQL e montagem de banco de dados em geral, também trabalha-se com repositórios em Núvem  como o GitHub.</Text>

            <Text>Eletrcista de Manutenção Eletroeletrônica</Text>
            <Text>Com o foco em desenvolver esquemas elétricos e automatizados, utilizando eletropneumática e eletroeletrônica. Neste curso de Aprendizagem Industrial também é incluso a integração ao mundo de eletrônica Digital e Analógica.</Text>

            <Text>Excel</Text>
            <Text>Neste curso é ensinado desde o básico até o avançado em Excel, criando Tabelas, gráficos, gerando grades automáticas de renda, multiplicadores e resultantes finais de tabela.</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleCursos: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
})