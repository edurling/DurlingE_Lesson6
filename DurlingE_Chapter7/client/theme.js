import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#b4ede6',
      main: '#8288bd',
      dark: '#5a9fa6',
      contrastText: '#bab3b3',
    },
    secondary: {
      light: '#fffb8c',
      main: '#7dff59',
      dark: '#b7e084',
      contrastText: '#424242',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })

  export default theme