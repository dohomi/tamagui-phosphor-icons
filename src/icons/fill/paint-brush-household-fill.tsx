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
      <_Path d="M230.6,25.4a31.9,31.9,0,0,0-45.2,0l-.3.3L130.2,86.9,121,77.7a23.9,23.9,0,0,0-34,0L10.3,154.3a8.1,8.1,0,0,0,0,11.4l80,80a8.2,8.2,0,0,0,11.4,0L178.3,169a23.9,23.9,0,0,0,0-34l-9.2-9.2,61.2-54.9.3-.3A31.9,31.9,0,0,0,230.6,25.4ZM96,228.7,81.9,214.6,107.4,189a8,8,0,0,0-11.3-11.3L70.6,203.3,53.9,186.6,79.4,161a8,8,0,0,0-11.3-11.3L42.6,175.3,27.3,160,72,115.3,140.7,184Z" />
    </_Svg>
  )
}

Icon.displayName = 'PaintBrushHouseholdFill'

export const PaintBrushHouseholdFill = memo<IconProps>(themed(Icon))
