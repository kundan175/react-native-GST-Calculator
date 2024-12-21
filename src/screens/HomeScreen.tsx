import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('18');
  const [customRate, setCustomRate] = useState('');
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [result, setResult] = useState({
    gstAmount: '0',
    totalAmount: '0',
  });

  const gstRates = ['5', '12', '18', '28'];

  const calculateGST = () => {
    const baseAmount = parseFloat(amount) || 0;
    const rate = isCustomRate
      ? parseFloat(customRate)
      : parseFloat(gstRate) || 0;
    const gstAmount = (baseAmount * rate) / 100;
    const totalAmount = baseAmount + gstAmount;

    setResult({
      gstAmount: gstAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>GST Calculator</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount (₹)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount"
            placeholderTextColor="#666"
          />
        </View>

        <Text style={styles.label}>Select GST Rate (%)</Text>
        <View style={styles.rateContainer}>
          {gstRates.map(rate => (
            <TouchableOpacity
              key={rate}
              style={[
                styles.rateButton,
                !isCustomRate && gstRate === rate && styles.selectedRate,
              ]}
              onPress={() => {
                setIsCustomRate(false);
                setGstRate(rate);
              }}>
              <Text
                style={[
                  styles.rateText,
                  !isCustomRate && gstRate === rate && styles.selectedRateText,
                ]}>
                {rate}%
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.customRateContainer}>
          <TouchableOpacity
            style={[
              styles.customRateToggle,
              isCustomRate && styles.selectedRate,
            ]}
            onPress={() => setIsCustomRate(true)}>
            <Text
              style={[
                styles.customRateToggleText,
                isCustomRate && styles.selectedRateText,
              ]}>
              Custom
            </Text>
          </TouchableOpacity>
          {isCustomRate && (
            <TextInput
              style={[styles.input, styles.customRateInput]}
              keyboardType="numeric"
              value={customRate}
              onChangeText={setCustomRate}
              placeholder="Enter GST %"
              placeholderTextColor="#666"
            />
          )}
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={calculateGST}>
          <Text style={styles.calculateButtonText}>Calculate GST</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <View style={styles.resultRow}>
            <Text style={styles.resultLabel}>GST Amount:</Text>
            <Text style={styles.resultValue}>₹ {result.gstAmount}</Text>
          </View>
          <View style={styles.resultRow}>
            <Text style={styles.resultLabel}>Total Amount:</Text>
            <Text style={styles.resultValue}>₹ {result.totalAmount}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rateButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    minWidth: 70,
    alignItems: 'center',
  },
  selectedRate: {
    backgroundColor: '#007AFF',
  },
  rateText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  selectedRateText: {
    color: 'white',
  },
  customRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  customRateToggle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    minWidth: 70,
    alignItems: 'center',
  },
  customRateToggleText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  customRateInput: {
    flex: 1,
  },
  calculateButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  resultContainer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  resultValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});

export default HomeScreen;
