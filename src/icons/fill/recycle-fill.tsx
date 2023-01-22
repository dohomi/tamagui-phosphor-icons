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
      <_Path d="M236.8,204A23.9,23.9,0,0,1,216,216H160v16a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-24-24.1A7.9,7.9,0,0,1,120,208a8.1,8.1,0,0,1,2.3-5.7l24-24a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,160,184v16h56a7.9,7.9,0,0,0,6.9-4,7.8,7.8,0,0,0,0-8l-24-41.4a8,8,0,0,1,13.9-8L236.7,180A23.7,23.7,0,0,1,236.8,204ZM88,200H40a7.9,7.9,0,0,1-6.9-4,7.8,7.8,0,0,1,0-8l28-48.3,13.9,8a8,8,0,0,0,4,1.1,7.8,7.8,0,0,0,4.8-1.7,8,8,0,0,0,2.9-8.4l-8.8-32.8a8.1,8.1,0,0,0-3.7-4.8,7.7,7.7,0,0,0-6.1-.8L35.3,109a8,8,0,0,0-5.8,6.7,7.9,7.9,0,0,0,3.9,8l13.8,8L19.3,180A23.9,23.9,0,0,0,40,216H88a8,8,0,0,0,0-16ZM128,32a7.8,7.8,0,0,1,6.9,4l28,48.3-13.8,8a7.9,7.9,0,0,0,1.9,14.6l32.8,8.8,2,.3a8.1,8.1,0,0,0,7.8-5.9l8.8-32.8a8.1,8.1,0,0,0-2.9-8.5,8,8,0,0,0-8.9-.5l-13.9,8L148.8,28a24,24,0,0,0-41.6,0L83.3,69.4a8,8,0,1,0,13.8,8l24-41.4A7.8,7.8,0,0,1,128,32Z" />
    </_Svg>
  )
}

Icon.displayName = 'RecycleFill'

export const RecycleFill = memo<IconProps>(themed(Icon))
