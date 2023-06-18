import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
// import {apiUrl} from "./ApiConstants" 
import { apiUrl } from './ApiConstants'


const DataListing = () => {

  // const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((resp) => resp.json())
  //     .then((jsonData) => setData(jsonData))
  //     .catch((exception) => console.error(exception))
  //     .finally(() => setLoading(false))
  // })


  useEffect(() => {
    getDataFromApi().then((jsonData) => setData(jsonData))
      .catch((exception) => console.error(exception))
      .finally(() => setLoading(false))
  })

  const getDataFromApi = async () => {
    try {
      let response = await fetch(apiUrl)
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error in Api");
      }
    } catch (e) {
      return e;
    }
  }

  return (
    <ScrollView>

      <View styles={styles.container} >
        {
          loading ? (
            <Text style={styles.id}>"Loading Here..."</Text>
          ) : (data.map((post) => {
            return (
              <View style={{
                margin: 10,
                padding: 16,
                borderColor: 'red',
                borderWidth: 2
              }}>
                <Text style={styles.id}>{post.id}</Text>
                <Text style={styles.title}>{post.title}</Text>
              </View>
            )
          }))
        }
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "red"
  },
  id: {
    color: 'red',
  }
});

export default DataListing