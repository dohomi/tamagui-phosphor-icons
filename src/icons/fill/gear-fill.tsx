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
      <_Path d="M234.8,150.4l-14.9-19.8c.1-1.8,0-3.7,0-5.1l14.9-19.9a7.8,7.8,0,0,0,1.3-6.9,114.8,114.8,0,0,0-10.9-26.4,8.2,8.2,0,0,0-5.8-4l-24.5-3.5-3.7-3.7-3.5-24.5a8.4,8.4,0,0,0-3.9-5.8,117.5,117.5,0,0,0-26.5-10.9,7.8,7.8,0,0,0-6.9,1.3L130.6,36h-5.2L105.6,21.2a7.8,7.8,0,0,0-6.9-1.3A114.8,114.8,0,0,0,72.3,30.8a8.2,8.2,0,0,0-4,5.8L64.8,61.1l-3.7,3.7L36.6,68.3a8.2,8.2,0,0,0-5.8,4A114.8,114.8,0,0,0,19.9,98.7a7.8,7.8,0,0,0,1.3,6.9l14.9,19.8v5.1L21.2,150.4a7.8,7.8,0,0,0-1.3,6.9,114.8,114.8,0,0,0,10.9,26.4,8.2,8.2,0,0,0,5.8,4l24.5,3.5,3.7,3.7,3.5,24.5a8.2,8.2,0,0,0,4,5.8,114.8,114.8,0,0,0,26.4,10.9,7.6,7.6,0,0,0,2.1.3,7.7,7.7,0,0,0,4.8-1.6L125.4,220h5.2l19.8,14.8a7.8,7.8,0,0,0,6.9,1.3,113,113,0,0,0,26.4-10.9,8.2,8.2,0,0,0,4-5.8l3.5-24.6c1.2-1.2,2.6-2.5,3.6-3.6l24.6-3.5a8.2,8.2,0,0,0,5.8-4,114.8,114.8,0,0,0,10.9-26.4A7.8,7.8,0,0,0,234.8,150.4ZM128,172a44,44,0,1,1,44-44A44,44,0,0,1,128,172Z" />
    </_Svg>
  )
}

Icon.displayName = 'GearFill'

export const GearFill = memo<IconProps>(themed(Icon))
