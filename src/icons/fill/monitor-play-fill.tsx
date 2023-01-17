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
      <_Path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM232,64V176a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V64A24.1,24.1,0,0,1,48,40H208A24.1,24.1,0,0,1,232,64Zm-68,56a7.9,7.9,0,0,0-3.7-6.7l-44-28a7.9,7.9,0,0,0-8.1-.3,8,8,0,0,0-4.2,7v56a8,8,0,0,0,4.2,7,7.7,7.7,0,0,0,8.1-.3l44-28A7.9,7.9,0,0,0,164,120Z" />
    </_Svg>
  )
}

Icon.displayName = 'MonitorPlayFill'

export const MonitorPlayFill = memo<IconProps>(themed(Icon))
