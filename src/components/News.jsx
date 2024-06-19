import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <div className="row">
            <div className="col md-4">
                <NewsItem title="mytitle" description="mydescription" imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla"></NewsItem>
            </div>
            <div className="col md-4">
                <NewsItem title="mytitle" description="mydescription"></NewsItem>
            </div>
            <div className="col md-4">
                <NewsItem title="mytitle" description="mydescription"></NewsItem>
            </div>
        </div>
      </div>
    )
  }
}

export default News