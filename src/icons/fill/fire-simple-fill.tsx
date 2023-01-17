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
      <_Path d="M219.9,140a92,92,0,0,1-184,0c0-23.1,9.9-49.7,29.4-79.1a8,8,0,0,1,5-3.4,8.2,8.2,0,0,1,6.1,1.2l32.2,21.5,30.9-64.8a7.9,7.9,0,0,1,5.8-4.4,8.1,8.1,0,0,1,7.1,2.2c14.7,14.7,31.5,32.6,44.6,53.4C212.4,91.1,219.9,115.1,219.9,140Z" />
    </_Svg>
  )
}

Icon.displayName = 'FireSimpleFill'

export const FireSimpleFill = memo<IconProps>(themed(Icon))
