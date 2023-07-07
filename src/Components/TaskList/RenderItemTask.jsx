import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../Global/Colors'



const RenderItemTask = ({item, onPressTask}) => {
  return (
        <Pressable onPress={() => onPressTask(item)}>   {/* Componente de pulsación para manejar el evento de pulsación */}
            <View
                style={item.completed ? styles.taskCompleted : styles.task}    //  condicional para la vista de la tarea
                key={item.id}
            >
                <Text style={styles.taskText}>{item.task}</Text>   {/* Texto que muestra la tarea */}
            </View>
        </Pressable>
  )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: 200,
        padding: 10,
        backgroundColor: colors.morado,
        borderRadius: 4,
        borderBottomWidth: 3,
        marginBottom: 15,
    },
    taskCompleted: {
        width: 200,
        padding: 10,
        backgroundColor: "#8fcff7",
        borderRadius: 6,
        borderColor: "#fff",
        borderBottomWidth: 3,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
    },
})