import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native';

const consultation = () => {
    const [text, setText] = useState('');
  return (
   <LinearGradient colors={['#8b6ecb', '#AE74C0']} style={{height:'100%',}}>
    <View style={styles.container}>
      <TextInput
        style={styles.card}
        multiline={true}
        numberOfLines={4}
        placeholder="Type your status here..."
        value={text}
        onChangeText={setText}
      />
    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
    </View>
  
   </LinearGradient>
  );
}

export default consultation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems:'center',
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
     // ensures text starts at the top
  },
    card: {
    display:'flex',
    alignItems:'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    width:'90%',
    height:'50%',
    textAlignVertical: 'top',
  },
  button: {
        width:100,
        height:50,
		// flexDirection: "row",
		backgroundColor: "#6e53b4",
		// padding: 12,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		// marginLeft: 5,
		// padding: 5,
	},
})