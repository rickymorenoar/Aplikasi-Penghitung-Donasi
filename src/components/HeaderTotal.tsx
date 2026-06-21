import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Wallet } from 'lucide-react-native';

interface HeaderTotalProps {
  total: number;
  totalSheets: number;
}

export default function HeaderTotal({ total, totalSheets }: HeaderTotalProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleRow}>
        <Wallet color="#71717a" size={16} strokeWidth={2} />
        <Text style={styles.headerTitle}>TOTAL KAS TERHITUNG</Text>
      </View>
      <Text style={styles.totalText}>
        <Text style={styles.currency}>Rp </Text>
        {total.toLocaleString('id-ID')}
      </Text>
      <Text style={styles.subSheets}>{totalSheets} lembar uang dimasukkan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#09090b',
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#18181b',
  },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  headerTitle: { color: '#71717a', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  totalText: { color: '#fafafa', fontSize: 36, fontWeight: '700', marginTop: 8, letterSpacing: -0.5 },
  currency: { color: '#a1a1aa', fontWeight: '400' },
  subSheets: { color: '#a1a1aa', fontSize: 13, marginTop: 4, fontWeight: '400' },
});