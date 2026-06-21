import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderTotalProps {
  total: number;
  totalSheets: number;
}

export default function HeaderTotal({ total, totalSheets }: HeaderTotalProps) {
  return (
    <View style={styles.headerCard}>
      <View style={styles.blurOverlay} />
      <Text style={styles.headerTitle}>TOTAL DONASI TERKUMPUL</Text>
      <Text style={styles.totalText}>
        <Text style={styles.currency}>Rp </Text>
        {total.toLocaleString('id-ID')}
      </Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>⚡ {totalSheets} Lembar Uang Terhitung</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerCard: {
    backgroundColor: '#065f46',
    paddingTop: 40,
    paddingBottom: 28,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  blurOverlay: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#34d399',
    opacity: 0.2,
  },
  headerTitle: { color: '#a7f3d0', fontSize: 12, fontWeight: '700', letterSpacing: 1.5, opacity: 0.8 },
  totalText: { color: '#ffffff', fontSize: 38, fontWeight: '900', marginTop: 8, letterSpacing: -0.5 },
  currency: { color: '#34d399', fontSize: 24, fontWeight: '700' },
  badge: {
    backgroundColor: 'rgba(4, 120, 87, 0.6)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#059669',
  },
  badgeText: { color: '#34d399', fontSize: 12, fontWeight: '600' },
});