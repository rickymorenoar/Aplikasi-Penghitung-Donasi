import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
    <View style={[styles.moneyCard, isSelected && { borderColor: money.color, borderWidth: 1.5 }]}>
      <View style={styles.moneyInfo}>
        <View style={[styles.avatarMoney, { backgroundColor: `${money.color}20` }]}>
          <Text style={[styles.avatarText, { color: money.color }]}>Rp</Text>
        </View>
        <View>
          <Text style={styles.moneyLabel}>{money.label}</Text>
          <Text style={styles.moneySubtotal}>
            Sub: <Text style={styles.whiteText}>Rp {(money.value * count).toLocaleString('id-ID')}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.controller}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.minusBtn, count === 0 && styles.disabledBtn]} 
          onPress={() => onDecrement(money.value)}
          disabled={count === 0}
        >
          <Text style={[styles.buttonText, { color: count > 0 ? '#f43f5e' : '#475569' }]}>−</Text>
        </TouchableOpacity>
        
        <View style={[styles.countContainer, isSelected && { backgroundColor: `${money.color}15` }]}>
          <Text style={[styles.countText, isSelected && { color: money.color, fontWeight: '800' }]}>
            {count}
          </Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: money.color }]} 
          onPress={() => onIncrement(money.value)}
        >
          <Text style={[styles.buttonText, { color: '#ffffff' }]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  moneyCard: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#334155',
  },
  moneyInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  avatarMoney: { width: 46, height: 46, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  avatarText: { fontSize: 16, fontWeight: 'bold' },
  moneyLabel: { color: '#f8fafc', fontSize: 16, fontWeight: '700' },
  moneySubtotal: { color: '#94a3b8', fontSize: 12, marginTop: 3 },
  whiteText: { color: '#34d399', fontWeight: '600' },
  controller: { flexDirection: 'row', alignItems: 'center' },
  actionButton: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center', elevation: 2 },
  minusBtn: { backgroundColor: '#334155' },
  disabledBtn: { backgroundColor: '#1e293b', opacity: 0.3 },
  buttonText: { fontSize: 20, fontWeight: 'bold' },
  countContainer: { width: 44, alignItems: 'center', justifyContent: 'center', marginHorizontal: 6, paddingVertical: 4, borderRadius: 8 },
  countText: { color: '#94a3b8', fontSize: 16, fontWeight: '600' },
});