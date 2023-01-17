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
      <_Path d="M221.7,34.3A8.1,8.1,0,0,0,216,32h0l-63.8.2a8.1,8.1,0,0,0-6.2,2.9L75.6,120.3,67.3,112a16.1,16.1,0,0,0-22.6,0L32,124.7a15.9,15.9,0,0,0,0,22.6l20.9,20.9-30,29.9a16.2,16.2,0,0,0,0,22.7l12.3,12.3a16.3,16.3,0,0,0,22.7,0l29.9-30L108.7,224a16.1,16.1,0,0,0,22.6,0L144,211.3a15.9,15.9,0,0,0,0-22.6l-8.3-8.3L220.9,110a8.1,8.1,0,0,0,2.9-6.2L224,40A8.1,8.1,0,0,0,221.7,34.3ZM207.8,100l-83.5,69-13-13,54.4-54.3a8.1,8.1,0,0,0-11.4-11.4L100,144.7l-13-13,69-83.5,52-.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'SwordFill'

export const SwordFill = memo<IconProps>(themed(Icon))
