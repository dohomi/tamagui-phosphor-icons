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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V159.9h0V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88.4,112.4a8,8,0,0,1,11.3,0L120,132.7V72a8,8,0,0,1,16,0v60.7l20.3-20.3a8,8,0,0,1,11.3,11.3l-33.9,34h-.2l-.4.4h-.2l-.5.3c0,.1-.1.1-.1.2l-.5.3h-.2l-.5.3H131l-.7.3h-4.6l-.7-.3h-.1l-.5-.3h-.2l-.5-.3c0-.1-.1-.1-.1-.2l-.5-.3h-.2l-.4-.4h-.2l-33.9-34A8,8,0,0,1,88.4,112.4ZM208,208H48V168H76.7L96,187.3a15.9,15.9,0,0,0,11.3,4.7h41.4a15.9,15.9,0,0,0,11.3-4.7L179.3,168H208v40Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArchiveTrayFill'

export const ArchiveTrayFill = memo<IconProps>(themed(Icon))
