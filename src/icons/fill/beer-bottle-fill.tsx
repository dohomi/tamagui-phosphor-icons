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
      <_Path d="M245.7,42.3l-32-32a8.1,8.1,0,0,0-11.4,11.4l1.5,1.4L148.7,64.5l-38.3,7.7a8.5,8.5,0,0,0-4.1,2.1l-16,16h0l-56,56h0L21.7,159a23.9,23.9,0,0,0,0,34L63,234.3a23.9,23.9,0,0,0,34,0l12.7-12.6h0l56-56h0l16-16a8.5,8.5,0,0,0,2.1-4.1l7.7-38.3,41.4-55.1,1.4,1.5a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,245.7,42.3ZM74.3,223,33,181.7a8,8,0,0,1,0-11.4l7-7L92.7,216l-7,7A8.1,8.1,0,0,1,74.3,223ZM177.6,99.2a8.3,8.3,0,0,0-1.4,3.2l-7.6,37.7-8.6,8.6L107.3,96l8.6-8.6,37.7-7.6a8.3,8.3,0,0,0,3.2-1.4l58.4-43.8,6.2,6.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'BeerBottleFill'

export const BeerBottleFill = memo<IconProps>(themed(Icon))
