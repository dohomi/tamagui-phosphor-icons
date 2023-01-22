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
      <_Path d="M237.7,178.3a8.1,8.1,0,0,1,0,11.4l-24,24A8.3,8.3,0,0,1,208,216a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,200,208V192a72.2,72.2,0,0,1-57.7-30.2l-41.7-58.3A56.1,56.1,0,0,0,55.1,80H32a8,8,0,0,1,0-16H55.1a72.2,72.2,0,0,1,58.6,30.2l41.7,58.3A55.9,55.9,0,0,0,200,176V160a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7ZM143,107a8,8,0,0,0,11.2-1.9l1.2-1.6A55.9,55.9,0,0,1,200,80V96a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l24-24a8.1,8.1,0,0,0,0-11.4l-24-24a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,200,48V64a72.2,72.2,0,0,0-57.7,30.2l-1.1,1.6A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.2,1.9l-1.2,1.6A56.1,56.1,0,0,1,55.1,176H32a8,8,0,0,0,0,16H55.1a72.2,72.2,0,0,0,58.6-30.2l1.1-1.6A8,8,0,0,0,113,149Z" />
    </_Svg>
  )
}

Icon.displayName = 'ShuffleFill'

export const ShuffleFill = memo<IconProps>(themed(Icon))
