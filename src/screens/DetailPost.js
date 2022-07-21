import React, {useState} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from "axios"
import { useEffect } from "react";

const PostDetail = ({route}) => {
  // console.log(route);
  //init Props
  // const id = route.params.id
  // const title = route.params.title
  // const body = route.params.body
  const {id, title, body} = route.params
  
  //Init State
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Create Function to fetch
  const getComment = async() => {
    try {
      
      setIsLoading(true)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      // console.log(response);
      setComments(response.data)
      setIsLoading(false)

    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }

  //   Create Component List
  useEffect(()=> {
    getComment()
  },[])

  const _renderItem = ({item}) => {
    return(
      <ListItem key={item.id}bottomDivider>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>
            {item.email}
          </ListItem.Title>
          
          <ListItem.Subtitle numberOfLines={2}>
            {`${item.name} - ${item.body}`}
          </ListItem.Subtitle>

        </ListItem.Content>

      </ListItem>
    )
  }


  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        This Is Post Detail
      </Text>

      <Text h2 style={{fontWeight: 'bold'}}>
        {title}
      </Text>
      <Text h2 style={{marginTop: 20}}>
        {body}
      </Text>
      <Text h2 style={{marginTop: 20, color:'grey'}}>
        Comments
      </Text>

      <FlatList 
          data={comments}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          refreshing={isLoading}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={getComment}/>
          }
      />

    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
