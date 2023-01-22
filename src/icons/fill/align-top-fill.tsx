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
      <_Path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,64H152a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,192,64Zm-88,0H64A16,16,0,0,0,48,80V216a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,104,64Z" />
    </_Svg>
  )
}

Icon.displayName = 'AlignTopFill'

export const AlignTopFill = memo<IconProps>(themed(Icon))
