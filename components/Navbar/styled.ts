import styled, { keyframes } from 'styled-components'

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
                    fill: var(--clr-primary-5);
                }
            `

export const Wrapper = styled.div`
  background-color: aliceblue;
  svg {
    width: 200px;
    fill: none;
    path:nth-child(-n + 8) {
      fill: var(--clr-grey-1);
      stroke: var(--clr-grey-1);
    }
    path:nth-child(n + 9) {
      stroke: var(--clr-primary-5);
      stroke-dasharray: 600;
      stroke-dashoffset: 600;
      animation: ${lineAnim} 3s ease forwards, ${fill} 1s ease forwards 1.7s;
    }
  }
`
