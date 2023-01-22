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
      <_Path d="M213.9,210.6l-160-176A8,8,0,0,0,42.1,45.4L80,87.1V128a48,48,0,0,0,73.9,40.4l10.9,12A64,64,0,0,1,64.4,135.1a8,8,0,1,0-15.9,1.8A79.9,79.9,0,0,0,120,207.6V232a8,8,0,0,0,16,0V207.6a79.2,79.2,0,0,0,39.6-15.3l26.5,29.1A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1A7.9,7.9,0,0,0,213.9,210.6Z" />
      <_Path d="M162.1,129.8a7.9,7.9,0,0,0,5.9,2.6,7.4,7.4,0,0,0,2.9-.5,8,8,0,0,0,5.1-7.5V64a48,48,0,0,0-48-48A47.5,47.5,0,0,0,87.2,38.8a8,8,0,0,0,.8,9.6Z" />
      <_Path d="M192.2,161.7a9.3,9.3,0,0,0,2.9.5,7.8,7.8,0,0,0,7.4-5.1,78.7,78.7,0,0,0,5-20.2,8,8,0,1,0-15.9-1.8,60.1,60.1,0,0,1-4,16.2A8.1,8.1,0,0,0,192.2,161.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'MicrophoneSlashFill'

export const MicrophoneSlashFill = memo<IconProps>(themed(Icon))
