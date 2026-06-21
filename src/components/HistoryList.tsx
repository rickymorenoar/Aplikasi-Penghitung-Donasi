import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { History, Trash2 } from 'lucide-react-native';
import { DonationHistory } from '../types';

interface HistoryListProps {
  history: DonationHistory[];
  onClear: () => void;
}

export default function HistoryList({ history, onClear }: HistoryListProps) {
  if (history.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <History color="#71717a" size={14} />
          <Text style={styles.title}>Arsip Hitungan</Text>
        </View>
        <TouchableOpacity onPress={onClear} style={styles.clearBtn}>
          <Trash2 color="#ef4444" size={14} />
          <Text style={styles.clearText}>Hapus</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {history.map((item) => (
          <View key={item.id} style={styles.historyCard}>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.amountText}>Rp {item.total.toLocaleString('id-ID')}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 12 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  title: { color: '#71717a', fontSize: 12, fontWeight: '600' },
  clearBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  clearText: { color: '#ef4444', fontSize: 12, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 20, gap: 10 },
  historyCard: {
    backgroundColor: '#18181b',
    padding: 14,
    borderRadius: 12,
    minWidth: 150,
    borderWidth: 1,
    borderColor: '#27272a',
  },
  dateText: { color: '#52525b', fontSize: 11, fontWeight: '500' },
  amountText: { color: '#fafafa', fontSize: 15, fontWeight: '600', marginTop: 4 },
});