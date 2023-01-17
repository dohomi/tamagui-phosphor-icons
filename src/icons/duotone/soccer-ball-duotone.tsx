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
      <_Polygon
        points="128 86 88.1 115 103.3 162 152.7 162 167.9 115 128 86"
        opacity="0.2"
      />
      <_Path
        d="M93,38.6a96.1,96.1,0,0,1,70,0h0L128,64,93,38.6Z"
        opacity="0.2"
      />
      <_Path
        d="M32.1,133.7a98.4,98.4,0,0,1,4.6-35.4A95.5,95.5,0,0,1,53.8,67.1h0l13.3,41.1-35,25.5Z"
        opacity="0.2"
      />
      <_Path
        d="M103.8,220.9a95.9,95.9,0,0,1-32.2-15.2,97,97,0,0,1-24.5-25.9H90.4l13.4,41.1Z"
        opacity="0.2"
      />
      <_Path
        d="M208.9,179.8a97,97,0,0,1-24.5,25.9,95.9,95.9,0,0,1-32.2,15.2h0l13.4-41.1Z"
        opacity="0.2"
      />
      <_Path
        d="M202.2,67.1a95.5,95.5,0,0,1,17.1,31.2,98.4,98.4,0,0,1,4.6,35.4h0l-35-25.5,13.3-41.1Z"
        opacity="0.2"
      />
      <_Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polygon
        points="128 86 88.1 115 103.3 162 152.7 162 167.9 115 128 86"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="128"
        y1="64"
        x2="128"
        y2="86"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="163 38.6 128 64 93 38.6"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="67.1"
        y1="108.2"
        x2="88.1"
        y2="115"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="53.8 67.1 67.1 108.2 32.1 133.7"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="90.4"
        y1="179.8"
        x2="103.3"
        y2="162"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="47.1 179.8 90.4 179.8 103.8 220.9"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="165.6"
        y1="179.8"
        x2="152.7"
        y2="162"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="152.2 220.9 165.6 179.8 208.9 179.8"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="188.9"
        y1="108.2"
        x2="167.9"
        y2="115"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="223.9 133.7 188.9 108.2 202.2 67.1"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'SoccerBallDuotone'

export const SoccerBallDuotone = memo<IconProps>(themed(Icon))
