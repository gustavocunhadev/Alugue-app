import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Category({ cover, name }) {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image
                    source={cover}
                    style={styles.cover}
                />

                <Text style={styles.name}>
                    {name}
                </Text>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
        justifyContent: 'center'
    },
    cover: {
        borderRadius: 10,
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    center:{
        flex: 1,
        alignItems: 'center',
    },
    name: {
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
        marginTop: 5,
    }

})
