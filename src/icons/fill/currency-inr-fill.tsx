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
      <_Path d="M208,80a8,8,0,0,1-8,8H167.9c0,1.3.1,2.7.1,4a60,60,0,0,1-60,60H92.7l72.7,66.1a7.9,7.9,0,0,1,.5,11.3A8,8,0,0,1,160,232a8.2,8.2,0,0,1-5.4-2.1l-88-80A8,8,0,0,1,72,136h36a44,44,0,0,0,44-44c0-1.3-.1-2.7-.2-4H72a8,8,0,0,1,0-16h75.2A44.1,44.1,0,0,0,108,48H72a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16H148.7a60.2,60.2,0,0,1,15.9,24H200A8,8,0,0,1,208,80Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyInrFill'

export const CurrencyInrFill = memo<IconProps>(themed(Icon))
