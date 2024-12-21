import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AboutScreen = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>About GST Calculator</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What is GST?</Text>
          <Text style={styles.text}>
            GST (Goods and Services Tax) is a comprehensive indirect tax levied
            on the manufacture, sale, and consumption of goods and services
            throughout India.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Use</Text>
          <Text style={styles.text}>
            1. Enter the base amount{'\n'}
            2. Select the applicable GST rate{'\n'}
            3. Click on Calculate GST{'\n'}
            4. View the GST amount and total amount
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GST Rates</Text>
          <Text style={styles.text}>
            • 5% - Essential items{'\n'}• 12% - Standard rate{'\n'}• 18% -
            Standard rate{'\n'}• 28% - Luxury items
          </Text>
        </View>

        <View style={styles.linkSection}>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() =>
              openLink(
                'https://www.barnardmedia.co.za/apps/gstcalculator/privacy',
              )
            }>
            <Icon name="privacy-tip" size={24} color="#007AFF" />
            <Text style={styles.linkText}>Privacy Policy</Text>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={() =>
              openLink(
                'https://www.barnardmedia.co.za/apps/gstcalculator/terms',
              )
            }>
            <Icon name="description" size={24} color="#007AFF" />
            <Text style={styles.linkText}>Terms & Conditions</Text>
            <Icon name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  linkSection: {
    marginTop: 8,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 12,
  },
  linkText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
    fontWeight: '500',
  },
});

export default AboutScreen;
