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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm24,150a33.9,33.9,0,1,1-48-48,26.6,26.6,0,0,1,3.1-2.6l-.3-.2a29.9,29.9,0,0,1,0-42.4c11.3-11.3,31.1-11.3,42.4,0a29.9,29.9,0,0,1,0,42.4l-.3.2A26.6,26.6,0,0,1,152,126a33.8,33.8,0,0,1,0,48Z" />
      <_Path d="M137.9,111.9a14,14,0,1,0-19.8,0A14.3,14.3,0,0,0,137.9,111.9Z" />
      <_Path d="M128,132a18,18,0,0,0-12.7,30.7,18.4,18.4,0,0,0,25.4,0A18,18,0,0,0,128,132Z" />
    </_Svg>
  )
}

Icon.displayName = 'NumberCircleEightFill'

export const NumberCircleEightFill = memo<IconProps>(themed(Icon))
