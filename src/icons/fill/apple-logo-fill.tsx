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
      <_Path d="M130.7,29.6A40.2,40.2,0,0,1,168,4a8,8,0,0,1,0,16,24.1,24.1,0,0,0-22.4,15.4,8,8,0,0,1-7.5,5.1,9.2,9.2,0,0,1-2.8-.5A8,8,0,0,1,130.7,29.6ZM222,155.8a40,40,0,0,1-2.7-70A8.2,8.2,0,0,0,221.5,74,68,68,0,0,0,128,61,68,68,0,0,0,20,116a135,135,0,0,0,22.9,74c14.4,21.3,32.7,34,49.1,34h72c22.5,0,47.9-23.9,61.9-58A7.9,7.9,0,0,0,222,155.8Z" />
    </_Svg>
  )
}

Icon.displayName = 'AppleLogoFill'

export const AppleLogoFill = memo<IconProps>(themed(Icon))
