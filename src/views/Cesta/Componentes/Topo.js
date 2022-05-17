import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import topo from '../../../../assets/topo.png';
import Texto from '../../../components/Texto';

const width = Dimensions.get('screen').width;

function calculaAltura(altura, largura) {
  return (altura / largura) * width;
}

function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: calculaAltura(578, 768),
  },

  titulo: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Topo;
