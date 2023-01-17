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
      <_Path d="M137.9,148.2h0L87.1,52.3a8,8,0,0,0-14.2,0L22.1,148.2h0L.9,188.3a8.1,8.1,0,0,0,3.4,10.8,8.1,8.1,0,0,0,10.8-3.4L34,160h92l18.9,35.7A7.9,7.9,0,0,0,152,200a8,8,0,0,0,7.1-11.7ZM42.5,144,80,73.1,117.5,144ZM208,94.9a42,42,0,0,0-29.6,11.8,8,8,0,1,0,11.2,11.4,26,26,0,0,1,18.4-7.2c13.2,0,24,9,24,20v7.2a43,43,0,0,0-24-7.2c-22.1,0-40,16.1-40,36s17.9,36,40,36a42.9,42.9,0,0,0,24.7-7.7A7.9,7.9,0,0,0,240,200a8,8,0,0,0,8-8V130.9C248,111,230.1,94.9,208,94.9Zm0,92c-13.2,0-24-9-24-20s10.8-20,24-20,24,9,24,20S221.2,186.9,208,186.9Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextAaFill'

export const TextAaFill = memo<IconProps>(themed(Icon))
