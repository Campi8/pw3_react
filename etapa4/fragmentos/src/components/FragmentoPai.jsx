import React, { children } from 'react'

const FragmentoPai = ({ children }) => {
  return (
    <>
    <div> Fragmento Pai</div>
    <div>
        { children }
    </div>
    </>
  )
}

export default FragmentoPai