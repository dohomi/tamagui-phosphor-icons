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
      <_Path d="M80.1,201.8A24,24,0,0,0,64,160H48a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h9l8.3,12.4A7.9,7.9,0,0,0,80,224a7.8,7.8,0,0,0,4.4-1.3,8,8,0,0,0,2.2-11.1ZM64,192H56V176h8a8,8,0,0,1,0,16Zm88,12c0,13.1-9.3,21-25,21a33.4,33.4,0,0,1-20.1-6.8h0A7.6,7.6,0,0,1,104,212a8,8,0,0,1,8-8,8.3,8.3,0,0,1,5.1,1.8H117a18.4,18.4,0,0,0,10,3.2c9,0,9-3,9-5s0-.9-1.2-1.6-5.8-2.2-9.2-3.1C117,197,104,193.5,104,180s9.5-21,23-21a33.4,33.4,0,0,1,20.1,6.8h0A7.6,7.6,0,0,1,150,172a8,8,0,0,1-8,8,8.3,8.3,0,0,1-5.1-1.8h.1a18.4,18.4,0,0,0-10-3.2c-4.6,0-7,1.7-7,5v.2c1.1,1.3,6.6,2.8,9.7,3.6C138,186,152,189.7,152,204ZM213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,8,8H168a8,8,0,0,1,8,8v80a8,8,0,0,0,8,8h16a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM152,88V44l44,44Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileRsFill'

export const FileRsFill = memo<IconProps>(themed(Icon))
