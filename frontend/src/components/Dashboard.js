import React from 'react';
import Post from './Post';
import Sidebar from './Sidebar';
import Posts from '../posts.json';

function Dashboard() {
  return (
    <>
      <Sidebar/>
      {Posts.map((element) => {
        return (
          <div className="box" style={{margin: '20px 0px 20px 35%'}}>
            <Post opusername={element.opusername} profilePhotoUrl={element.profilePhotoUrl} musicName={element.musicName} imgUrl={element.imgUrl} description={element.description}/>
          </div>
        )
      })}
    </>
  )
}

export default Dashboard;