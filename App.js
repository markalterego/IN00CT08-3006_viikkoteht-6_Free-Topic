import { useState } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

const URL = 'https://randomfox.ca/floof/?ref=apilist.fun';

export default function App() {
    const [data, setData] = useState({}); // data from fetch

    function pollFox() {
        fetch(URL)
        .then(response => response.json())
        .then((json) => {
            setData(json);
            console.log(json);   
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={styles.topContainer}>
            <View style={styles.bottomContainer}>
                <Text style={styles.header}>{'Dare to press the button?'}</Text>
                <Button 
                    title='Press me'
                    onPress={pollFox}
                />
                {
                data.image && 
                <Image 
                    style={styles.image} 
                    source={{ uri: data.image }} 
                    resizeMode='contain'
                />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: { // trying to preserve backgroundcolor by adding top and bottom containers
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    bottomContainer: {
        width: '80%',
        height: '90%',
        top: '5%',
    },
    header: { 
        textAlign: 'center',
        fontSize: 40,
    },
    image: {
        width: '100%',
        height: 300
    }
});
