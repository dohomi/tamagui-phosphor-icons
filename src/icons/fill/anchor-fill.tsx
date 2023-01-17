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
      <_Path d="M216,136a8,8,0,0,0-8,8,40,40,0,0,1-40,40,47.9,47.9,0,0,0-32,12.3V120h32a8,8,0,0,0,0-16H136V78.8a28,28,0,1,0-16,0V104H88a8,8,0,0,0,0,16h32v76.3A47.9,47.9,0,0,0,88,184a40,40,0,0,1-40-40,8,8,0,0,0-16,0,56,56,0,0,0,56,56,32.1,32.1,0,0,1,32,32,8,8,0,0,0,16,0,32.1,32.1,0,0,1,32-32,56,56,0,0,0,56-56A8,8,0,0,0,216,136ZM116,52a12,12,0,1,1,12,12A12,12,0,0,1,116,52Z" />
    </_Svg>
  )
}

Icon.displayName = 'AnchorFill'

export const AnchorFill = memo<IconProps>(themed(Icon))
