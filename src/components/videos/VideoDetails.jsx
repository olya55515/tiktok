import React from 'react'
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ChatBubleIcon from "@mui/icons-material/ChatBubble"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { formatCompactNum } from '../utils/common'

const VideoDetails = ({
    play_count: playCount,
    digg_count: diggCount,
    comment_count: commentCount,
    share_count: shareCount,
}) => {

    const details = [
        {
            icon: <PlayArrowIcon />,
            count: playCount
        },
        {
            icon: <ChatBubleIcon />,
            count: commentCount
        },
        {
            icon: <ShareIcon />,
            count: shareCount
        },
        {
            icon: <FavoriteIcon />,
            count: diggCount
        },

    ]


    return (
        <ul className='video-details flex'>
            {details.map(({ icon, count }, i) => (
                <li key={i} className='video-details__item'>

                    {icon}
                    <p>{formatCompactNum(count)}</p>
                </li>
            ))}
        </ul>
    )
}

export default VideoDetails