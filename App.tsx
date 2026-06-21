import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MoneyConfig, DonationHistory } from './src/types';
import HeaderTotal from './src/components/HeaderTotal';
import MoneyCard from './src/components/MoneyCard';
import HistoryList from './src/components/HistoryList';
import FooterAction from './src/components/FooterAction';

const MONEY_LIST: MoneyConfig[] = [
  { label: 'Rp 100.000', value: 100000, color: '#ef4444' },
  { label: 'Rp 50.000', value: 50000, color: '#3b82f6' },
  { label: 'Rp 20.000', value: 20000, color: '#10b981' },
  { label: 'Rp 10.000', value: 10000, color: '#a855f7' },
  { label: 'Rp 5.000', value: 5000, color: '#f59e0b' },
  { label: 'Rp 2.000', value: 2000, color: '#64748b' },
];

const STORAGE_KEY = '@kotam_amal_history';

export default function App() {
  const [counts, setCounts] = useState<{ [key: number]: number }>({
    100000: 0, 50000: 0, 20000: 0, 10000: 0, 5000: 0, 2000: 0
  });
  const [history, setHistory] = useState<DonationHistory[]>([]);

  // Ambil data riwayat yang tersimpan di HP pas aplikasi pertama kali dibuka
  useEffect(() => {
    loadSavedData();
  }, []);

  const loadSavedData = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedHistory !== null) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (e) {
      console.error("Gagal load data riwayat", e);
    }
  };

  const incrementMoney = (value: number) => {
    setCounts(prev => ({ ...prev, [value]: prev[value] + 1 }));
  };

  const decrementMoney = (value: number) => {
    setCounts(prev => ({ ...prev, [value]: prev[value] > 0 ? prev[value] - 1 : 0 }));
  };

  const calculateTotal = () => {
    return Object.keys(counts).reduce((total, key) => {
      const value = parseInt(key);
      return total + (value * counts[value]);
    }, 0);
  };

  const getTotalSheets = () => {
    return Object.values(counts).reduce((a, b) => a + b, 0);
  };

  const resetCounter = () => {
    setCounts({ 100000: 0, 50000: 0, 20000: 0, 10000: 0, 5000: 0, 2000: 0 });
  };

  // FUNGSI UTAMA: Save data ke memori lokal HP/Browser secara permanen
  const saveToDatabase = async () => {
    const totalDonasi = calculateTotal();
    if (totalDonasi === 0) return;

    const today = new Date();
    const formattedDate = today.toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const newLog: DonationHistory = {
      id: Math.random().toString(36).substr(2, 9),
      date: formattedDate,
      total: totalDonasi,
      details: { ...counts }
    };

    const updatedHistory = [newLog, ...history];
    
    try {
      // Kunci data ke AsyncStorage
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
      setHistory(updatedHistory);
      resetCounter();
      alert('Alhamdulillah! Data sukses disimpan permanen ke riwayat.');
    } catch (e) {
      alert('Waduh, gagal mengamankan data ke storage.');
    }
  };

  const clearAllHistory = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setHistory([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      
      <HeaderTotal total={calculateTotal()} totalSheets={getTotalSheets()} />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* LIST RIWAYAT MASUK */}
        <HistoryList history={history} onClear={clearAllHistory} />

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
        </View>

        {/* LIST PECAHAN COUNTER */}
        <View style={{ paddingHorizontal: 16 }}>
          {MONEY_LIST.map((money) => (
            <MoneyCard 
              key={money.value}
              money={money}
              count={counts[money.value]}
              onIncrement={incrementMoney}
              onDecrement={decrementMoney}
            />
          ))}
        </View>
      </ScrollView>

      <FooterAction 
        onReset={resetCounter} 
        onSave={saveToDatabase} 
        disabled={calculateTotal() === 0} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0f172a' },
  scrollContainer: { flex: 1, marginTop: 4 },
  dividerContainer: { paddingHorizontal: 16, marginVertical: 8 },
  dividerLine: { height: 1, backgroundColor: '#1e293b', width: '100%' }
});