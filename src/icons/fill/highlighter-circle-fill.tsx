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
      <_Path d="M201.5,54.5a103.8,103.8,0,0,0-147,0,103.8,103.8,0,0,0,0,147,103.8,103.8,0,0,0,147,0,103.8,103.8,0,0,0,0-147ZM96,210V152h64v58a88.3,88.3,0,0,1-64,0Zm94.2-19.8A86.8,86.8,0,0,1,176,201.8V152a16,16,0,0,0-16-16V72a7.9,7.9,0,0,0-3.8-6.8,8,8,0,0,0-7.8-.4l-48,24A8.2,8.2,0,0,0,96,96v40a16,16,0,0,0-16,16v49.8A88.7,88.7,0,0,1,40,128a88,88,0,1,1,150.2,62.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'HighlighterCircleFill'

export const HighlighterCircleFill = memo<IconProps>(themed(Icon))
