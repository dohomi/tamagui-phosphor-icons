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
      <_Path d="M225,23c-21.3,0-45.3,11.8-71.1,34.9-18.1,16.2-33.6,34.7-44.3,48.7A60.1,60.1,0,0,0,32,164c0,31.2-16.2,45.1-17,45.8a7.7,7.7,0,0,0-2.5,8.8A7.8,7.8,0,0,0,20,224H92a60.1,60.1,0,0,0,57.4-77.6c14-10.7,32.5-26.2,48.7-44.3C221.2,76.3,233,52.3,233,31A8,8,0,0,0,225,23ZM124.4,113.6c2.9-3.7,6.3-7.9,10.2-12.5a75.4,75.4,0,0,1,20.3,20.3c-4.6,3.9-8.8,7.3-12.5,10.2A59.4,59.4,0,0,0,124.4,113.6Zm42.6-2.9A93.1,93.1,0,0,0,145.3,89c19.6-21.2,46-44.4,70.8-49.1C211.4,64.7,188.2,91.1,167,110.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'PaintBrushFill'

export const PaintBrushFill = memo<IconProps>(themed(Icon))
