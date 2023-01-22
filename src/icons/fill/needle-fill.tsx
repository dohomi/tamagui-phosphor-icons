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
      <_Path d="M212.3,43.7a40.1,40.1,0,0,0-56.6,0l-24,24a8.1,8.1,0,0,0-2.2,4.3C120.7,123.3,36,208.7,34.4,210.3h-.1a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0h0c.8-.9,86.8-86.4,138.3-95.2a8.1,8.1,0,0,0,4.3-2.2l24-24a40.1,40.1,0,0,0,0-56.6Zm-22.6,34-16,16a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l16-16a8.1,8.1,0,0,1,11.4,11.4Z" />
    </_Svg>
  )
}

Icon.displayName = 'NeedleFill'

export const NeedleFill = memo<IconProps>(themed(Icon))
