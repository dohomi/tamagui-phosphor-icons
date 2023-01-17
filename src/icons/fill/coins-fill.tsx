import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Circle as _Circle,
  Defs as _Defs,
  Ellipse as _Ellipse,
  G as _G,
  Line as _Line,
  LinearGradient as _LinearGradient,
  Path as _Path,
  Polygon as _Polygon,
  Polyline as _Polyline,
  RadialGradient as _RadialGradient,
  Rect as _Rect,
  Stop as _Stop,
  Svg as _Svg,
  Symbol as _Symbol,
  Text as _Text,
  Use as _Use,
} from 'react-native-svg'

import { IconProps } from '../../IconProps'
import { themed } from '../../themed'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg
      viewBox="0 0 256 256"
      {...otherProps}
      height={size}
      width={size}
      fill={`${color}`}
    >
      <_Rect width="256" height="256" fill="none" />
      <_Path d="M184,89.6V84c0-25.1-37.8-44-88-44S8,58.9,8,84v40c0,20.9,26.2,37.5,64,42.5V172c0,25.1,37.8,44,88,44s88-18.9,88-44V132C248,111.3,222.6,94.7,184,89.6ZM72,150.2V126.5A184,184,0,0,0,96,128a184,184,0,0,0,24-1.5v23.7A151.1,151.1,0,0,1,96,152,151.1,151.1,0,0,1,72,150.2Zm96-40.3V124c0,8.4-12.4,17.4-32,22.9V123.5C148.9,120.4,159.8,115.7,168,109.9ZM24,124V109.9c8.2,5.8,19.1,10.5,32,13.6v23.4C36.4,141.4,24,132.4,24,124Zm64,48v-4.2l8,.2q5.9,0,11.4-.3c4,1.4,8.2,2.6,12.6,3.7v23.5C100.4,189.4,88,180.4,88,172Zm48,26.2V174.4a188.4,188.4,0,0,0,24,1.6,184,184,0,0,0,24-1.5v23.7a160.9,160.9,0,0,1-48,0Zm64-3.3V171.5c12.9-3.1,23.8-7.8,32-13.6V172C232,180.4,219.6,189.4,200,194.9Z" />
    </_Svg>
  )
}

Icon.displayName = 'CoinsFill'

export const CoinsFill = memo<IconProps>(themed(Icon))
