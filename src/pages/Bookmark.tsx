// import React from 'react'

// const Bookmark = () => {
//   return <div>Bookmark</div>
// }

// export default Bookmark

// 두번째 ( 버튼을 누르지 않고 바로 화면에 나오게끔 해봤음)
// import React from 'react'
// import PlaylistDetail from '@/pages/PlaylistDetail' // PlaylistDetail 컴포넌트 import

// const Bookmark: React.FC = () => {
//   return (
//     <div>
//       <h1>북마크</h1>
//       {/* PlaylistDetail 컴포넌트 삽입 */}
//       <PlaylistDetail />
//     </div>
//   )
// }

// export default Bookmark

// 세번째
import React, { useState } from 'react'
import PlaylistDetail from '@/pages/PlaylistDetail' // PlaylistDetail 컴포넌트 import

const Bookmark: React.FC = () => {
  const [showPlaylist, setShowPlaylist] = useState(false) // 상태로 리스트 표시 여부 관리

  // 버튼을 클릭했을 때 리스트 표시 상태를 토글하는 함수
  const handleButtonClick = () => {
    setShowPlaylist(prevState => !prevState) // 이전 상태의 반대로 토글
  }

  return (
    <div>
      <h1>북마크</h1>
      {/* 버튼 추가 */}
      <button
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        화면
      </button>

      {/* 버튼이 눌리면 PlaylistDetail 컴포넌트가 나타남 */}
      {showPlaylist && <PlaylistDetail />}
    </div>
  )
}

export default Bookmark
