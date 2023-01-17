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
      <_Path d="M176,92v96a16,16,0,0,1-16,16H48A40,40,0,0,1,8,164V68A16,16,0,0,1,24,52H136A40,40,0,0,1,176,92Zm68-18.9a7.7,7.7,0,0,0-8,0L196,95.9a8,8,0,0,0-4,7v50.2a8,8,0,0,0,4,7l40,22.8a8.3,8.3,0,0,0,4,1.1,8,8,0,0,0,4-1.1,7.8,7.8,0,0,0,4-6.9V80A7.8,7.8,0,0,0,244,73.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'VideoCameraFill'

export const VideoCameraFill = memo<IconProps>(themed(Icon))
