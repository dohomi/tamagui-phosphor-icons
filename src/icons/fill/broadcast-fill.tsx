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
      <_Circle cx="128" cy="128" r="40" fill={`${color}`} />
      <_Path d="M82.7,82.7a7.9,7.9,0,0,0,0-11.3,8,8,0,0,0-11.3,0A80,80,0,0,0,54.3,96.9a79.9,79.9,0,0,0,0,62.2,80,80,0,0,0,17.1,25.5,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3,7.9,7.9,0,0,0,0-11.3A65.4,65.4,0,0,1,69,152.9a64.5,64.5,0,0,1,0-49.8A65.4,65.4,0,0,1,82.7,82.7Z" />
      <_Path d="M208,128a78.6,78.6,0,0,0-6.3-31.1,80,80,0,0,0-17.1-25.5,8,8,0,0,0-11.3,0,7.9,7.9,0,0,0,0,11.3A65.4,65.4,0,0,1,187,103.1a64.5,64.5,0,0,1,0,49.8,65.4,65.4,0,0,1-13.7,20.4,7.9,7.9,0,0,0,0,11.3,8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3,80,80,0,0,0,17.1-25.5A78.6,78.6,0,0,0,208,128Z" />
      <_Path d="M32.2,168.5a104.1,104.1,0,0,1,0-81,101.3,101.3,0,0,1,22.3-33A8.1,8.1,0,0,0,43.1,43.1,121.8,121.8,0,0,0,17.4,81.3a120.7,120.7,0,0,0,0,93.4,121.8,121.8,0,0,0,25.7,38.2,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4A101.3,101.3,0,0,1,32.2,168.5Z" />
      <_Path d="M238.6,81.3a121.8,121.8,0,0,0-25.7-38.2,8.1,8.1,0,1,0-11.4,11.4A103.5,103.5,0,0,1,232,128a103.5,103.5,0,0,1-30.5,73.5,8.1,8.1,0,0,0,0,11.4,8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,121.8,121.8,0,0,0,25.7-38.2,120.7,120.7,0,0,0,0-93.4Z" />
    </_Svg>
  )
}

Icon.displayName = 'BroadcastFill'

export const BroadcastFill = memo<IconProps>(themed(Icon))
