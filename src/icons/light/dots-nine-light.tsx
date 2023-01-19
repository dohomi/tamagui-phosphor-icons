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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Circle cx="60" cy="60" r="10" fill={`${color}`} />
      <_Circle cx="128" cy="60" r="10" fill={`${color}`} />
      <_Circle cx="196" cy="60" r="10" fill={`${color}`} />
      <_Circle cx="60" cy="128" r="10" fill={`${color}`} />
      <_Circle cx="128" cy="128" r="10" fill={`${color}`} />
      <_Circle cx="196" cy="128" r="10" fill={`${color}`} />
      <_Circle cx="60" cy="196" r="10" fill={`${color}`} />
      <_Circle cx="128" cy="196" r="10" fill={`${color}`} />
      <_Circle cx="196" cy="196" r="10" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'DotsNineLight'

export const DotsNineLight = memo<IconProps>(themed(Icon))
