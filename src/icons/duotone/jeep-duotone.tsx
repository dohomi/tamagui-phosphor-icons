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
        d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176Z"
        opacity="0.2"
      />
      <_Path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176Z" opacity="0.2" />
      <_Path
        d="M36,96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
        opacity="0.2"
      />
      <_Path
        d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="16"
        y1="96"
        x2="240"
        y2="96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="144"
        y1="128"
        x2="144"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="112"
        y1="128"
        x2="112"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M220,176H36V96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="72" cy="132" r="12" fill={`${color}`} />
      <_Circle cx="184" cy="132" r="12" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'JeepDuotone'

export const JeepDuotone = memo<IconProps>(themed(Icon))
