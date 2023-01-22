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
      <_Path d="M120,160H104a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32h-8V176h8a8,8,0,0,1,0,16ZM80,168v32a24,24,0,0,1-48,0,8,8,0,0,1,16,0,8,8,0,0,0,16,0V168a8,8,0,0,1,16,0Zm128,26v11.8a7.5,7.5,0,0,1-1.3,4.3A29.4,29.4,0,0,1,182,224c-16.5,0-30-14.4-30-32s13.5-32,30-32a28.4,28.4,0,0,1,16.6,5.4,8,8,0,0,1-9.2,13A12.6,12.6,0,0,0,182,176c-7.7,0-14,7.2-14,16s6.3,16,14,16a13.3,13.3,0,0,0,10-4.8V202h-4a8,8,0,0,1,0-16h12A8,8,0,0,1,208,194Zm5.7-111.7-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V88A8.1,8.1,0,0,0,213.7,82.3ZM152,88V44l44,44Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileJpgFill'

export const FileJpgFill = memo<IconProps>(themed(Icon))
