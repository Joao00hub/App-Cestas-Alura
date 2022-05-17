import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';

function Cesta({topo, detalhes}) {
  return (
    <>
      <Topo {...topo} />
      <View style={styles.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Cesta;
