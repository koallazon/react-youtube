import "./app.css"
import React, { useState } from 'react';
import Header from './components/header'
import VideoList from './components/videoList'
import VideoPlay from './components/videoPlay'

function App() {
  const [ items, setItems] = useState([]);
  const [ mode, setMode] = useState('list');
  const [ select, setSelect] = useState(null);

  const onSearchContent = (text) => {
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
    }).finally(() => {
      setMode('list')
    })
  }

  const onViewContent = (item) => {
    console.log(item)
    setSelect(item)
    setMode('play')
  }

  return (
    <div className="App">
      <Header onSearchContent={onSearchContent} />
      <div className="body-container">
        {mode === 'play' && <VideoPlay item={select} />}
        <VideoList items={items} onViewContent={onViewContent} mode={mode} />
      </div>
      
    </div>
  )
}

export default App
