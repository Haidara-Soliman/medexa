import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import doctor from '../assets/img/doctor .png'
import cardiologist from '../assets/img/Cardiologist.png'
import eye from '../assets/img/eye.png'
const MessageCard = () => {
  const [activeTab, setActiveTab] = useState('Inbox');

  return (
    <LinearGradient colors={['#8b6ecb', '#AE74C0']} style={styles.container}>
      <View style={{marginTop:40,}}>
        <Text style={styles.title}>Messages</Text>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Inbox' && styles.activeTab]}
            onPress={() => setActiveTab('Inbox')}
          >
            <Text style={activeTab === 'Inbox' ? styles.activeTabText : styles.tabText}>Inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Sent' && styles.activeTab]}
            // onPress={() => setActiveTab('Sent')}
          >
            <Text style={activeTab === 'Sent' ? styles.activeTabText : styles.tabText}>Sent</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={ doctor } style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>Dr. Haidara Suliman</Text>
              <Text style={styles.specialty}>Neurologist</Text>
            </View>
          </View>

          <Text style={styles.subject}>Review medical tests</Text>
          <Text style={styles.preview}>I review your medical situation..</Text>

          <View style={styles.footer}>
            <View style={styles.dot} />
            <Text style={styles.time}>an hour ago</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={ cardiologist}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>Dr. Aleen Allosh</Text>
              <Text style={styles.specialty}>Cardiologist</Text>
            </View>
          </View>

          <Text style={styles.subject}>Follow-up on Lab Results</Text>
          <Text style={styles.preview}>I review your medical situation....</Text>

          <View style={styles.footer}>
            <View style={styles.dot} />
            <Text style={styles.time}>four hours ago</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={ eye}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>Dr. Jaafar Aizouki</Text>
              <Text style={styles.specialty}>Ophthalmologist</Text>
            </View>
          </View>

          <Text style={styles.subject}>Color Blindness</Text>
          <Text style={styles.preview}>Unfortunately, you suffer from..</Text>

          <View style={styles.footer}>
            <View style={styles.dot} />
            <Text style={styles.time}>Two days ago</Text>
          </View>
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
    height:'100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    color:'white',
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
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
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
    marginRight: 12,
  },
  info: {
    flexDirection: 'column',
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
    color: '#6e53b4',
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
    backgroundColor: '#6e53b4',
    marginRight: 6,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default MessageCard;
