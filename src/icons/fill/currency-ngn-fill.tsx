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
      <_Path d="M216,136H200V120h16a8,8,0,0,0,0-16H200V46a8,8,0,0,0-16,0v58H119.4L70.3,41.1A8,8,0,0,0,56,46v58H40a8,8,0,0,0,0,16H56v16H40a8,8,0,0,0,0,16H56v58a8,8,0,0,0,16,0V152h64.6l49.1,62.9a8.1,8.1,0,0,0,8.9,2.7A8.1,8.1,0,0,0,200,210V152h16a8,8,0,0,0,0-16Zm-32-16v16H144.4l-12.5-16ZM72,69.3,99.1,104H72ZM72,136V120h39.6l12.5,16Zm112,50.7L156.9,152H184Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyNgnFill'

export const CurrencyNgnFill = memo<IconProps>(themed(Icon))
