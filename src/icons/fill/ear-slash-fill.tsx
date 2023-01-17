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
      <_Path d="M213.9,210.6a7.9,7.9,0,0,1-.5,11.3A8.2,8.2,0,0,1,208,224a8,8,0,0,1-5.9-2.6l-37.9-41.7a29.7,29.7,0,0,1-4.2.3,28.1,28.1,0,0,1-28-28,31.1,31.1,0,0,1,.7-6.9L96,104.7a8,8,0,0,1-16-.7,50.4,50.4,0,0,1,2.2-14.5L64.5,70A71.4,71.4,0,0,0,56,104c0,26.7,8.5,34.9,17.6,43.6S92,165.4,92,188a36,36,0,0,0,63.8,22.9,7.9,7.9,0,0,1,11.2-1.1,8.1,8.1,0,0,1,1.1,11.3A52,52,0,0,1,76,188c0-15.8-5.7-21.3-13.5-28.8C52.5,149.5,40,137.5,40,104A87.8,87.8,0,0,1,53.2,57.6L42.1,45.4A8,8,0,0,1,53.9,34.6L69.2,51.5h.1l28,30.8h0l75.4,83h0ZM91.1,42.2A72,72,0,0,1,200,104a8,8,0,0,0,16,0A88,88,0,0,0,82.9,28.4a8,8,0,0,0-2.8,11A8.1,8.1,0,0,0,91.1,42.2Zm67.2,83.2a7.7,7.7,0,0,0,4.8,1.6,8,8,0,0,0,6.4-3.2A31.6,31.6,0,0,0,176,104a48,48,0,0,0-48-48,48.6,48.6,0,0,0-15.6,2.6,8,8,0,0,0,5.2,15.1A32.9,32.9,0,0,1,128,72a32.1,32.1,0,0,1,32,32,16,16,0,0,1-3.3,10.2A7.9,7.9,0,0,0,158.3,125.4Z" />
    </_Svg>
  )
}

Icon.displayName = 'EarSlashFill'

export const EarSlashFill = memo<IconProps>(themed(Icon))
