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

import { themed } from '../../themed'
import { IconProps } from '../icons/IconProps'

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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,16a88.1,88.1,0,0,1,76.2,44H128a44,44,0,0,0-41.2,28.6L62.1,69.8A87.6,87.6,0,0,1,128,40ZM40,128A87.7,87.7,0,0,1,51.8,84l38.1,66,.2.3a44,44,0,0,0,45.2,21.1l-24.8,42.9A88.3,88.3,0,0,1,40,128Zm88,88,38.1-66c.1-.1.1-.3.2-.4a43.8,43.8,0,0,0-4.4-49.6h49.5a86.5,86.5,0,0,1,4.6,28A88.1,88.1,0,0,1,128,216Z" />
    </_Svg>
  )
}

Icon.displayName = 'GoogleChromeLogoFill'

export const GoogleChromeLogoFill = memo<IconProps>(themed(Icon))
