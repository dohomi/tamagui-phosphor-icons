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
      <_Path d="M197.1,66.6c-13-20.8-29.9-38.7-44.6-53.4a8,8,0,0,0-7-2.2,7.9,7.9,0,0,0-5.9,4.4L108.7,80.2,76.5,58.7a8.1,8.1,0,0,0-6-1.2,8,8,0,0,0-5.1,3.4C45.9,90.3,36,116.9,36,140a92,92,0,0,0,184,0C220,115.1,212.5,91.1,197.1,66.6Zm-9.8,82.6a59.6,59.6,0,0,1-50.1,50.1H136a8,8,0,0,1-1.2-15.9,44.4,44.4,0,0,0,36.7-36.7,8,8,0,1,1,15.8,2.4Z" />
    </_Svg>
  )
}

Icon.displayName = 'FireFill'

export const FireFill = memo<IconProps>(themed(Icon))
