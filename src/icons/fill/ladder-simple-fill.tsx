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
      <_Path d="M192,24a8,8,0,0,0-8,8V64H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0V192H184v32a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24Zm-8,56v40H72V80ZM72,176V136H184v40Z" />
    </_Svg>
  )
}

Icon.displayName = 'LadderSimpleFill'

export const LadderSimpleFill = memo<IconProps>(themed(Icon))
