import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { DonationHistory } from '../types';

interface HistoryListProps {
  history: DonationHistory[];
  onClear: () => void;
}

export default function HistoryList({ history, onClear }: HistoryListProps) {
  if (history.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.historyHeader}>
        <Text style={styles.title}>Riwayat Dana Masuk</Text>
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.clearText}>Hapus Semua</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {history.map((item) => (
          <View key={item.id} style={styles.historyCard}>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.amountText}>Rp {item.total.toLocaleString('id-ID')}</Text>
            <Text style={styles.detailsText}>✅ Sukses Diarsipkan</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20, paddingHorizontal: 16, marginBottom: 10 },
  historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { color: '#94a3b8', fontSize: 14, fontWeight: '700', letterSpacing: 0.5 },
  clearText: { color: '#ef4444', fontSize: 12, fontWeight: '600' },
  scroll: { flexDirection: 'row' },
  historyCard: {
    backgroundColor: '#1e293b',
    padding: 14,
    borderRadius: 16,
    marginRight: 12,
    width: 170,
    borderWidth: 1,
    borderColor: '#334155',
  },
  dateText: { color: '#64748b', fontSize: 11, fontWeight: '500' },
  amountText: { color: '#34d399', fontSize: 16, fontWeight: '800', marginTop: 4 },
  detailsText: { color: '#059669', fontSize: 10, fontWeight: '600', marginTop: 6 },
});