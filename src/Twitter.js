import React, {Component} from 'react';
import { Timeline, Hashtag } from 'react-twitter-widgets';
// var Timeline = require('react-twitter-widgets').Timeline
import './Twitter.css';


export class Twitter extends Component {
  render() {
    return (
      <section className="container">
        <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'Ill_Slide'
        }}
        options={{
          username: 'Ill_Slide',
          height: '800'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
        />
      </section>
    )
  }
}

export class HashtagFind extends Component {


  render() {
    // let tag = "Mexico"

    return (
      <section className="container">
      <Hashtag
      hashtag={this.props.tag}
      options={{
        count: 5,
        height: 800
      }}
      />
      </section>
    )
  }
}
