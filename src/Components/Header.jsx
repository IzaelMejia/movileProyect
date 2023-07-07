import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Image,
    TouchableOpacity 
} from "react-native";
import React from "react";
import Colors, { colors } from "../Global/Colors"

const Header = ({
    input,
    setInput,
    onAddTask
}) => {
    return (
        <View style={styles.view1}>   
            <Image 
                source={require('./logoVeterinaria.png')} 
                style={styles.logo}
            />                     
            <TextInput                                      // Campo de entrada de texto
                placeholder="Producto"                 // Texto de marcador de posición
                style={styles.input}                        // Estilo para el campo de entrada
                value={input}                               // Valor del campo de entrada
                onChangeText={setInput}                     // Función para manejar el cambio de texto del campo de entrada
            />
            <TouchableOpacity                               // Componente de pulsación con opacidad
                style={styles.button}                        // Estilo para el botón
                onPress={onAddTask}                          // Función para manejar la acción de pulsación del botón
            >
                <Text style={styles.buttonText}>Agregar</Text>  
            </TouchableOpacity>
        </View>
    );
};


export default Header;

const styles = StyleSheet.create({
    view1: {
        height: "20%",
        justifyContent: "center",
        backgroundColor: colors.morado,
        alignItems:"center",
        width:"100%",
        flexDirection:"column"
    },
    logo: {
        marginTop:3,
        width: 200,
        height: 60,
    },
    input: {
        width: 250,
        height: 35,
        borderBottomColor: "deepskyblue",
        borderBottomWidth: 3,
        color: "#fff",
        fontSize: 20,
    },
    button: {
        
        backgroundColor: '#FF3B82',
        borderRadius: 7,
        height: 35,
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginTop:3,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    },
});
