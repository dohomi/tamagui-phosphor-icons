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
      <_Path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm30.2,92c-26.5,26.4-68.4,37.4-125.1,32.9,1.6,11.8,3.8,24.3,6.7,37.4a7.9,7.9,0,0,1-6.1,9.5L72,248a8,8,0,0,1-7.8-6.3c-3.3-14.9-5.7-29.1-7.4-42.5-13.4-1.7-27.6-4.2-42.5-7.4a8,8,0,0,1,3.4-15.7c13.1,2.9,25.6,5.2,37.4,6.8C50.6,126.2,61.6,84.3,88,57.8c41-41,105.8-30.9,124.7-26.8A15.9,15.9,0,0,1,225,43.3C229.1,62.2,239.2,127,198.2,168ZM209.4,46.7c-15-3.3-62.3-10.9-97.3,12.1a87.9,87.9,0,0,0,85.1,85.1C220.2,108.9,212.6,61.6,209.4,46.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'FishSimpleFill'

export const FishSimpleFill = memo<IconProps>(themed(Icon))
