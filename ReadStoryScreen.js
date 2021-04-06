import * as React from 'react'
import {Text, View, StyleSheet, Image, FlatList} from 'react-native'
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };
  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
    <View>
    <FlatList
    data = {this.state.allStories}
    renderItem = {(item)=> {
      <View>
        <Text>
          {"Story Name" + item.StoryName}
        </Text>
        <Text>
          {"Author Name"+ item.AuthorName}
        </Text>
      </View>
            }}
      keyExtractor = {(item,index)=> 
        index.toString()
        }
    />
    </View>
    );
  }
}