import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from 'axios'
import { useEffect } from "react";

const Posts = ({navigation}) => {
  //Init State
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Create Function to fetch
  const getPost = async() => {
    try {
      
      setIsLoading(true)
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response);
      
      setPost(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }

  useEffect(()=> {
    getPost()
  },[])

  //   Create Component List
  const _renderItem = ({item}) => {
    return(
      <ListItem 
        key={item.id}
        onPress={()=> navigation.navigate("DetailPost", item)}
        bottomDivider
      >
        <Avatar 
          rounded
          title={item.title.slice(0,2)}
          containerStyle={{backgroundColor: "black"}}
        />

        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>
            {item.title}
          </ListItem.Title>
          
          <ListItem.Subtitle numberOfLines={2}>
            {item.title}
          </ListItem.Subtitle>

        </ListItem.Content>

      </ListItem>
    )
  }



  return (
    <View style={style.container}>
      <View>
        <Text>This Is Post</Text>

        <Button
          title="To Detail Post"
          onPress={() => props.navigation.navigate("DetailPost")}
        />
        {/* Render Component List */}
        <FlatList 
          data={post}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          refreshing={isLoading}
          onRefresh={getPost}
        />
      </View>
    </View>
  );
};

export default Posts;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
