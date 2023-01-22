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
      <_Path d="M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" />
      <_Path d="M40,116H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" />
      <_Path d="M216,140H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
      <_Path d="M168,180H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextAlignLeftFill'

export const TextAlignLeftFill = memo<IconProps>(themed(Icon))
