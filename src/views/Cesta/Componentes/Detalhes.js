import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Texto from '../../../components/Texto';

function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={logoFazenda} style={styles.imageFazenda} />
        <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>

      <TouchableOpacity style={styles.botao}>
        <Texto styles={styles.textosBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },

  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },

  imageFazenda: {
    width: 48,
    height: 48,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 40,
    marginLeft: 12,
  },

  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },

  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 7,
    elevation: 4,
  },

  textosBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});

export default Detalhes;
