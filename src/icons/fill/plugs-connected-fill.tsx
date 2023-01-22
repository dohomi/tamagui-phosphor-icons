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
      <_Path d="M237.7,18.3a8.1,8.1,0,0,0-11.4,0L176,68.7l-5.4-5.4a31.9,31.9,0,0,0-45.2,0L100,88.7l-2.3-2.4A8.1,8.1,0,0,0,86.3,97.7l2.4,2.3L63.3,125.4a31.9,31.9,0,0,0,0,45.2l5.4,5.4L18.3,226.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L80,187.3l5.4,5.4a32.1,32.1,0,0,0,45.2,0L156,167.3l2.3,2.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4l-2.4-2.3,25.4-25.4a31.9,31.9,0,0,0,0-45.2L187.3,80l50.4-50.3A8.1,8.1,0,0,0,237.7,18.3Zm-56.3,101L156,144.7,111.3,100l25.4-25.4a15.9,15.9,0,0,1,22.6,0l22.1,22.1a15.9,15.9,0,0,1,0,22.6Zm50.2,43.2A7.9,7.9,0,0,1,224,168a7.3,7.3,0,0,1-2.5-.4l-24-8a8,8,0,1,1,5-15.2l24,8A8,8,0,0,1,231.6,162.5ZM24.4,93.5a8,8,0,0,1,10.1-5.1l24,8A8,8,0,0,1,56,112a7.3,7.3,0,0,1-2.5-.4l-24-8A8,8,0,0,1,24.4,93.5Zm64-59a8,8,0,0,1,15.2-5l8,24a8,8,0,0,1-5.1,10.1,7.3,7.3,0,0,1-2.5.4,7.9,7.9,0,0,1-7.6-5.5Zm79.2,187a8,8,0,0,1-5.1,10.1,7.3,7.3,0,0,1-2.5.4,7.9,7.9,0,0,1-7.6-5.5l-8-24a8,8,0,1,1,15.2-5Z" />
    </_Svg>
  )
}

Icon.displayName = 'PlugsConnectedFill'

export const PlugsConnectedFill = memo<IconProps>(themed(Icon))
