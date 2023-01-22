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
      <_Path d="M240,80v72a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L196,127.3l-70.3,70.4a8.2,8.2,0,0,1-11.4,0l-96-96A8.1,8.1,0,0,1,29.7,90.3L120,180.7,184.7,116,154.3,85.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,160,72h72A8,8,0,0,1,240,80Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowElbowRightFill'

export const ArrowElbowRightFill = memo<IconProps>(themed(Icon))
