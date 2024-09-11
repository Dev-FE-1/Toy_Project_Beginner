import { Global, css } from '@emotion/react'
import Colors from '@/styles/Colors'
import { fontSize, fontWeight } from '@/styles/Fonts'

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');
      // css 리셋
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      // 모든 요소의 여백, 패딩, 테두리를 제거
      // 요소의 글꼴 크기와 스타일을 상속받도록 설정
      // 수직 정렬을 기본값으로 설정
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      // HTML5 요소 초기화: block 요소로 설정
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      // 기본 줄 간격을 1로 설정
      body {
        line-height: 1;
      }
      // 리스트에서 기본 제공되는 스타일 제거
      ol,
      ul {
        list-style: none;
      }
      // 인용구에서 기본 따옴표 스타일 제거
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }
      // 테이블의 기본 여백과 간격을 제거, 테두리가 겹치지 않도록 설정
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      // 모든 요소의 box-sizing을 border-box로 설정
      // 패딩과 테두리를 포함한 크기 계산을 보장하고, 모든 요소의 기본 여백을 제거
      * {
        box-sizing: border-box;
        margin: 0;
      }
      body,
      #root {
        width: 100%;
        height: 100%;
        font-family:
          'Pretendard Variable',
          Pretendard,
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          sans-serif;
        font-size: ${fontSize.md};
        font-weight: ${fontWeight.medium};
        background-color: ${Colors.white};
        color: ${Colors.black};
      }
      html {
        font-size: 16px;
        height: 100%;
        width: 100%;
        overflow-y: auto;
      }
    `}
  />
)

export default GlobalStyles
