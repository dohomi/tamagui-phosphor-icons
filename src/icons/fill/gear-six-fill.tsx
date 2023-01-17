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
      <_Path d="M237.5,104.3a8,8,0,0,0-4-5.3L209.7,85.8q-1.9-3.9-4.2-7.5l.4-27.2a8.3,8.3,0,0,0-2.6-6.1,112,112,0,0,0-41.1-23.7,8.1,8.1,0,0,0-6.6.8l-23.3,14c-2.9-.1-5.7-.1-8.6,0l-23.3-14a8.1,8.1,0,0,0-6.6-.8A111.1,111.1,0,0,0,52.7,45.1a7.9,7.9,0,0,0-2.6,6l.5,27.2c-1.6,2.4-3,4.9-4.4,7.5L22.5,99a7.7,7.7,0,0,0-4,5.3,111.4,111.4,0,0,0,0,47.4,8,8,0,0,0,4,5.3l23.8,13.2a69.3,69.3,0,0,0,4.3,7.5l-.5,27.2a8.3,8.3,0,0,0,2.6,6.1,112.9,112.9,0,0,0,41.1,23.7,8.1,8.1,0,0,0,6.6-.8l23.3-14h8.6l23.4,14a7.3,7.3,0,0,0,4.1,1.2,10,10,0,0,0,2.4-.4,111.1,111.1,0,0,0,41.1-23.8,7.9,7.9,0,0,0,2.6-6l-.4-27.2c1.5-2.4,2.9-4.9,4.3-7.5L233.6,157a7.9,7.9,0,0,0,3.9-5.3A111.4,111.4,0,0,0,237.5,104.3ZM172,128a44,44,0,1,1-44-44A44,44,0,0,1,172,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'GearSixFill'

export const GearSixFill = memo<IconProps>(themed(Icon))
