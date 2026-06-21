import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface FooterActionProps {
  onReset: () => void;
  onSave: () => void;
  disabled: boolean;
}

export default function FooterAction({ onReset, onSave, disabled }: FooterActionProps) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.saveButton, disabled && styles.disabledSave]} 
        onPress={onSave}
        disabled={disabled}
      >
        <Text style={styles.saveButtonText}>Simpan ke Database</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { flexDirection: 'row', padding: 16, backgroundColor: '#0f172a', borderTopWidth: 1, borderColor: '#1e293b' },
  resetButton: { flex: 1, backgroundColor: '#334155', paddingVertical: 16, borderRadius: 16, marginRight: 10, alignItems: 'center' },
  resetButtonText: { color: '#94a3b8', fontSize: 15, fontWeight: '700' },
  saveButton: { flex: 2, backgroundColor: '#10b981', paddingVertical: 16, borderRadius: 16, alignItems: 'center', shadowColor: '#10b981', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 },
  disabledSave: { backgroundColor: '#1e293b', opacity: 0.4 },
  saveButtonText: { color: '#ffffff', fontSize: 15, fontWeight: '700' },
});