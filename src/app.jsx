import styles from  "./app.module.css"
import React, { useState, useEffect } from "react";
import SearchHeader from './components/search_header/search_header' 
import VideoList from './components/video_list/video_list'

function App() {
  const [videos, setVideos] = useState([]);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    console.log('useEffect')
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`, requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
    }, [])

  return (
  <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    <VideoList videos={videos} />
  </div>
  
  )
}

export default App
