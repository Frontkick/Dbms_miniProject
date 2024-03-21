import React, { useState } from 'react';

const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const VideoPlayer = ({link}) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [embedId, setEmbedId] = useState('');

  const extractVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|[^/]+[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
    return match && match[1];
  };

  const handleUrlChange = () => {
    const url = link;
    setVideoUrl(url);
    const id = extractVideoId(url);
    if (id) {
      setEmbedId(id);
    }
  };

  return (
    <div>
      
      <button className='mb-10' onClick={handleUrlChange}>Watch Trailer</button>
      {embedId && <YouTubeEmbed embedId={embedId} />}
    </div>
  );
};

export default VideoPlayer;

