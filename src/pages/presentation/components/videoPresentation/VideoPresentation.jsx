import React from 'react'

//icons
import YouTubeIcon from '@mui/icons-material/YouTube';

//sass
import "./videoPresentation.scss";

import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';

const VideoPresentation = () => {
    const [cookies] = useCookies(["statsCookies"])

    return (
        <div className="videoPresentation" onClick={cookies.statsCookies ? ReactGA.event({ 'category': "video", 'action': 'submit', 'label': 'video click' }) : null} >
            <div className="title">
                <h3>Trailer</h3>
            </div>
            <p>Visualizza il trailer della nostra applicazione</p>
            <YouTubeIcon style={{ color: "white", height: "100px", width: "100px", cursor: "pointer", }} />
        </div>
    )
}

export default VideoPresentation
