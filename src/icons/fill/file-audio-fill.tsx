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
      <_Path d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM160,80V51.3L188.7,80Zm-56,72v72a7.9,7.9,0,0,1-4.6,7.2,6.8,6.8,0,0,1-3.4.8,7.5,7.5,0,0,1-5.1-1.9L69.1,212H48a8,8,0,0,1-8-8V172a8,8,0,0,1,8-8H69.1l21.8-18.1a7.8,7.8,0,0,1,8.5-1.1A7.9,7.9,0,0,1,104,152Zm44,36a39.8,39.8,0,0,1-15,31.2,7.9,7.9,0,0,1-5,1.8,7.8,7.8,0,0,1-6.2-3,8.1,8.1,0,0,1,1.2-11.3,23.9,23.9,0,0,0,0-37.4,8,8,0,0,1,10-12.5A39.8,39.8,0,0,1,148,188Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileAudioFill'

export const FileAudioFill = memo<IconProps>(themed(Icon))
