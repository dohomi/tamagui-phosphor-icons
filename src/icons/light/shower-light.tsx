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
      <_Circle cx="60" cy="228" r="10" fill={`${color}`} />
      <_Circle cx="88" cy="200" r="10" fill={`${color}`} />
      <_Circle cx="28" cy="196" r="10" fill={`${color}`} />
      <_Circle cx="56" cy="168" r="10" fill={`${color}`} />
      <_Path
        d="M248,40H219.3a7.9,7.9,0,0,0-5.6,2.3L184,72,55.3,93.4A8,8,0,0,0,51,107l98,98a8,8,0,0,0,13.6-4.3L184,72"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </_Svg>
  )
}

Icon.displayName = 'ShowerLight'

export const ShowerLight = memo<IconProps>(themed(Icon))
