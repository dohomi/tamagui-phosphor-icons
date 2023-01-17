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
      <_Path
        d="M42.2,26.2a8.1,8.1,0,0,0-2.4,5.7V224.1a8.1,8.1,0,0,0,2.4,5.7h0L144,128,42.2,26.2Z"
        opacity="0.2"
      />
      <_Path
        d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="42.2"
        y1="26.2"
        x2="175.9"
        y2="159.9"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="42.2"
        y1="229.8"
        x2="175.9"
        y2="96.1"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'GooglePlayLogoDuotone'

export const GooglePlayLogoDuotone = memo<IconProps>(themed(Icon))
