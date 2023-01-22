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
      <_Path d="M216,72H181a32,32,0,0,0-47.3-42.9,29.2,29.2,0,0,0-5.7,8.2,29.2,29.2,0,0,0-5.7-8.2A32,32,0,0,0,75,72H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM145,40.4A16,16,0,1,1,167.6,63c-4.9,5-19.2,7.7-31.3,8.7C137.3,59.6,140,45.3,145,40.4Zm-56.6,0a16.1,16.1,0,0,1,22.6,0c5,4.9,7.7,19.2,8.7,31.3-12.1-1-26.4-3.7-31.3-8.7A16.1,16.1,0,0,1,88.4,40.4ZM216,120H136v72a8,8,0,0,1-16,0V120H40V88h80v32h16V88h80v32Z" />
    </_Svg>
  )
}

Icon.displayName = 'GiftFill'

export const GiftFill = memo<IconProps>(themed(Icon))
