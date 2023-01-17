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
      <_Path d="M140,52a24,24,0,1,1,24,24A24.1,24.1,0,0,1,140,52ZM255,204a8.1,8.1,0,0,1-7,4H8a7.8,7.8,0,0,1-6.9-4,7.9,7.9,0,0,1,0-8.1L74.2,71.7a16,16,0,0,1,27.6,0l42.3,71.9,26.1-44.1a16.1,16.1,0,0,1,27.6,0l57.1,96.4A8.3,8.3,0,0,1,255,204ZM64.3,120h47.4L88,79.8Z" />
    </_Svg>
  )
}

Icon.displayName = 'MountainsFill'

export const MountainsFill = memo<IconProps>(themed(Icon))
