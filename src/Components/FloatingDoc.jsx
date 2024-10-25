import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";

function FloatingDoc({title, content, type, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.05}} dragElastic={0.2} className='flex-shrink-0 flex flex-col w-[14rem] h-[16rem] rounded-3xl overflow-hidden bg-zinc-700 text-white'>
        <div className='flex-grow p-4'>
            <FaRegFileAlt size="1.2rem" />
            <p className='mt-4'>{content}</p>
        </div>
        <div className='mt-auto text-xl p-2 text-center font-semibold' style={
            type === 'primary' ? {
                backgroundColor: '#1E40B0',
            } : {
                backgroundColor: '#166635',
            }
        }>
            <p>{title}</p>
        </div>
    </motion.div>
  )
}

export default FloatingDoc