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
      <_Path d="M229.7,146.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L200,139.3l-18.3,18.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L188.7,128l-18.4-18.3a8.1,8.1,0,0,1,11.4-11.4L200,116.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L211.3,128Zm-26.9,18.5a3.9,3.9,0,0,0-5.6,0L193,169a24,24,0,0,1-17,7,23.6,23.6,0,0,1-17.2-7.3c-9.2-9.5-8.7-24.7.6-34.1l6.7-6.6-6.7-6.6c-9.5-9.6-9.7-25.4,0-34.7A24.1,24.1,0,0,1,193,87l4.2,4.2a3.9,3.9,0,0,0,5.6,0L207,87h0a2.9,2.9,0,0,0,1-2.3V43.8a16.6,16.6,0,0,0-9.2-15A15.9,15.9,0,0,0,180.7,32L16.3,196.4a16.3,16.3,0,0,0-4,17,15.9,15.9,0,0,0,15,10.6H192a16,16,0,0,0,16-16V171.2a3,3,0,0,0-1-2.2h0Z" />
    </_Svg>
  )
}

Icon.displayName = 'CellSignalXFill'

export const CellSignalXFill = memo<IconProps>(themed(Icon))
