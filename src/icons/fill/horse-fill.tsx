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
      <_Path d="M202.1,55A103.2,103.2,0,0,0,128,24h-8a8,8,0,0,0-8,8V59.5L11.8,121.2a8,8,0,0,0-3.6,5.2,7.8,7.8,0,0,0,1.3,6.3l13.8,19.1a31.6,31.6,0,0,0,31.3,12.8c13.7-2.3,38.6-4.2,61.6,6.2L90,207.4a91.1,91.1,0,0,1-20.7-13.8,8,8,0,0,0-11.3.6,8,8,0,0,0,.7,11.3A103.5,103.5,0,0,0,128,232h2.1a104,104,0,0,0,72-177ZM124,112a12,12,0,1,1,12-12A12,12,0,0,1,124,112Z" />
    </_Svg>
  )
}

Icon.displayName = 'HorseFill'

export const HorseFill = memo<IconProps>(themed(Icon))
