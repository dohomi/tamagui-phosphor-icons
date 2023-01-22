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
      <_Path d="M240,128c0,10.4-7.5,18.3-14.1,25.2-3.8,3.9-7.7,8-9.2,11.5s-1.4,8.7-1.5,14c-.1,9.7-.3,20.8-8,28.5s-18.8,7.9-28.5,8c-5.3.1-10.7.2-14,1.5s-7.6,5.4-11.5,9.2c-6.9,6.6-14.8,14.1-25.2,14.1s-18.3-7.5-25.2-14.1c-3.9-3.8-8-7.7-11.5-9.2s-8.7-1.4-14-1.5c-9.7-.1-20.8-.3-28.5-8s-7.9-18.8-8-28.5c-.1-5.3-.2-10.7-1.5-14s-5.4-7.6-9.2-11.5C23.5,146.3,16,138.4,16,128s7.5-18.3,14.1-25.2c3.8-3.9,7.7-8,9.2-11.5s1.4-8.7,1.5-14c.1-9.7.3-20.8,8-28.5s18.8-7.9,28.5-8c5.3-.1,10.7-.2,14-1.5s7.6-5.4,11.5-9.2C109.7,23.5,117.6,16,128,16s18.3,7.5,25.2,14.1c3.9,3.8,8,7.7,11.5,9.2s8.7,1.4,14,1.5c9.7.1,20.8.3,28.5,8s7.9,18.8,8,28.5c.1,5.3.2,10.7,1.5,14s5.4,7.6,9.2,11.5C232.5,109.7,240,117.6,240,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'CircleWavyFill'

export const CircleWavyFill = memo<IconProps>(themed(Icon))
