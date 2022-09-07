import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Stack(props) {
    return (
        <View style={styles.container}>

            <View style={styles.logo}>
                <Image
                    style={styles.img}
                    source={require('../Page/fuel-high.png')}
                />
                <Text style={styles.txtImg}>Compensa usar: {props.result}</Text>
            </View>

            <View style={styles.calc}>
                <Text style={styles.txtCalc}>
                    Preço Álcool: R$ {props.alcool}
                </Text>
                <Text style={styles.txtCalc}>
                    Preço Gasolina: R$ {props.gasolina}
                </Text>
            </View>

            <TouchableOpacity style={styles.btnCalcular} onPress={props.fechar}>
                <Text style={styles.txtBtn}>Recalcular</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161A1D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    img: {
        height: 150,
        width: 150,
        //marginTop: -50,
    },
    txtImg: {
        fontSize: 25,
        marginTop: 50,
        color: '#25a244',
        fontWeight: 'bold'
    },
    calc:{
        //flexDirection: 'row',
        marginBottom: 30,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtCalc:{
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
        padding: 15
    },
    btnCalcular: {
        width: '70%',
        //backgroundColor: '#BA181B',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E5383B'
    },
    txtBtn: {
        color: '#E5383B',
        fontSize: 20,
        fontWeight: 'bold'
    }
})