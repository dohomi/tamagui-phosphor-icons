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
      <_Path d="M207,50.2A87.7,87.7,0,0,0,144.6,24h-.3A87.3,87.3,0,0,0,82,49.8L48.3,83.9h0L15.9,116.7a16.1,16.1,0,0,0,.1,22.6l28.6,28.6a15.6,15.6,0,0,0,11.3,4.7H56a15.8,15.8,0,0,0,11.4-4.8l32-32.8h0L133,100.7a16.1,16.1,0,0,1,22.4-.2,15.7,15.7,0,0,1,4.7,11.2,17,17,0,0,1-4.9,12l-34.1,33h0L88.3,188.6a15.9,15.9,0,0,0-.2,22.8l28.6,28.7a16.3,16.3,0,0,0,22.6.1l32.9-32.4h0l33.6-32.9C240.2,140.5,240.8,84.6,207,50.2ZM55.9,156.6,27.3,128,54,100.9l28.5,28.5Zm72.2,72.1L99.4,200.1l27.3-26.5,28.5,28.5Z" />
    </_Svg>
  )
}

Icon.displayName = 'MagnetFill'

export const MagnetFill = memo<IconProps>(themed(Icon))
