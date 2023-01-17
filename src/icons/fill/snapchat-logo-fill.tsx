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
      <_Path d="M243,194.5c-7.2,6.7-17.5,7.4-26.6,8-5.7.4-11.7.8-15.2,2.7s-6.8,6.7-10.2,11.3c-5.4,7.4-11.5,15.8-21.2,18.3s-18.6-1.9-26.8-5.7c-5.3-2.5-10.8-5.1-15-5.1s-9.7,2.6-15,5.1-13.7,6.4-21.2,6.4a27.7,27.7,0,0,1-5.6-.7c-9.7-2.5-15.8-10.9-21.2-18.3-3.4-4.6-6.8-9.4-10.2-11.3s-9.5-2.3-15.2-2.7c-9.1-.6-19.4-1.3-26.6-8a8,8,0,0,1,2.1-13.1c.3-.1,12.5-6,24.5-21.3a105.5,105.5,0,0,0,17.3-32.7l-19.9-8a8,8,0,1,1,6-14.8l18,7.2A160.5,160.5,0,0,0,64,80a64,64,0,0,1,128,0,160.5,160.5,0,0,0,3,31.8l18-7.2a8,8,0,0,1,6,14.8l-19.9,8a105.5,105.5,0,0,0,17.3,32.7c12.1,15.3,24.3,21.3,24.5,21.3a8,8,0,0,1,2.1,13.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'SnapchatLogoFill'

export const SnapchatLogoFill = memo<IconProps>(themed(Icon))
