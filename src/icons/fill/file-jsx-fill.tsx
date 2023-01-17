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
      <_Path d="M80,168v32a24,24,0,0,1-48,0,8,8,0,0,1,16,0,8,8,0,0,0,16,0V168a8,8,0,0,1,16,0Zm41.7,15.8c-3.1-.8-8.6-2.3-9.7-3.6V180c0-3.3,2.4-5,7-5a18.4,18.4,0,0,1,10,3.2h-.1A8.3,8.3,0,0,0,134,180a8,8,0,0,0,8-8,7.6,7.6,0,0,0-2.9-6.1h0A33.4,33.4,0,0,0,119,159c-13.5,0-23,8.6-23,21s13,17,21.6,19.3c3.4.9,7,1.8,9.2,3.1s1.2,1,1.2,1.6,0,5-9,5a18.4,18.4,0,0,1-10-3.2h.1A8.3,8.3,0,0,0,104,204a8,8,0,0,0-8,8,7.6,7.6,0,0,0,2.9,6.1h0A33.4,33.4,0,0,0,119,225c15.7,0,25-7.9,25-21S130,186,121.7,183.8Zm83.1-22.2a8,8,0,0,0-11.2,1.6L182,178.7l-11.6-15.5a8,8,0,0,0-12.8,9.6L172,192l-14.4,19.2a8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,164,224a8,8,0,0,0,6.4-3.2L182,205.3l11.6,15.5A8,8,0,0,0,200,224a7.7,7.7,0,0,0,4.8-1.6,8,8,0,0,0,1.6-11.2L192,192l14.4-19.2A8,8,0,0,0,204.8,161.6ZM216,88v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40A16,16,0,0,1,56,24h96a8.1,8.1,0,0,1,5.7,2.3l56,56A8.1,8.1,0,0,1,216,88Zm-20,0L152,44V88Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileJsxFill'

export const FileJsxFill = memo<IconProps>(themed(Icon))
