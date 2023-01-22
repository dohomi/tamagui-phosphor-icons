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
      <_Path d="M200,152a31.7,31.7,0,0,0-19.5,6.7l-23.1-18A31.7,31.7,0,0,0,160,128a16.2,16.2,0,0,0-.1-2.2l13.3-4.4A31.9,31.9,0,1,0,168,104a16.2,16.2,0,0,0,.1,2.2l-13.3,4.4A31.9,31.9,0,0,0,128,96a45.5,45.5,0,0,0-5.3.4L115.9,81A31.7,31.7,0,0,0,128,56,32,32,0,1,0,96,88a45.5,45.5,0,0,0,5.3-.4l6.8,15.4A31.7,31.7,0,0,0,96,128a32.4,32.4,0,0,0,3.5,14.6L73.8,165.4A32,32,0,1,0,88,192a32.4,32.4,0,0,0-3.5-14.6l25.7-22.8a31.9,31.9,0,0,0,37.3-1.3l23.1,18A31.7,31.7,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm144-8a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z" />
    </_Svg>
  )
}

Icon.displayName = 'GraphFill'

export const GraphFill = memo<IconProps>(themed(Icon))
