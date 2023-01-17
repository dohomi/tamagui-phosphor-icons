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
      <_Path d="M205.5,100.1l-17-29.4a21.9,21.9,0,0,0-30-8.1A21.5,21.5,0,0,0,148.9,74L131.3,43.7a21.9,21.9,0,0,0-30-8.1A21.5,21.5,0,0,0,91.7,47a22.1,22.1,0,0,0-29.6-7.3A21.9,21.9,0,0,0,51.9,53.1a20.9,20.9,0,0,0-.4,9.6,26.5,26.5,0,0,0-11.1,3.4,26.1,26.1,0,0,0-9.5,35.6l2,3.4a24.3,24.3,0,0,0-9.7,3.3,26,26,0,0,0-9.5,35.5l37,64.1a80,80,0,0,0,146.6-19.3l.3-1.3A76.5,76.5,0,0,0,205.5,100.1Zm-23.7,84.5A63.3,63.3,0,0,1,152,223.4,64,64,0,0,1,64.6,200l-37-64.1a10,10,0,0,1,11.2-14.7,10.3,10.3,0,0,1,6.1,4.7h0l24,41.6a8.2,8.2,0,0,0,6.9,4,8,8,0,0,0,6.9-12l-38-65.8a10,10,0,0,1,17.4-10l38,65.8a8,8,0,1,0,13.8-8l-30-52h0a10.1,10.1,0,0,1,3.7-13.7,10,10,0,0,1,13.6,3.7l42,72.8a8.2,8.2,0,0,0,7,4,8.6,8.6,0,0,0,4-1.1,8,8,0,0,0,2.9-10.9l-16-27.8h0a9.9,9.9,0,0,1-1-7.5,9.6,9.6,0,0,1,4.7-6.1,9.4,9.4,0,0,1,7.5-1,9.8,9.8,0,0,1,6.1,4.6l17,29.5A63.5,63.5,0,0,1,181.8,184.6ZM165,24.7l4.1-15.5a8,8,0,1,1,15.5,4.1l-4.2,15.5a7.9,7.9,0,0,1-7.7,5.9l-2.1-.2A8,8,0,0,1,165,24.7Zm26.3,9.2,9.2-13.1a8.1,8.1,0,0,1,11.2-2A8,8,0,0,1,213.6,30l-9.2,13.1A7.9,7.9,0,0,1,193.3,45,8,8,0,0,1,191.3,33.9Zm43.9,21.6-13.1,9.2a8.6,8.6,0,0,1-4.6,1.4,8,8,0,0,1-4.6-14.5L226,42.4a8,8,0,0,1,11.2,1.9A8.1,8.1,0,0,1,235.2,55.5Z" />
    </_Svg>
  )
}

Icon.displayName = 'HandsClappingFill'

export const HandsClappingFill = memo<IconProps>(themed(Icon))
