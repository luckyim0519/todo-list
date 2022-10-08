import React ,{useState} from 'react';
import {
    View, 
    StyleSheet, 
    TextInput,
    Image, 
    TouchableOpacity, 
    TouchableNativeFeedback,
    Platform,
    Keyboard,
} from 'react-native';



function AddTodo({onInsert}) {
    const [text, setText] = useState('');
    const onPress =() =>{
        onInsert(text);
        setText('');
        Keyboard.dismiss();
    };
    
    const button = (
        <View style={styles.buttonStyle}>
            <Image source='/images/add_white.png'/>;
        </View>
    );

  return (
    <View style={styles.block}>
        <TextInput 
            placeholder='type the work you need to do'
            style={styles.input} 
            value={text}
            onChangeText={setText}
            onSubmitEditing={onPress}
            returnKeyType="done"
        />
        <View style={styles.buttonStyle}>
            <Image source='/images/add_white.png' />
        </View>
        {Platform.select({
            ios:(
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                {button}
            </TouchableOpacity>
            ),
            android: (
                <View style={styles.circleWrapper}>
                    <TouchableNativeFeedback onPress={onPress}>
                        {button}
                    </TouchableNativeFeedback>
                </View>
            ),
        })}
    </View>
  );
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        height: 64,
        borderColor: 'black',
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    input:{
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        color: 'grey',
    },
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: 'black',
        borderRadius: 24,
    },
    circleWrapper:{
        overflow: 'hidden',
        borderRadius: 24,
    },
});

export default AddTodo;