import * as React from "react";
import { Text, Box } from "native-base";
import { TouchableOpacity } from "react-native";

// Add Props in Hello({navigation})
export default function Hello({navigation}) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      {/* Create Button */}
      <TouchableOpacity onPress={()=> navigation.navigate("IncDec")}
        style={{
          backgroundColor: 'indigo',
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          margin: 10
        }}
      >
        <Text textColor={{color: 'white'}}>Screen Increment Decrement</Text>
      </TouchableOpacity>
    </Box>
  );
}
