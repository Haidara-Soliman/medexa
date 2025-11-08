import { StyleSheet, Image, View, Text } from 'react-native'
import medical from '../assets/img/medical.png'

const Splach = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cont}>
                <Image source={medical} style={styles.img}></Image>
            </View>
        </View>
    )
}

export default Splach

const styles = StyleSheet.create({
    cont: {
        // display:'flex',
        // justifyContent:"center",
        // alignItems:"center",
        // width:"90%",
        // height:"60%",
        // backgroundColor:"red",
        // borderRadius:10,
    },
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },

    img: {
        width: 300,
        height: 300,
        borderRadius: 50,

    }
})