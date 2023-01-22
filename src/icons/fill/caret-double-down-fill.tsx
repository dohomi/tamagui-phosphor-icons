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
      <_Path d="M208,120H147.3l66.4-66.3a8.4,8.4,0,0,0,1.7-8.8A8,8,0,0,0,208,40H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8L108.7,120H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80a8.4,8.4,0,0,0,1.7-8.8A8,8,0,0,0,208,120Z" />
    </_Svg>
  )
}

Icon.displayName = 'CaretDoubleDownFill'

export const CaretDoubleDownFill = memo<IconProps>(themed(Icon))
