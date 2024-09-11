// src/components/thePlaylistItem/thePlaylistItem.tsx
import React, { useState } from 'react'
import { css } from '@emotion/react'
import { CgBookmark, CgFormatJustify } from 'react-icons/cg'

// 스타일 정의
const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  gap: 12px;
  border-bottom: 1px solid #e0e0e0;
`

const leftContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
`

const thumbnailStyle = css`
  width: 80px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
`

const titleStyle = css`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`

interface PlaylistItemProps {
  thumbnail: string
  title: string
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({
  thumbnail,
  title,
  onDragStart
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false) // 북마크 상태

  // 북마크 아이콘 클릭 시 상태 변경
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <div
      css={itemStyle}
      draggable
      onDragStart={onDragStart} // 드래그 앤 드롭 이벤트 핸들러 추가
    >
      <div css={leftContainerStyle}>
        {/* 북마크 아이콘 */}
        <CgBookmark
          size={20}
          onClick={handleBookmarkClick} // 클릭 시 북마크 상태 토글
          style={{ color: isBookmarked ? 'blue' : 'gray' }} // 북마크 여부에 따라 색상 변경
        />
        <img
          src={thumbnail}
          alt="썸네일"
          css={thumbnailStyle}
        />
        <div css={titleStyle}>{title}</div>
      </div>
      {/* 드래그 앤 드롭 아이콘 */}
      <CgFormatJustify size={20} />
    </div>
  )
}

export default PlaylistItem
