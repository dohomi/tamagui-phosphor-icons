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
      <_Path d="M208,88v88a8,8,0,0,1-16,0V88a48,48,0,0,0-96,0v80h40a8,8,0,0,1,7.4,4.9,8.4,8.4,0,0,1-1.7,8.8l-48,48a8.2,8.2,0,0,1-11.4,0l-48-48a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,40,168H80V88a64,64,0,0,1,128,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowULeftDownFill'

export const ArrowULeftDownFill = memo<IconProps>(themed(Icon))
