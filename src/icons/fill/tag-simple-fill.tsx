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
      <_Path d="M246.7,123.6,201,55.1A15.9,15.9,0,0,0,187.7,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.7a15.9,15.9,0,0,0,13.3-7.1h0l45.7-68.5A8.2,8.2,0,0,0,246.7,123.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'TagSimpleFill'

export const TagSimpleFill = memo<IconProps>(themed(Icon))
