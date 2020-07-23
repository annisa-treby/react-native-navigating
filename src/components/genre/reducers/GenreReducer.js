import { HANDLE_INPUT_CHANGE, FETCH_COMPLETE, HANDLE_EDIT_BUTTON, RESET_FORM, SET_LOADING } from "./Actions"

const defaultValue = {
    id: '',
    type: ''
}

const initialState = {
    form : {...defaultValue},
    genres :[],
    isLoading : false
}

function GenreReducer (state, action) {
    const {type, payload} = action

    switch(type) {
        case SET_LOADING :
            return {...state, isLoading: true}

        case HANDLE_INPUT_CHANGE :
            const {inputName, inputValue} = payload
            const form = {...state.form}
            form[inputName]=inputValue
            return{...state, form: {...form}}

        case FETCH_COMPLETE :
            return {...state, isLoading: false, genres:[...payload]}

        case SUBMIT_COMPLETE :
            return {...state, isLoading : false, form : {...defaultValue}}

        case HANDLE_EDIT_BUTTON :
            return {...state, form : state.genres.find((genre) => genre.id === payload)}

        case RESET_FORM :
            return {...state, form : {...defaultValue}}
        default :
            return {...state}

    }

}
export{GenreReducer, initialState}
