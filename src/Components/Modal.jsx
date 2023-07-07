import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,           // Propiedad que indica si el modal está visible o no
    setModalVisible,        // Función para cambiar la visibilidad del modal
    taskActive,             // La tarea activa que se muestra en el modal
    onPressStatus           // Función para manejar el estado de la tarea (hecho o no hecho)
}) => {
    return (
        <Modal
            animationType="slide"                           // Tipo de animación al abrir el modal (deslizamiento)
            transparent={true}                              // Hace que el fondo del modal sea transparente
            visible={modalVisible}                          // Indica si el modal está visible o no
            onRequestClose={() => {
                setModalVisible(!modalVisible);             // Función para cerrar el modal al presionar el botón de retroceso
            }}
        >
            <View style={styles.centeredView}>               {/* // Vista que centra el contenido del modal verticalmente */}
                <View style={styles.modalView}>               {/*Vista que contiene el contenido del modal*/}

                    <Text style={styles.modalText}>
                        {taskActive.task}
                    </Text>     {/*Texto que muestra la tarea activa*/}

                    <View style={styles.buttonContainer}>      {/*Contenedor para los botones del modal*/}
                        <Pressable
                            style={[styles.button, styles.buttonDone]}        // Estilos para el botón de "Done"
                            onPress={() => onPressStatus(true)}               // Función para cambiar el estado de la tarea a "hecho"
                        >
                            <Text style={styles.textStyle}>Aceptar</Text>       {/* Texto del botón "Done"*/}
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNotyet]}     // Estilos para el botón de "Not yet"
                            onPress={() => onPressStatus(false)}              // Función para cambiar el estado de la tarea a "no hecho"
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>    {/* Texto del botón "Not yet"*/}
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}      
                            onPress={() => setModalVisible(!modalVisible)}   // Función para cerrar el modal al presionar el botón "Cancel"
                        >
                            <Text style={styles.textStyle}>Cancel</Text>     
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTask;


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonDone: {
        marginLeft:50,
        backgroundColor: "#8fcff7",
    },
    buttonNotyet: {
        backgroundColor: "red",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
