import React from 'react'

import './home.css';
import Topbar from '../topbar/topbar';
import Story from '../story/story';
import StoryReel from '../storyreel/storyreel';

export default function Home({ fullName }) {
 return (<><Topbar/>
 <StoryReel></StoryReel></>
 )
}