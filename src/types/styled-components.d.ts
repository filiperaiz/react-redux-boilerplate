import 'styled-components'

import { themeDefault } from 'roots-design-system'

// inferência de tipos
type Theme = typeof themeDefault

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
