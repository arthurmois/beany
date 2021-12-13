import { GeistProvider, CssBaseline } from '@geist-ui/react'
import App from './App'

const Application = () => (
  <GeistProvider>
    <CssBaseline />
    <App />
  </GeistProvider>
)

export default Application