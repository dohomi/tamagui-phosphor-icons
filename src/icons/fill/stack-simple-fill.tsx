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
      <_Path d="M12,110.9l112,64a7.8,7.8,0,0,0,8,0l112-64a8,8,0,0,0,0-13.8l-112-64a7.7,7.7,0,0,0-8,0L12,97.1a8,8,0,0,0,0,13.8Z" />
      <_Path d="M236,137.1,128,198.8,20,137.1a8,8,0,0,0-8,13.8l112,64a7.8,7.8,0,0,0,8,0l112-64a8,8,0,1,0-8-13.8Z" />
    </_Svg>
  )
}

Icon.displayName = 'StackSimpleFill'

export const StackSimpleFill = memo<IconProps>(themed(Icon))
