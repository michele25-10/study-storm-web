import React from 'react'

//icons
import YouTubeIcon from '@mui/icons-material/YouTube';

//sass
import "./videoPresentation.scss";

const VideoPresentation = () => {
    return (
        <div className="videoPresentation">
            <div className="title">
                <h3>Trailer</h3>
            </div>
            <p>Visualizza il trailer della nostra applicazione</p>
            <YouTubeIcon style={{ color: "white", height: "100px", width: "100px", cursor: "pointer", }} />
        </div>
    )
}

export default VideoPresentation
