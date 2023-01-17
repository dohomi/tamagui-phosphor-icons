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
      <_Path d="M232,95.8v-.4a4.3,4.3,0,0,1-.1-.5v-.3c-.1-.2-.1-.4-.2-.6v-.2L217.4,43.6A16.2,16.2,0,0,0,202,32H54A16.2,16.2,0,0,0,38.6,43.6L24.3,93.8V94c-.1.2-.1.4-.2.6v.3a4.3,4.3,0,0,1-.1.5V112a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32V95.8ZM40,104H88v8a24,24,0,0,1-35.1,21.3,8.7,8.7,0,0,0-1.8-1.1A23.9,23.9,0,0,1,40,112Zm112,8a24,24,0,0,1-48,0v-8h48Zm52.9,20.2a8.7,8.7,0,0,0-1.8,1.1A24,24,0,0,1,168,112v-8h48v8A23.9,23.9,0,0,1,204.9,132.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'StorefrontFill'

export const StorefrontFill = memo<IconProps>(themed(Icon))
