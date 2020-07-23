import React, { useState, useEffect, useReducer } from 'react';
import { View, StyleSheet, Text, ToastAndroid, Modal, ScrollView } from 'react-native';
import { getAllGenres, updateGenres, createGenre, deleteGenre } from '../services/GenreService';
import TodoCard from '../components/TodoCard';
import Input from '../components/InLineInputAndButton'
import { FAB } from 'react-native-paper';
import {GenreReducer, initialState} from '../reducers/GenreReducer'
import { SET_LOADING, FETCH_COMPLETE, HANDLE_INPUT_CHANGE } from '../reducers/Actions';

const GenreScreen=(props)=>{
    const {state, dispatch} = useReducer(GenreReducer, initialState)
    const {genres} = state

    const setLoading=()=>dispatch({type:SET_LOADING})
    const fetchComplete=(payload)=>dispatch({type:FETCH_COMPLETE, payload})
    const handleChangeText=(inputName, inputValue)=>dispatch({type:HANDLE_INPUT_CHANGE, payload:{inputName, inputValue}})

    const[localState, setLocalState]=useState({loading:false, action:'list'})
    const[text, setText] = useState('')
    const[modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{

        setLoading();
        getAllGenres().then((response)=>{
            fetchComplete(response.content)
        })

    },[localState.action])

    // const handleChangeText = (text) => {
    //     setText(text)
    // }

    const handleAddButton = (text) => {
        createGenre({type: text})
            .then(response => {
                if (response.status == 200) {
                    setLocalState({ action: 'create' });
                    showToast("genre successfully created");
                    setModalVisible(false);
                }
            })
    };

    const handleDeleteTodo = (id) => {
        deleteGenre(id)
            .then(response => {
                if(response.status.code===200)
                setLocalState({ action: 'delete' });
                showToast("Delete Success")

            })
    }

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

    const handleClickEdit = async({text : type, index : id})=>{

       updateGenres({id, type})
       .then((response)=>{
           if(response.status === 200){
               setLocalState({action:'update'});
               showToast("Data successfully updated");
           }
       })
    }

    return(
        <View style={styles.container}>
            { localState.loading ? <Text>Loading ...</Text> :
            <ScrollView>
                {
                genres.map((item, index) =>{
                    return (<TodoCard
                    key={index}
                    index={item.id}
                    data={{value : item.type}}
                    handleClickEdit={handleClickEdit}
                    handleDeleteTodo={handleDeleteTodo}
                    />)
                })
                }
                </ScrollView>
            }

            <FAB
            style={styles.plusBtn}
            small
            icon="plus"
            onPress={()=> setModalVisible(true)}
            />
            <Modal
                style={styles.centeredModal}
                visible={modalVisible}
                animationType="fade"
                presentationStyle="overFullScreen"
                >
            <Input
                text={text}
                handleChangeText={handleChangeText}
                handleAddButton={handleAddButton}
                name="Create"
                placeholder="Enter genre name"
                mode="contained"
                style={styles.modalView}
                />
            </Modal>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    plusBtn : {
        position:'absolute',
        margin:16,
        bottom:0,
        right:0,
    },
    centeredModal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalView:{
        backgroundColor:'#aaa',
        borderRadius:8,
        padding:16,
        alignItems:"center",
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        }
    }
})

export default GenreScreen
