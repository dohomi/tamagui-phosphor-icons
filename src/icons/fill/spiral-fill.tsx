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
      <_Path d="M248,144a8,8,0,0,1-16,0,96.2,96.2,0,0,0-96-96,88.1,88.1,0,0,0-88,88,80.1,80.1,0,0,0,80,80,72.1,72.1,0,0,0,72-72,64.1,64.1,0,0,0-64-64,56,56,0,0,0-56,56,48,48,0,0,0,48,48,40,40,0,0,0,40-40,32.1,32.1,0,0,0-32-32,24.1,24.1,0,0,0-24,24,16,16,0,0,0,16,16,8,8,0,0,0,8-8,8,8,0,0,1,0-16,16,16,0,0,1,16,16,24.1,24.1,0,0,1-24,24,32.1,32.1,0,0,1-32-32,40,40,0,0,1,40-40,48,48,0,0,1,48,48,56,56,0,0,1-56,56,64.1,64.1,0,0,1-64-64,72.1,72.1,0,0,1,72-72,80.1,80.1,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.2,96.2,0,0,1-96-96A104.2,104.2,0,0,1,136,32,112.1,112.1,0,0,1,248,144Z" />
    </_Svg>
  )
}

Icon.displayName = 'SpiralFill'

export const SpiralFill = memo<IconProps>(themed(Icon))
