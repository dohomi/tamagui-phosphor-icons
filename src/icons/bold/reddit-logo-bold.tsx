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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Circle
        cx="188"
        cy="32"
        r="12"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M161,172a71.9,71.9,0,0,1-66,0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Polyline
        points="128 72 136 24 176.1 30.2"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Circle cx="88" cy="128" r="20" fill={`${color}`} />
      <_Circle cx="168" cy="128" r="20" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'RedditLogoBold'

export const RedditLogoBold = memo<IconProps>(themed(Icon))
