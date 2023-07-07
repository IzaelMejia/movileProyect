import { StyleSheet,FlatList, View } from 'react-native'
import React from 'react'
import RenderItemTask from "./RenderItemTask";
import { colors } from '../../Global/Colors'


const index = ({ list, onPressTask}) => {
    return (
        <View style={styles.view2}>
            <FlatList
                data={list}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) => RenderItemTask({ item, onPressTask })}
            />
            {/* {list.map((item) => (
                ))} */}
        </View>
    )
    }

export default index

const styles = StyleSheet.create({
    view2: {
        height: "80%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor:colors.rosa,
    },
})