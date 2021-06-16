import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderPodcast({podcast}) {
    if(podcast) {
        return (
            <Card
                featuredTitle = {podcast.name}
                image={require('./images/spacebackgroundhomepage.jpeg')}
            >
                <Text style ={{margin: 10}}>
                    {podcast.description}
                </Text>
            </Card>
        );
    }
    return <View/>
}

function PodcastInfo(props) {
    return <RenderPodcast podcast = {props.podcast} />;
}

export default PodcastInfo;