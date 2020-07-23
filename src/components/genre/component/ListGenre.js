import React, {useReducer} from "react";
import {ScrollView, Text, View} from "react-native";
import {GenreReducer, initialState} from "../reducers/GenreReducer";

function ListGenre() {
    const [state, dispatch] = useReducer(GenreReducer, initialState)
    const {genres, isLoading} = state

return(
    <View>
        <View>
            <Text>List Genre</Text>
        </View>
        <ScrollView>

        </ScrollView>
    </View>
)
}
export default ListGenre
