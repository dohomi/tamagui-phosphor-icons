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
        d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6h0A70.2,70.2,0,0,1,168,104a72,72,0,0,1-72,72Z"
        opacity="0.2"
      />
      <_Path
        d="M34.1,140.7a72.1,72.1,0,1,1,25.2,25.2h0L34.4,173a6,6,0,0,1-7.4-7.4l7.1-24.9Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M92.1,175.9a71.9,71.9,0,0,0,104.6,38h0l24.9,7.1a6,6,0,0,0,7.4-7.4l-7.1-24.9h0a71.9,71.9,0,0,0-58-108.6"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'ChatsCircleDuotone'

export const ChatsCircleDuotone = memo<IconProps>(themed(Icon))
