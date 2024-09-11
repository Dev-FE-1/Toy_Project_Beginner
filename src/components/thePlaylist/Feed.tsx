import React from 'react'
import { CgProfile, CgHeart, CgComment, CgBookmark } from 'react-icons/cg'

interface FeedProps {
  userId: string
  videoSrc: string
  title: string
  timeStamp: string
}

const Feed: React.FC<FeedProps> = ({ userId, videoSrc, title, timeStamp }) => {
  return (
    <div className="feed">
      <div className="feed-header">
        <CgProfile />
        <span>{userId}</span>
      </div>

      <div className="feed-video">
        <video controls>
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="feed-footer">
        <div className="feed-icons">
          <CgHeart />
          <CgComment />
          <CgBookmark />
        </div>

        <div className="feed-title">
          <p>{title}</p>
        </div>

        <span>{timeStamp}</span>
      </div>
    </div>
  )
}

export default Feed
