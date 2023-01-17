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
      <_Path d="M104,188a36,36,0,1,1-36-36A36,36,0,0,1,104,188ZM34.3,117.7a8.2,8.2,0,0,0,11.4,0L60,103.3l14.3,14.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4L71.3,92,85.7,77.7A8.1,8.1,0,0,0,74.3,66.3L60,80.7,45.7,66.3A8.1,8.1,0,0,0,34.3,77.7L48.7,92,34.3,106.3A8.1,8.1,0,0,0,34.3,117.7Zm173,70.3,14.4-14.3a8.1,8.1,0,0,0-11.4-11.4L196,176.7l-14.3-14.4a8.1,8.1,0,0,0-11.4,11.4L184.7,188l-14.4,14.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L196,199.3l14.3,14.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4ZM157.7,50.3,155.3,48H176a8,8,0,0,0,0-16H136a8,8,0,0,0-8,8V80a8,8,0,0,0,16,0V59.3l2.3,2.4c18,17.9,17.9,35.4,14.8,46.9-4.7,16.7-19.4,31.7-35,35.6a8.1,8.1,0,0,0-5.9,9.7A8,8,0,0,0,128,160l1.9-.2c21.3-5.3,40.4-24.6,46.6-47S175.9,68.6,157.7,50.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'StrategyFill'

export const StrategyFill = memo<IconProps>(themed(Icon))
