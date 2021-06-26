import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
import db from '../Config';
import { SearchBar } from 'react-native-elements';

export default class Read extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      author: '',
      story: '',
      ref: [],
    };
  }

  searchStory = async (text) => {
    const storyRef = await db
      .collection('stories')
      .where('title', '===', text)
      .get();

    storyRef.docs.map((doc) => {

      this.setState({
        ref:[...this.state.ref, doc.data()],
          author: doc.data().author,
          story: '',
      });
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: '', margin: 0, height: 700 }}>
       <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>
        <View style={styles.head}>
          <Text style={styles.headT}> Read Stories ...</Text>
        </View>{' '}
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 2,
            placeholderTextColor: 'red',
            textAlign: 'center',
            borderRadius: 30,
            marginRight: 15,
            width: 260,
            color: 'green',
          }}
          placeholder="Search Here - Title of The Story"
          onChangeText={(text) => {
            this.setState({
              search: text,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.searchStory(this.state.search);
          }}
          style={{
            backgroundColor: 'red',
            marginBottom: 5,
            textAlign: 'center',
            borderRadius: 100,
            borderWidth: '3px',
            padding: 0,
            marginRight: 0,
            marginLeft: 270,
            borderColor: 'black',
            marginTop: -40,
            width: 50,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              
            }}>
            {' '}
            Go{' '}
          </Text>{' '}
        </TouchableOpacity>
        <View>
          {' '}
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Title : {this.state.search}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Author : {this.state.author}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Story : {this.state.story}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 header: {
    backgroundColor: 'blue',
    fontSize: 20,
  },
    headerText: {
    
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  headT: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
