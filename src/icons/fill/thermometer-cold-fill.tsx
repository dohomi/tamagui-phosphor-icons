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
      <_Path d="M244.9,77.7l-20,6.5,12.4,17a8,8,0,0,1-1.8,11.2,8.1,8.1,0,0,1-11.2-1.8L212,93.6l-12.3,17a8.1,8.1,0,0,1-11.2,1.8,8,8,0,0,1-1.8-11.2l12.4-17-20-6.5A7.9,7.9,0,0,1,174,67.6a7.8,7.8,0,0,1,10-5.1L204,69V48a8,8,0,0,1,16,0V69l20-6.5a7.8,7.8,0,0,1,10,5.1A7.9,7.9,0,0,1,244.9,77.7ZM180,188a60,60,0,0,1-120,0,59.4,59.4,0,0,1,20-44.7V48a40,40,0,0,1,80,0v95.3A59.4,59.4,0,0,1,180,188ZM96,48v56h48V48a24,24,0,0,0-48,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'ThermometerColdFill'

export const ThermometerColdFill = memo<IconProps>(themed(Icon))
