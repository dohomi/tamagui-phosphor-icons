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
      <_Path d="M119.8,214.8a8.1,8.1,0,0,1-7.8,6.1,6.3,6.3,0,0,1-1.9-.3l-30.2-7.5a15.7,15.7,0,0,1-6.6-3.5L50.8,190a7.9,7.9,0,1,1,10.4-12l22.6,19.6,30.1,7.5A8.1,8.1,0,0,1,119.8,214.8Zm132.6-95.2a15.8,15.8,0,0,1-8.1,9.3L221,140.6l-14.9,17.5h-.2c0,.1-.1.1-.1.2h-.1l-36.8,36.8a16.5,16.5,0,0,1-11.4,4.7,15.8,15.8,0,0,1-3.8-.5L95.7,185a15.2,15.2,0,0,1-6-2.9l-54-42.2-24-12a16.3,16.3,0,0,1-8.1-9.4,16,16,0,0,1,1.1-12.3L29.3,59.1a16.1,16.1,0,0,1,21.3-7L73,63.3l48.7-14.2a16.6,16.6,0,0,1,11,.8l33,15h16.4l23.3-11.7a16,16,0,0,1,21.3,6.9l24.6,47.1A16.2,16.2,0,0,1,252.4,119.6Zm-64.7,34.2-31.6-23-8.1,6.1a40.2,40.2,0,0,1-48,0l-5.4-4.1a15.9,15.9,0,0,1-1.7-24.1L132,69.5l1.8-1.5-7.7-3.5L77.4,78.7,50.2,130.9l49.4,38.6L157.5,184Zm18.7-20.7L179.2,80.9H143.3L104.2,120l5.4,4.1a24.3,24.3,0,0,0,28.8,0l12.8-9.6a8,8,0,0,1,9.5-.1l38,27.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'HandshakeFill'

export const HandshakeFill = memo<IconProps>(themed(Icon))
