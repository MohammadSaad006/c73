import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = () => {
    db.collection('User Stories').add({
      title: this.state.title,
      author: this.state.author,
      storyText: this.state.storyText,
    });
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    alert(
      "Your story has been submitted successfully."
    );
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
          value={this.state.author}
          onChangeText={(text) => this.setState({ author: text })}
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here"
          value={this.state.storyText}
          onChangeText={(text) => this.setState({ storyText: text })}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
 
  header: {
    backgroundColor: 'blue',
    
  },
  headerText: {
    
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
   textAlign: 'center',
    borderWidth: 2,
     borderRadius:25,
     backgroundColor:'red',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
   
    borderWidth: 2,
     borderRadius:25,
     backgroundColor:'red',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
   width:'80%',
    marginTop: 40,
     alignSelf: 'center',
      height: 200, textAlign: 'center', borderWidth: 2, borderRadius:25,backgroundColor: 'red',  fontWeight : 'bold',color:'black'
  },
  submitButton: {
   borderWidth : 3, padding : 5, margin : 30, justifyContent : 'center', alignItems : 'center',alignSelf : 'center', height : 50, width : '62%', borderRadius : 100,  backgroundColor:'green'
  },
  buttonText: {
    
    textAlign: 'center',
    fontSize: 25,
  },
});
