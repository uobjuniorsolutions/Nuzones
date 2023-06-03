import React, { useState, useEffect } from 'react';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function InstagramMedia({ mediaID, accessToken }) {
  const [clicked, setClicked] = useState(false);

  const [mediaLinks, setMediaLinks] = useState(null);

  const getMediaLinks = async () => {
    try {
      let response = await fetch(`https://graph.instagram.com/v11.0/${mediaID}/?fields=caption,id,is_shared_to_feed,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}`)
      let data = await response.json();
      setMediaLinks(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMediaLinks();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      {mediaLinks ? (
        mediaLinks.media_type === "VIDEO" ? (
          clicked ? (
            <video autoPlay onClick={() => setClicked(false)} style={{ maxWidth: '100%', maxHeight: '500px', borderRadius: '25px' }} src={mediaLinks.media_url} alt="Reel"/>
          ) : (
            <div style={{ position: 'relative' }}>
              <img style={{ maxWidth: '100%', maxHeight: '500px', borderRadius: '25px', filter: blur('4px') }} src={mediaLinks.thumbnail_url} alt="Thumbnail" />
              <div onClick={() => setClicked(true)} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <PlayArrowIcon style={{ backgroundColor: 'white', border: "2px solid #e3e3e3" , width: '80px', height: '80px', borderRadius: '50%'}} /> */}
                <PlayCircleOutlineIcon style={{ width: '80px', height: '80px', color: '#e3e3e3' }} />
              </div>
            </div>
          )
        ) : (
          <img style={{ maxWidth: '100%', borderRadius: '25px' }} src={mediaLinks.media_url} alt="Image" />
        ) 
      ) : (
        <p>Loading...</p>  // Some placeholder element while data is being fetched
      )}
    </div>
  );
}

export default InstagramMedia;
