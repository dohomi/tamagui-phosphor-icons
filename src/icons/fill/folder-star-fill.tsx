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
      <_Path d="M120.6,200H40V88H216v32a8,8,0,0,0,16,0V88a16,16,0,0,0-16-16H131.3L104,44.7A15.9,15.9,0,0,0,92.7,40H40A16,16,0,0,0,24,56V200.6A15.4,15.4,0,0,0,39.4,216h81.2a8,8,0,1,0,0-16ZM92.7,56l16,16H40V56ZM241.1,167.8l-22.5,18.6,6.8,27.7a7.9,7.9,0,0,1-3,8.3,7.4,7.4,0,0,1-4.7,1.6,8.7,8.7,0,0,1-4.1-1.1L188,207.8l-25.6,15.1a8,8,0,0,1-8.8-.5,7.9,7.9,0,0,1-3-8.3l6.8-27.7-22.5-18.6a8.1,8.1,0,0,1,4.5-14.2l29.8-2.3,11.5-26.5a8,8,0,0,1,14.6,0l11.5,26.5,29.8,2.3a8.1,8.1,0,0,1,4.5,14.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'FolderStarFill'

export const FolderStarFill = memo<IconProps>(themed(Icon))
