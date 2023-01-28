import { createContext } from 'react'

import { IconContextProps } from './IconProps'

export const IconContext = createContext<IconContextProps>({
  color: 'black',
  size: 24,
  weight: 'regular',
})

export const IconContextProvider = IconContext.Provider
