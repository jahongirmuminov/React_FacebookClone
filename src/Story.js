import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'
const Story = ({image,profileScr,title}) => {
    return (
        <div  style={{backgroundImage:`url(${image}) `}}   className="story">
              <Avatar src={profileScr} className="story_avatar" />
              <h4>{title}</h4>
        </div>
    )
}

export default Story
