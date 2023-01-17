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
      <_Path d="M228.2,153,209,100.3a16,16,0,0,0-20.5-9.5l-59.9,21.8,11-62.8a16,16,0,0,0-2.6-12,16.2,16.2,0,0,0-10.3-6.6L71.5,21.5A16.1,16.1,0,0,0,53,34.5L28.8,171.7a45,45,0,0,0,7.7,33.9,43.4,43.4,0,0,0,28.7,17.9,51.6,51.6,0,0,0,6.7.5H212a16,16,0,0,0,16-16V164.3A15.7,15.7,0,0,0,228.2,153ZM72,192a12,12,0,1,1,12-12A12,12,0,0,1,72,192Zm140,16H123.7L212,175.9Zm-98.5-13.3a41,41,0,0,0,1.8-7.1l10.1-56.8,68.6-25,19.1,52.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'SwatchesFill'

export const SwatchesFill = memo<IconProps>(themed(Icon))
