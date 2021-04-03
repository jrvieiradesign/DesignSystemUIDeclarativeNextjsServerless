
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: { 
    initialColorMode : "dark", 
    useSystemColorMode : false , 
  },
  
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  
  fontWeights: {
    normal: 400,
    medium: 600,
    semibold: 600,
    bold: 700,
  },

  radii: {
    sm: '5px',  
    md: '8px'  
  },
  
  fontSizes: {
    "2xl": "54px"
  },
  
  colors : { 
    purple: {
      500: '#8257e5',
    }, 
    gray: {
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
  },

})
  
export default theme
  
  
  


