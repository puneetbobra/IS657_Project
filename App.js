import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task'

const getCurrentDate =() => {
  let date = new Date().getDate()
  let month = new Date().getMonth() + 1
  let year = new Date().getFullYear()

  return <View> 
    <Text> {date + '-' + month + '-' + year} </Text>
    </View>
  }

export default function App() {
  return (
    <View style={styles.container}>
        {/* Today's Tasks */}
        <View style = {styles.tasksWrapper}>
          <Text style = {styles.sectionTitle}> Tasks for {getCurrentDate()} </Text>

          <View style = {styles.items}>
            {/* Task List */}
            <Task text = {'Task 1'}/>
            <Task text = {'Task 2'}/>
            <Task text = {'Task 3'}/>
            <Task text = {'Task 4'}/>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontsize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});
