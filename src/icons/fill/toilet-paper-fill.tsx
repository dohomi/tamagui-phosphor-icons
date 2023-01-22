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
      <_Path d="M184,120a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h16A8,8,0,0,1,184,120Zm56,0v88a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V186.3C87.4,200.4,76.2,208,64,208c-13.9,0-26.5-9.9-35.4-27.9C20.5,163.9,16,142.6,16,120s4.5-43.9,12.6-60.1C37.5,41.9,50.1,32,64,32H192c13.9,0,26.5,9.9,35.4,27.9C235.5,76.1,240,97.4,240,120ZM76,120a12,12,0,1,0-12,12A12,12,0,0,0,76,120Zm148,8H208a8,8,0,0,1,0-16h15.8c-2-38.1-17.6-64-31.8-64H92.1a65,65,0,0,1,7.3,11.9c7.2,14.2,11.5,32.5,12.4,52.1H128a8,8,0,0,1,0,16H112v80H224Z" />
    </_Svg>
  )
}

Icon.displayName = 'ToiletPaperFill'

export const ToiletPaperFill = memo<IconProps>(themed(Icon))
