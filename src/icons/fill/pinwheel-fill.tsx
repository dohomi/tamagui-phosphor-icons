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
      <_Path d="M229.7,218.3l-48.4-48.4,3.3-1a59.6,59.6,0,0,0,33.9-31.1,60.4,60.4,0,0,0,2-45.9,8.4,8.4,0,0,0-4.2-4.5,7.6,7.6,0,0,0-6.1-.2l-44.4,16.1,1-2A60,60,0,0,0,91.9,19.5a8.4,8.4,0,0,0-4.5,4.2,7.6,7.6,0,0,0-.2,6.1l16.1,44.4-2-1a60,60,0,0,0-81.8,74.9,8.4,8.4,0,0,0,4.2,4.5,7.7,7.7,0,0,0,3.4.7,6.5,6.5,0,0,0,2.7-.5l44.4-16.1-1,2a60,60,0,0,0,54.3,85.4,61.2,61.2,0,0,0,20.6-3.6,8.4,8.4,0,0,0,4.5-4.2,7.6,7.6,0,0,0,.2-6.1l-16.1-44.4,2,1a59.6,59.6,0,0,0,22.4,5.6l57.2,57.3a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,229.7,218.3ZM131.1,36a44.2,44.2,0,0,1,3.7,77.9L105.2,32.5A43.8,43.8,0,0,1,131.1,36ZM108.9,204a44.2,44.2,0,0,1-3.7-77.9l29.6,81.4A43.8,43.8,0,0,1,108.9,204Z" />
    </_Svg>
  )
}

Icon.displayName = 'PinwheelFill'

export const PinwheelFill = memo<IconProps>(themed(Icon))
