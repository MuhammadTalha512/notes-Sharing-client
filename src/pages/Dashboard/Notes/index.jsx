import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UploadNotes from './UploadNotes'

const Notes = () => {
  return (
    <Routes>
        <Route path='/notes-create' element={<UploadNotes />} />
    </Routes>
  )
}

export default Notes