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
      <_Path d="M216,48V96a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L184,83.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L172.7,72,154.3,53.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,160,40h48A8,8,0,0,1,216,48ZM98.3,146.3,72,172.7,53.7,154.3a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,40,160v48a8,8,0,0,0,8,8H96a8,8,0,0,0,7.4-4.9,8.4,8.4,0,0,0-1.7-8.8L83.3,184l26.4-26.3a8.1,8.1,0,0,0-11.4-11.4Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowsOutSimpleFill'

export const ArrowsOutSimpleFill = memo<IconProps>(themed(Icon))
