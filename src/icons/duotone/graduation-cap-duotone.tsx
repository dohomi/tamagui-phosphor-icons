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
        d="M36,110.9v54.6a7.8,7.8,0,0,0,1.6,4.7c6.7,9,35.1,41.8,90.4,41.8s83.7-32.8,90.4-41.8a7.8,7.8,0,0,0,1.6-4.7V110.9L128,160Z"
        opacity="0.2"
      />
      <_Polygon
        points="8 96 128 32 248 96 128 160 8 96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="188 240 188 128 128 96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M220,110.9v54.6a7.8,7.8,0,0,1-1.6,4.7c-6.7,9-35.1,41.8-90.4,41.8s-83.7-32.8-90.4-41.8a7.8,7.8,0,0,1-1.6-4.7V110.9"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'GraduationCapDuotone'

export const GraduationCapDuotone = memo<IconProps>(themed(Icon))
