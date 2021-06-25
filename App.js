import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Platform, KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';

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

        {/* Adding a task */}
        <KeyboardAvoidingView
          behavior = {Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
          >
           <TextInput style={styles.input} placeholder={'Add a task'}/> 

           <TouchableOpacity> 
             <View style={styles.addWrapper}>
               <Text style={styles.addText}>+</Text>
             </View>
           </TouchableOpacity>
          </KeyboardAvoidingView>


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
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {

  },
  addText: {

  },


});
