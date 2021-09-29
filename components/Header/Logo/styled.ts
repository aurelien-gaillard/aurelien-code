import styled, { keyframes } from 'styled-components'
import { theme } from '../../../theme'

const lineAnim = keyframes`
                to {
                stroke-dashoffset: 0;
                }
            `
const fill = keyframes`
                from {
                    fill: transparent;
                }
                to {
                    fill: ${theme.color.primary.main};
                }
            `

export const SVG = styled.svg`
  path:nth-child(-n + 8) {
    fill: ${theme.color.text.main};
    stroke: ${theme.color.text.main};
  }
  path:nth-child(n + 9) {
    stroke: ${theme.color.primary.main};
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    animation: ${lineAnim} 3s ease forwards, ${fill} 1s ease forwards 1.7s;
  }
`
