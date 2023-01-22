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
      <_Path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Zm39.8-112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H207a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112Zm20.7-49.4a111.7,111.7,0,0,0-40.8-45.4,8,8,0,0,0-8.5,13.6,97,97,0,0,1,35,38.8,7.9,7.9,0,0,0,7.2,4.5,9.3,9.3,0,0,0,3.5-.8A8,8,0,0,0,228.5,62.6Zm-186.7,7a97,97,0,0,1,35-38.8,8,8,0,0,0-8.5-13.6A111.7,111.7,0,0,0,27.5,62.6a8,8,0,0,0,3.6,10.7,9.3,9.3,0,0,0,3.5.8A7.9,7.9,0,0,0,41.8,69.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'BellSimpleRingingFill'

export const BellSimpleRingingFill = memo<IconProps>(themed(Icon))
