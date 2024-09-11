import React, { useState } from 'react'
import { css } from '@emotion/react'
import { CgCheckO } from 'react-icons/cg' // 아이콘 import

// 토스트 컴포넌트의 스타일을 정의
const toastStyle = css`
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  background: rgba(84, 95, 113, 0.8);
  color: white;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  opacity: 0;
  animation: fadeInOut 2s forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const Toast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // 버튼을 클릭했을 때 토스트를 2초 동안 표시하는 함수
  const showToast = () => {
    setIsVisible(true)
    setTimeout(() => {
      setIsVisible(false) // 2초 후 토스트 숨기기
    }, 2000)
  }

  return (
    <>
      {/* 버튼 클릭 시 토스트가 나타남 */}
      <button
        onClick={showToast}
        style={{
          position: 'fixed',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          backgroundColor: '#545F71',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        토스트 보여주기
      </button>

      {/* 토스트 메시지에 아이콘 추가 */}
      {isVisible && (
        <div css={toastStyle}>
          <CgCheckO size={24} />
          토스트 나타났다 사라지기!!
        </div>
      )}
    </>
  )
}

export default Toast
