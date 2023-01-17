import { getVariable, useTheme } from '@tamagui/core'
import React from 'react'

export function themed<A extends React.FC>(Component: A) {
  const wrapped = (props: any) => {
    const theme = useTheme()

    // Pulled from core and appears to be a bug
    // https://discord.com/channels/909986013848412191/974145843919716412/1060328271071432825
    const color = getVariable(
      (props.color in theme ? theme[props.color] : undefined) ||
        props.color ||
        (!props.disableTheme ? theme.color : null) ||
        '#000',
    )
    return (
      <Component
        {...props}
        color={color}
        size={
          typeof props.size === 'string'
            ? getVariable(theme[props.size] || props.size)
            : props.size
        }
      />
    )
  }
  return wrapped as unknown as A
}
