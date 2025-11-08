import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import doctor from '../assets/img/doctor .png'
import cardiologist from '../assets/img/Cardiologist.png'
import eye from '../assets/img/eye.png'
const MessageCardD = () => {
  const navConsultation = useNavigation();

  return (
    <LinearGradient colors={['#8b6ecb', '#AE74C0']} style={styles.container}>
      <View>
        <Text
                style={{
                  fontSize: 30,
                  fontWeight: "500",
                  color: "#8b6ecb",
                  marginTop: 10,
                  textAlign:'center',
                  }}>Doctors</Text>

        <View style={styles.card}>
            <Image source={ doctor } style={styles.avatar}/>
            
              <Text style={styles.name}>Dr. Haidara Suliman</Text>
              <Text style={styles.specialty}>Neurologist</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quisquam doloribus! Porro obcaecati deserunt,</Text>
             <TouchableOpacity
                      
                      onPress={() => navConsultation.navigate("consultation")}>
                      <Text style={{color:'#8b6ecb',fontWeight:'bold',textDecorationLine:'underline',}}>Send Consultation</Text>
                    </TouchableOpacity>
          

        </View>

        <View style={styles.card}>
            <Image source={cardiologist}style={styles.avatar}/>
              <Text style={styles.name}>Dr. Aleen Allosh</Text>
              <Text style={styles.specialty}>Neurologist</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus, odio non sunt, sed minima commodi</Text>
                  <TouchableOpacity
                      
                      onPress={() => navConsultation.navigate("consultation")}>
                      <Text style={{color:'#8b6ecb',fontWeight:'bold',textDecorationLine:'underline',}}>Send Consultation</Text>
                    </TouchableOpacity>
        </View>
          

        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#eee',
  },
  activeTab: {
    backgroundColor: '#6e53b4',
  },
  tabText: {
    color: '#333',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    display:'flex',
    justifyContent:'center',
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
    height:'40%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
 
  
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  specialty: {
    fontSize: 14,
    color: '#888',
  },
  subject: {
    fontSize: 15,
    color: '#6a1b9a',
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6a1b9a',
    marginRight: 6,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  text:{
      padding:20,
  },
});

export default MessageCardD;
