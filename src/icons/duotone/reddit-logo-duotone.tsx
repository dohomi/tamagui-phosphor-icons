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
        d="M240,104a24,24,0,0,0-43.4-14.1h0C178.3,78.7,154.3,72,128,72S77.7,78.7,59.4,89.9h0a24,24,0,1,0-31.6,34.8h0A50.7,50.7,0,0,0,24,144c0,39.8,46.6,72,104,72s104-32.2,104-72a50.7,50.7,0,0,0-3.8-19.3h0A24,24,0,0,0,240,104Z"
        opacity="0.2"
      />
      <_Circle
        cx="188"
        cy="32"
        r="16"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M161,176a71.9,71.9,0,0,1-66,0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="128 72 136 24 172.2 29.6"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="88" cy="132" r="16" fill={`${color}`} />
      <_Circle cx="168" cy="132" r="16" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'RedditLogoDuotone'

export const RedditLogoDuotone = memo<IconProps>(themed(Icon))
