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
      <_Path
        d="M40,176V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V160h0l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0Z"
        opacity="0.2"
      />
      <_Rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="100" cy="92" r="12" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'ImageSquareDuotone'

export const ImageSquareDuotone = memo<IconProps>(themed(Icon))
