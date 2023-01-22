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
      <_Path d="M223.8,170.7a7.8,7.8,0,0,0-5.9-2.7H208V64a32.1,32.1,0,0,0-32-32H40A32.1,32.1,0,0,0,8,64a31.5,31.5,0,0,0,8.2,21.3,7.9,7.9,0,0,0,11.2.7,8,8,0,0,0,.7-11.3A16,16,0,1,1,56,64V192a32.1,32.1,0,0,0,32,32H200a32.1,32.1,0,0,0,32-32A31.5,31.5,0,0,0,223.8,170.7ZM104,96h64a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Zm-8,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Zm104,72H115.7a32.2,32.2,0,0,0,4.3-16,30.8,30.8,0,0,0-1-8h94.9A16.1,16.1,0,0,1,200,208Z" />
    </_Svg>
  )
}

Icon.displayName = 'ScrollFill'

export const ScrollFill = memo<IconProps>(themed(Icon))
