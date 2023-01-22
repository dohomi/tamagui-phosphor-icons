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
      <_Path d="M160,80H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" />
      <_Path d="M224,119.9a2.2,2.2,0,0,0-.1-.8v-.5c-.1-.2-.1-.4-.2-.6h0l-22.4-82A15.9,15.9,0,0,0,185.9,24H70.1A15.9,15.9,0,0,0,54.7,35.8l-22.4,82h0c-.1.2-.1.4-.2.6v.5a2.2,2.2,0,0,0-.1.8v.2a2.8,2.8,0,0,0,.1.9h0a2.9,2.9,0,0,0,.2.9h0l22.4,82.1A15.9,15.9,0,0,0,70.1,216H80L65.6,235.2a8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,72,248a8,8,0,0,0,6.4-3.2L100,216h56l21.6,28.8A8,8,0,0,0,184,248a7.7,7.7,0,0,0,4.8-1.6,8,8,0,0,0,1.6-11.2L176,216h9.9a15.9,15.9,0,0,0,15.4-11.8l22.4-82.1h0a2.9,2.9,0,0,0,.2-.9h0a2.8,2.8,0,0,0,.1-.9ZM136,192a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0Zm-8-64.1L50,113.7,70.1,40H185.9L206,113.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'TrainRegionalFill'

export const TrainRegionalFill = memo<IconProps>(themed(Icon))
