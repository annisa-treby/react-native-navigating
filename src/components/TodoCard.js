import React, { useState, useReducer } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import VectorIcon from 'react-native-vector-icons/Feather'
import { Divider } from 'react-native-paper';
import { GenreReducer, initialState } from '../reducers/GenreReducer';


const TodoCard =(props)=>{

const {state, dispatch} = useReducer(GenreReducer, initialState);
const {data : {value}, index, handleClickEdit, handleDeleteTodo}=props
const [text, setTodo] = useState(value)
const [editableButton, setEditableButton] = useState(false)
   
const handleClickSave=()=>{
        handleClickEdit({text, index})
        setEditableButton(false)
    }

const handleClick=()=>{
        setEditableButton(true)
    }

const EditIcon = () => <VectorIcon
    name="edit"
    size={24}
    onPress={handleClick}
    />

const SaveIcon = () => <VectorIcon
        name="check-square"
        onPress ={handleClickSave}
    />


return (
    <>
    <View style={styles.container}>
        <TextInput
        selectionColor="purple"
        value={text}
        editable={editableButton}
        onChangeText={(text)=> setTodo(text)}
        />
        <View style={styles.buttonContainer}>
            {
            editableButton ?  <SaveIcon /> :<EditIcon />
            }
            <VectorIcon 
            name="trash"
            size={24}
            onPress={()=>handleDeleteTodo(index)}
            />
        </View>
      </View>
      <Divider />
      </>
    );
}

export default TodoCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input: {
        flex:3,
        backgroundColor:'#fff',
        color: 'purple',
        fontSize:18,
        marginRight : 16
    },
    buttonContainer:{
        
        flexDirection :'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    divider:{
        borderBottomColor:'#aaa',
        borderBottomWidth:1
    }

})
