import React from 'react'
import { Message } from './Message'

export const Messages = () => {
  return (
    <div className="messages bg-[#ddddf7] p-[10px] h-calc(100%-160px) overflow-y-auto">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}
