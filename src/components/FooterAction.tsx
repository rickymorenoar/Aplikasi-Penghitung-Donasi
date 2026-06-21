import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { RotateCcw, CheckCircle } from 'lucide-react-native';

interface FooterActionProps {
  onReset: () => void;
  onSave: () => void;
  disabled: boolean;
}

export default function FooterAction({ onReset, onSave, disabled }: FooterActionProps) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <RotateCcw color="#a1a1aa" size={16} />
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.saveButton, disabled && styles.disabledSave]} 
        onPress={onSave}
        disabled={disabled}
      >
        <CheckCircle color={disabled ? '#3f3f46' : '#09090b'} size={16} strokeWidth={2.5} />
        <Text style={[styles.saveButtonText, disabled && styles.disabledText]}>Simpan Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { 
    flexDirection: 'row', 
    padding: 16, 
    backgroundColor: '#09090b', 
    borderTopWidth: 1, 
    borderColor: '#18181b',
    gap: 10
  },
  resetButton: { 
    flex: 1, 
    backgroundColor: '#18181b', 
    paddingVertical: 14, 
    borderRadius: 12, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#27272a'
  },
  resetButtonText: { color: '#a1a1aa', fontSize: 14, fontWeight: '600' },
  saveButton: { 
    flex: 2, 
    backgroundColor: '#fafafa', 
    paddingVertical: 14, 
    borderRadius: 12, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 6
  },
  disabledSave: { backgroundColor: '#141416', borderWidth: 1, borderColor: '#18181b' },
  saveButtonText: { color: '#09090b', fontSize: 14, fontWeight: '700' },
  disabledText: { color: '#3f3f46' }
});