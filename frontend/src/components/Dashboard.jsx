import React, { useEffect, useState } from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import ChatPage from "./ChatPage";
import SettingsPage from "./SettingsPage";
import FindPeoplePage from "./FindPeoplePage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  // const contentStyle = {
  //   margin: "20px 0px 20px 35%"
  // }

  
  const [Posts, setPosts] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);

  const profilePhotosUrls = [
    "https://randomuser.me/api/portraits/women/22.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(response => {
        setPosts(response.data);
        console.log("Fetched posts:", response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  return (
    <>
      <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      <div className="content" style={{ marginLeft: isMinimized ? "80px" : "256px" }}>
        <Routes>
          <Route path="" element={
            Posts.map((element, index) => (
              <div className="box" style={{marginLeft: '25%', padding: '20px 0px 20px 0px'}}>
                <Post
                  opusername={element.user_account}
                  profilePhotoUrl={profilePhotosUrls[index % profilePhotosUrls.length]} // Just for demo purposes
                  musicName={element.post_music}
                  imgUrl={element.images[0]} // Assuming the first image is the main one
                  description={element.caption}
                />
              </div>
            ))} />
          <Route path="find-people" element={<FindPeoplePage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;