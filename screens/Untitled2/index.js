import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>
        <View>
          <Text>
            Building an simple app
          </Text>
          <Text>
            Building an simple app
          </Text>
        </View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#26d9ca"
  }
});
export default Untitled2;