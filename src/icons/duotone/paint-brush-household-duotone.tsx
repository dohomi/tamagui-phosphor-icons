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
        d="M92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2a8,8,0,0,0,11.6-.3L191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L152,184,72,104Z"
        opacity="0.2"
      />
      <_Line
        x1="72"
        y1="104"
        x2="152"
        y2="184"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="101.8"
        y1="183.4"
        x2="70.6"
        y2="214.6"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="73.8"
        y1="155.4"
        x2="42.6"
        y2="186.6"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'PaintBrushHouseholdDuotone'

export const PaintBrushHouseholdDuotone = memo<IconProps>(themed(Icon))
