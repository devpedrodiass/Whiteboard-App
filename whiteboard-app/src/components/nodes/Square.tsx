import { NodeResizer } from '@reactflow/node-resizer'
import React, { useState } from 'react'
import { NodeProps, Handle, Position } from 'reactflow'

import '@reactflow/node-resizer/dist/style.css'

export function Square({ selected }: NodeProps) {
  const [text, setText] = useState('')

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px] p-2 flex justify-center items-center">
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      <textarea
        value={text}
        onChange={handleChangeText}
        contentEditable="true"
        className="bg-violet-500 w-full h-full min-w-[180px] min-h-[180px] resize-none focus:outline-none text-white font-semibold"
      />
      {/* TOP */}
      <Handle
        className="-top-5 w-3 h-3 bg-blue-400/80"
        id="top"
        type="source"
        position={Position.Top}
      />
      {/* BOTTOM */}
      <Handle
        className="-bottom-5 w-3 h-3 bg-blue-400/80"
        id="bottom"
        type="source"
        position={Position.Bottom}
      />
      {/* RIGHT */}
      <Handle
        className="-right-5 w-3 h-3 bg-blue-400/80"
        id="right"
        type="source"
        position={Position.Right}
      />
      {/* LEFT */}
      <Handle
        className="-left-5 w-3 h-3 bg-blue-400/80"
        id="left"
        type="source"
        position={Position.Left}
      />
    </div>
  )
}
