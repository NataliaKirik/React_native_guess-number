import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


const Input = (props) => {
   return (
     <TextInput  {...props} style={{ ...styles.input, ...props.style }} />
   );
};
const styles = StyleSheet.create({
   input: {

      borderBottomColor: "grey",
      borderBottomWidth: 1,
      marginVertical: 10,

   },
});
export default Input;
