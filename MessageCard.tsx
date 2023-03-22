import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';

type ItemProps = {
    title: string;
    body: string;
  };

const MessageCard: FC<ItemProps> = ({ title, body }): JSX.Element => {

    const _handlePress = key => event => {
        const token = "eSwD1X7wQyyxdemtMKJ5W-:APA91bE9WnQOBg8hLbS22TL3TeTEBbhQgkfHqSNHYVLkUhiEFaSCOA2YLjqQuyre2dscCOH2d3O0_gGgslYz3665y6O4Vfl32RuUH8hTr1l4L2Q0l-SL93qjBRclyEUXlDx3ckqwlnxS";
        fetch('https://firebasebackend.herokuapp.com/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: {
                    notification:{
                        title: title,
                        body: body,
                    },
                    data:{
                        accepted: key.toString()
                    },
                    token: token
                }
            }),
                
        }).then((response) => {
            // console.log(response)
            
        }).catch((error) => {
            // console.log(error)
        })
    }
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.buttonLeft}               
                onPress={_handlePress(1)}
                >
                    <Text style={styles.acceptText}>Accept</Text>  
                </TouchableOpacity> 
                <TouchableOpacity 
                style={styles.buttonRight}
                onPress={_handlePress(0)}
                >
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity> 
            </View>            
        </View>
    );
};

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        margin: 10
    },
    buttonLeft: {
        marginLeft: 10,         
    },
    buttonRight: {
        marginLeft: 10,
    },
    acceptText:{
        color: '#1b5e20'
    },
    cancelText:{
        color: '#d50000'
    },
    item: {
      backgroundColor: '#61dafb',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    body: {
        fontSize: 16,
      },
  });

  export default MessageCard;