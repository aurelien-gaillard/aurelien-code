export const pxToRem = (px: number) => `${px / 16}rem`

export const theme = {
  color: {
    white: '#fff',
    primary: {
      main: 'hsl(185, 62%, 45%)',
      darker: 'hsl(185, 84%, 25%)',
    },
  },
  maxWidth: pxToRem(1170),
  spacing: (numberOfUnits: number) => pxToRem(numberOfUnits * 4),
}
