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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm39.6,103.6a7.8,7.8,0,0,1-5.7,2.3,7.6,7.6,0,0,1-5.6-2.3L136,107.3V168a8,8,0,0,1-16,0V107.3L99.7,127.6a8,8,0,0,1-11.3-11.3l33.9-33.9a8.7,8.7,0,0,1,2.6-1.8,8.3,8.3,0,0,1,6.2,0,8.7,8.7,0,0,1,2.6,1.8l33.9,33.9A8,8,0,0,1,167.6,127.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowCircleUpFill'

export const ArrowCircleUpFill = memo<IconProps>(themed(Icon))
