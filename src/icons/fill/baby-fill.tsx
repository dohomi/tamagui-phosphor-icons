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
      <_Path d="M134.2,24.2a3.9,3.9,0,0,0-3.6,1.8C120.3,41.6,120,55.9,120,56a7.9,7.9,0,0,0,9.7,7.8c3.7-.7,6.2-4.2,6.3-8a8.1,8.1,0,0,1,8.8-7.8,8.2,8.2,0,0,1,7.2,8.3,24,24,0,0,1-48-.3c0-.6.1-10.8,5.4-24a4,4,0,0,0-4.6-5.4A104.1,104.1,0,0,0,24.1,131.7C26,186.8,71.2,231.1,126.3,232a104,104,0,0,0,7.9-207.8ZM80,128a12,12,0,1,1,12,12A12,12,0,0,1,80,128Zm79,46.7a56.3,56.3,0,0,1-62,0,8.1,8.1,0,0,1-2.2-11.1,8,8,0,0,1,11.1-2.3,39.8,39.8,0,0,0,44.2,0,8,8,0,0,1,11.1,2.3A8.1,8.1,0,0,1,159,174.7Zm5-34.7a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z" />
    </_Svg>
  )
}

Icon.displayName = 'BabyFill'

export const BabyFill = memo<IconProps>(themed(Icon))
