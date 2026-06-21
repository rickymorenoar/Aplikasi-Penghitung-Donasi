import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';
import { MoneyConfig } from '../types';

interface MoneyCardProps {
  money: MoneyConfig;
  count: number;
  onIncrement: (value: number) => void;
  onDecrement: (value: number) => void;
}

export default function MoneyCard({ money, count, onIncrement, onDecrement }: MoneyCardProps) {
  const isSelected = count > 0;

  return (
    <View style={[styles.card, isSelected && styles.cardActive]}>
      <View style={styles.infoArea}>
        <Text style={styles.label}>{money.label}</Text>
        <Text style={styles.subtotal}>
          Rp {(money.value * count).toLocaleString('id-ID')}
        </Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity 
          style={[styles.btn, count === 0 && styles.btnDisabled]} 
          onPress={() => onDecrement(money.value)}
          disabled={count === 0}
        >
          <Minus color={count > 0 ? '#fafafa' : '#3f3f46'} size={14} strokeWidth={2.5} />
        </TouchableOpacity>
        
        <View style={styles.countWrapper}>
          <Text style={[styles.countText, isSelected && styles.countTextActive]}>
            {count}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.btn} onPress={() => onIncrement(money.value)}>
          <Plus color="#fafafa" size={14} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#18181b',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#27272a',
  },
  cardActive: { borderColor: '#52525b' },
  infoArea: { flex: 1 },
  label: { color: '#fafafa', fontSize: 15, fontWeight: '600', letterSpacing: -0.2 },
  subtotal: { color: '#71717a', fontSize: 12, marginTop: 4 },
  controls: { flexDirection: 'row', alignItems: 'center' },
  btn: {
    backgroundColor: '#27272a',
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: { backgroundColor: '#18181b', borderWidth: 1, borderColor: '#27272a' },
  countWrapper: { width: 36, alignItems: 'center' },
  countText: { color: '#52525b', fontSize: 14, fontWeight: '600' },
  countTextActive: { color: '#fafafa', fontWeight: '700' },
});