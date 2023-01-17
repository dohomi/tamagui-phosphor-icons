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
      <_Path d="M213.9,210.6a7.9,7.9,0,0,1-.5,11.3A8.2,8.2,0,0,1,208,224a8,8,0,0,1-5.9-2.6l-26.4-29.1c-2.5,14.2-9.9,26.2-15.4,33.5a16.3,16.3,0,0,1-11.7,6.4h-1.1a16.1,16.1,0,0,1-11.3-4.7L88,179.3,53.7,213.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L76.7,168,28.3,119.6a15.9,15.9,0,0,1,1.3-23.8C45.8,82.8,61.5,79.7,73.5,80L42.1,45.4A8,8,0,0,1,53.9,34.6ZM232,84.7,171.3,24a16.1,16.1,0,0,0-22.6,0l-38,38a8,8,0,0,0-.3,11L179,148.4a8.1,8.1,0,0,0,5.7,2.7h.2a8,8,0,0,0,5.7-2.4L232,107.3a15.9,15.9,0,0,0,0-22.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'PushPinSlashFill'

export const PushPinSlashFill = memo<IconProps>(themed(Icon))
