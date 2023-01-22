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
      <_Path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.4L57.8,219A8,8,0,0,0,64,232a7.8,7.8,0,0,0,6.2-3l29.6-37h56.4l29.6,37a7.8,7.8,0,0,0,6.2,3,8,8,0,0,0,6.2-13l-21.6-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" />
    </_Svg>
  )
}

Icon.displayName = 'PresentationFill'

export const PresentationFill = memo<IconProps>(themed(Icon))
