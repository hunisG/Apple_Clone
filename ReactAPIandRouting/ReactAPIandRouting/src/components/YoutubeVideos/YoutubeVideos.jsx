import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

export default function YoutubeVideos() {
  const [videos, setVideos] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchVideos = async () => {
      

      const url = `${baseUrl}?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&type=video&maxResults=20&key=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();

      // Use EXACTLY 8 videos
      setVideos(data.items.slice(0, 8));
    };

    fetchVideos();
  }, []);

  return (
    <section className="youtube-section">
      <h2 className="youtube-title">Latest Videos</h2>

      <div className="youtube-grid">
        {videos.map((v, idx) => (
          <div key={idx} className="youtube-card">
            <a
              href={`https://www.youtube.com/watch?v=${v.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="thumb-wrapper">
                <img
                  src={v.snippet.thumbnails.high.url}
                  alt={v.snippet.title}
                  className="youtube-thumb"
                />

                <div className="overlay">
                  <h3 className="overlay-title">{v.snippet.title}</h3>
                  <p className="overlay-channel">
                    Apple
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
