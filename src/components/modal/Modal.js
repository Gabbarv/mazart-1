import React from 'react'
import './modal.css'

const Modal = ({title,view,setShowModal,setView}) => {
  return (
    <div className='modal_background'>
        <div className='modal'>
            <div className='modal-top'>
                <h1>{title}</h1>
            </div>
            <div className='modal-bottom'>
                <div className='modal-input'>
                    <div>
                    <label>Role Name<sup>*</sup></label><br/>
                    <input type='text'  placeholder='Enter'/>
                    </div>
                    <div className='isActive'>
                        <div>
                        <input type='checkbox'/>
                        <label>is Active<sup>*</sup></label>
                        </div>
                        
                    </div>
                   
                </div>
                <div className='modal-btn'>
                    <div className='submit-btn'>
                        {!view && (title === "Add Role") &&<h3>Submit</h3>}
                        {!view && (title === "Edit Role") &&<h3>Submit</h3>}
                    </div>
                    <div className='cancel-btn'>
                             <h3 onClick={() => {
                                setView(false)
                                setShowModal(false)
                             }}>Cancel</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Modal