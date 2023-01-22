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
      <_Path d="M217,35.1a15.9,15.9,0,0,0-14.8-1.7C188.2,38.9,159.8,48,128,48S67.8,38.9,53.8,33.4A16,16,0,0,0,32,48.3V104c0,35.8,9.7,69.5,27.2,95s42.6,41,68.8,41,50.7-14.5,68.8-41S224,139.8,224,104V48.3A15.9,15.9,0,0,0,217,35.1ZM68.2,125.3a8,8,0,0,1,.6-11.3,8,8,0,0,1,11.3.7,16,16,0,0,0,23.8,0,8,8,0,0,1,11.3-.7,8,8,0,0,1,.6,11.3,31.8,31.8,0,0,1-47.6,0Zm93,63.1a8.1,8.1,0,0,1-11.1,2.3,39.8,39.8,0,0,0-44.2,0,8,8,0,0,1-11.1-2.3A8.1,8.1,0,0,1,97,177.3a56.3,56.3,0,0,1,62,0A8.1,8.1,0,0,1,161.2,188.4Zm26.6-63.1a31.8,31.8,0,0,1-47.6,0,8,8,0,0,1,.6-11.3,8,8,0,0,1,11.3.7,16,16,0,0,0,23.8,0,8,8,0,0,1,11.3-.7A8,8,0,0,1,187.8,125.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'MaskSadFill'

export const MaskSadFill = memo<IconProps>(themed(Icon))
