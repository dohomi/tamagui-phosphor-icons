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
      <_Path d="M219.6,40.8a8.2,8.2,0,0,0-8.4.8c-28.3,21.2-52.3,11-80-.9s-60.3-25.9-96,.9A8,8,0,0,0,32,48h0V216a8,8,0,0,0,16,0V172.1c26.9-18.1,50.1-8.2,76.8,3.3,16.3,6.9,33.8,14.4,52.6,14.4,13.8,0,28.3-4,43.4-15.4A8.1,8.1,0,0,0,224,168V48A8.2,8.2,0,0,0,219.6,40.8ZM156,170.3V116.8c-18.9-5.4-37.1-15.9-56-21.3v53.6c-16.3-4.2-33.6-4.8-52,4.5V100.8c18.3-10.6,35.4-10,52-5.3V45.7a243.3,243.3,0,0,1,24.8,9.7c10,4.2,20.4,8.7,31.2,11.5v49.9c16.6,4.7,33.7,5.3,52-5.3v52.4C189.7,176.2,173.1,175.6,156,170.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'FlagCheckeredFill'

export const FlagCheckeredFill = memo<IconProps>(themed(Icon))
