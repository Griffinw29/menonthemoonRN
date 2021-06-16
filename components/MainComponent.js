import React, { Component } from 'react';
import { View } from 'react-native'
import { PODCASTS } from '../shared/podcasts';
import Directory from './DirectoryComponent';
import PodcastInfo from './PodcastInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            podcasts: PODCASTS,
            selectedPodcast: null
        };
    }

    onPodcastSelect(podcastId) {
        this.setState({selectedPodcast: podcastId});
    }
    
    render() {
        return(
            <View style={{flex:1}}>
                <Directory 
                    podcasts={this.state.podcasts} 
                    onPress = {podcastId => this.onPodcastSelect(podcastId)}
                />
                <PodcastInfo
                    podcast={this.state.podcasts.filter(podcast => podcast.id ===this.state.selectedPodcast)[0]}
                />
            </View>
        )
    }
}

export default Main;