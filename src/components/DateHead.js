import React from 'react';
import {StatusBar, View, StyleSheet, Text} from 'react-native';


function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (
        <>
        <StatusBar backgroundColor='black' />
        <View style={styles.block}>
            <Text style={styles.dateText}>
                {year}-{month}-{day}
            </Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    block:{
        padding: 16,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    dateText:{
        fontSize: 24,
        color: 'white',
        
    },
});

export default DateHead;