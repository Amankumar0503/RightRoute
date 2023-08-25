import { StyleSheet, Text, View ,Dimensions,KeyboardAvoidingView} from 'react-native'
import React from 'react'

const Formconatiner = ({children}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>{children}</KeyboardAvoidingView>
  )
}

export default Formconatiner

const styles = StyleSheet.create({
    container:{width:Dimensions.get('window').width,paddingHorizontal:20}
})