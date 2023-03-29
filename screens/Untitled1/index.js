import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>
        <View>
           <Text styles={{
          color: "red",
          backgroundColor: 'yellow'
        }}>A simple App</Text>
          <Text styles={{
          color: "red",
          backgroundColor: 'yellow'
        }}>Swaroop</Text>
        </View>
        </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled1;