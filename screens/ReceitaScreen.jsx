import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Title, Paragraph, Card } from 'react-native-paper';

export default function ReceitaScreen({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: receita.imagem }} 
        style={styles.image} 
      />
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{receita.nome}</Title>
          <Paragraph style={styles.info}>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
          <Paragraph style={styles.info}>Porções: {receita.porcoes}</Paragraph>
          
          <Title style={styles.subtitle}>Ingredientes</Title>
          {receita.ingredientes.map((ingrediente, index) => (
            <Paragraph key={index} style={styles.item}>• {ingrediente}</Paragraph>
          ))}
          
          <Title style={styles.subtitle}>Modo de Preparo</Title>
          {receita.modoPreparo.map((passo, index) => (
            <Paragraph key={index} style={styles.item}>{passo}</Paragraph>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 250,
  },
  card: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#555',
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 3,
    color: '#444',
  },
});