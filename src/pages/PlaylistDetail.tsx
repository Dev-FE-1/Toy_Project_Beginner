// src/pages/PlaylistDetail.tsx
import React, { useState } from 'react'
import PlaylistItem from '@/components/thePlaylistItem/thePlaylistItem'
import { css } from '@emotion/react'

// 리스트 컨테이너 스타일 정의
const listContainerStyle = css`
  padding: 20px;
`

const playlistData = [
  {
    thumbnail: 'https://via.placeholder.com/80x50', // 썸네일 이미지 URL
    title: '강한 난이도의 운동 따라와...근육 있는자들' // 제목
  },
  {
    thumbnail: 'https://via.placeholder.com/80x50',
    title: '쉬운 난이도의 운동 따라와...초보자들' // 제목
  }
]

const PlaylistDetail: React.FC = () => {
  const [playlist, setPlaylist] = useState(playlistData)

  // 드래그 시작 이벤트 핸들러
  const onDragStart =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('playlistIndex', index.toString())
    }

  // 드롭 이벤트 핸들러
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const draggedIndex = parseInt(e.dataTransfer.getData('playlistIndex'))
    const targetIndex = parseInt(e.currentTarget.dataset.index!)

    if (draggedIndex !== targetIndex) {
      const updatedPlaylist = [...playlist]
      const [draggedItem] = updatedPlaylist.splice(draggedIndex, 1)
      updatedPlaylist.splice(targetIndex, 0, draggedItem)
      setPlaylist(updatedPlaylist) // 드래그 후 리스트 업데이트
    }
  }

  return (
    <div css={listContainerStyle}>
      {playlist.map((item, index) => (
        <div
          key={index}
          data-index={index}
          onDrop={onDrop} // 드롭 이벤트
          onDragOver={e => e.preventDefault()} // 드래그 오버 시 기본 동작 방지
        >
          <PlaylistItem
            thumbnail={item.thumbnail}
            title={item.title}
            onDragStart={onDragStart(index)} // 드래그 시작 이벤트 핸들러 전달
          />
        </div>
      ))}
    </div>
  )
}

export default PlaylistDetail
