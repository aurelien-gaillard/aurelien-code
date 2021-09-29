import { css, SimpleInterpolation } from 'styled-components'

export const pxToRem = (px: number) => `${px / 16}rem`

export const theme = {
  color: {
    white: '#fff',
    background: 'hsl(210, 36%, 96%)',
    primary: {
      main: 'hsl(185, 62%, 45%)',
      darker: 'hsl(185, 84%, 25%)',
    },
    text: {
      main: 'hsl(209, 61%, 16%)',
    },
  },
  maxWidth: pxToRem(1170),
  spacing: (numberOfUnits: number) => pxToRem(numberOfUnits * 4),
  letterSpacing: '0.25rem',
  transition: 'all 0.3s linear',
}

//
// Media Queries //
//
const breakpoints = [600, 905, 1240, 1440]

const generateMedia =
  (breakpoint: number) =>
  (first: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) =>
    css`
      @media (min-width: ${`${breakpoints[breakpoint] / 16}em`}) {
        ${css(first, ...interpolations)}
      }
    `

export const media = {
  s: generateMedia(0),
  m: generateMedia(1),
  l: generateMedia(2),
  xl: generateMedia(3),
}
