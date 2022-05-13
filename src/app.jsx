import "./app.css"
import React, { useState } from 'react';
import Header from './components/header'
import VideoList from './components/videoList'
import { debounce } from 'lodash'

function App() {
  const [ items, setItems] = useState([]);
  const onChangeSearchText = (text) => {
    console.log('app', text)
    if(text.trim() === '') return
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${text.trim()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('성공:', data.items);
      setItems(data.items)
    })
    .catch((error) => {
      console.error('실패:', error);
    });

  }
  return (
    <div className="App">
      <Header onChangeSearchText={debounce(onChangeSearchText, 500)} />
      <VideoList items={items} />
    </div>
  )
}

export default App
