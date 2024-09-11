import React from 'react'
import { css } from '@emotion/react'
import Colors from '@/styles/Colors'

const baseButtonStyle = css`
  display: inline-flex;
  padding: 8px 14px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${Colors.lightBlue};
  cursor: pointer;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.18px;
  transition: background-color 0.3s ease;
`

const buttonStyle = {
  primary: css`
    background-color: ${Colors.lightBlue};
    color: ${Colors.white};
  `,
  secondary: css`
    background-color: ${Colors.white};
    color: ${Colors.lightBlue};
  `
}

const CategoryButton = ({
  children,
  onClick,
  styleType = 'primary'
}: {
  children: React.ReactNode
  onClick?: () => void
  styleType?: 'primary' | 'secondary'
}) => {
  return (
    <button
      onClick={onClick}
      css={[baseButtonStyle, buttonStyle[styleType]]}>
      {children}
    </button>
  )
}

const CategoryContainer = css`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Category = () => {
  return (
    <ul css={CategoryContainer}>
      <li>
        <CategoryButton>전체</CategoryButton>
      </li>
      <li>
        <CategoryButton>상체</CategoryButton>
      </li>
      <li>
        <CategoryButton>하체</CategoryButton>
      </li>
      <li>
        <CategoryButton>스트레칭</CategoryButton>
      </li>
      <li>
        <CategoryButton>유산소</CategoryButton>
      </li>
      <li>
        <CategoryButton>전신</CategoryButton>
      </li>
    </ul>
  )
}

export default Category
