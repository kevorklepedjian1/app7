import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(['ViewPropTypes will be removed']);


export default function App() {
  return (
    <AppNavigation />
  );
}
