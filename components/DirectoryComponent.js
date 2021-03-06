import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress = {() => props.onPress(item.id)}
                leftAvatar={{source: require('./images/spaceflight.jpg')}}
            />
        );
    };

    return (
        <FlatList
            data = {props.podcasts}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
} 

export default Directory;