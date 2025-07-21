import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const newsCards = [
  { title: 'World News', summary: 'Global headlines covering key international events in under 200 words.' },
  { title: 'India News', summary: 'Top Indian stories and trending updates, summarized short for quick reading.' },
  { title: 'Tech & Science', summary: 'New tech and science breakthroughs, simplified for daily insight.' }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Swiper
        cards={newsCards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.summary}>{card.summary}</Text>
          </View>
        )}
        cardIndex={0}
        backgroundColor="#f0f0f0"
        stackSize={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: '#fff' },
  card: {
    flex: 0.75,
    borderRadius: 16,
    padding: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'center'
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  summary: { fontSize: 16, color: '#555', lineHeight: 22 }
});
npm install -g eas-cli
npm install
eas build -p android
