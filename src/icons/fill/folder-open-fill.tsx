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
      <_Path d="M241.9,110.6a16.2,16.2,0,0,0-13-6.6H216V88a16,16,0,0,0-16-16H130.7L102.9,51.2A15.6,15.6,0,0,0,93.3,48H40A16,16,0,0,0,24,64V208h0a7.9,7.9,0,0,0,8,8H208a8,8,0,0,0,7.6-5.5l28.5-85.4A16.3,16.3,0,0,0,241.9,110.6ZM93.3,64l27.8,20.8a15.6,15.6,0,0,0,9.6,3.2H200v16H69.8a16,16,0,0,0-15.2,10.9L40,158.7V64Z" />
    </_Svg>
  )
}

Icon.displayName = 'FolderOpenFill'

export const FolderOpenFill = memo<IconProps>(themed(Icon))
