import React, { useState } from "react";
import axios from "axios";
function App() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const handleAddVideo = async () => {
    try {
      await axios.post("/videos", { url, title });
      console.log("Video added successfully");
    } catch (error) {
      console.error("Failed to add video", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />
      <button onClick={handleAddVideo}>Add Video</button>
    </div>
  );
}
export default App;
