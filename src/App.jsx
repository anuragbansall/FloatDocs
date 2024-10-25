import React, { useRef, useState } from 'react'
import FloatingDoc from './Components/FloatingDoc'
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import AddDocForm from './Components/AddDocForm';

function App() {

  const [isAddDocFormVisible, setIsAddDocFormVisible] = useState(false)

  const ref = useRef(null)

  const docsData = useSelector(state => state.docsSlice.data)

  return (
    <div className='relative select-none h-screen w-full bg-zinc-900 flex justify-center items-center'>
      <h1 className='text-[6rem] sm:text-[10rem] text-zinc-800 font-semibold'>Docs.</h1>

      <div className='absolute flex flex-col top-0 left-0 h-full w-full'>
        <div className='flex w-full py-6 px-10'>
          <h2 className='text-white text-2xl font-semibold'>FloatDocs.</h2>
          <span className='ml-auto cursor-pointer' title='Add Task' onClick={() => setIsAddDocFormVisible(!isAddDocFormVisible)}>
            <IoMdAddCircle size="2rem" color='white' />
          </span>
        </div>
        <div  className='h-full p-8 overflow-y-auto'>
          <div ref={ref} className='min-h-full flex flex-wrap gap-4 '>
          {
            docsData.map((doc, index) => (
              <FloatingDoc key={index} title={doc.title} content={doc.content} type={doc.type} reference={ref} />
            ))
          }
          </div>
        </div>
      </div>

      {
        isAddDocFormVisible && (
          <AddDocForm onClose={() => setIsAddDocFormVisible(false)} />
        )
      }
      
    </div>
  )
}

export default App