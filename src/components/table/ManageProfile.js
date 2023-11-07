import React from 'react'
import {LiaEditSolid,LiaFileImportSolid} from 'react-icons/lia'
import {AiOutlineEye,AiOutlineSetting,AiOutlineDownload,AiOutlinePlus,AiOutlineSearch} from 'react-icons/ai'


const ManageProfile = ({setShowModal,setView,setTitle}) => {
  return (
  <div className='p-10'>

    <div className='manager_profile_header'>
        <div className='manager_profile_header_top'>
            <h1>Manager Profile</h1>
            <h3>ADMINISTRATOR</h3>
        </div>
        <div>
            <hr/>
        </div>
        <div className='manager_profile_header_bottom'>
            <div className='manager_profile_header_bottom_left'>
                <div className=''>Excel</div>
                <div className=''>PDF</div>
            </div>
            <div className='manager_profile_header_bottom_right'>
            <div className='manager_profile_header_bottom_right_c'>
                <LiaFileImportSolid/>
                <p>Import Manage Profile</p>
                   
            </div>
            <div className='manager_profile_header_bottom_right_c'>
                 <AiOutlineDownload/>
                 <p>Sample Download Manage Profile</p>
            </div>
            </div>
        </div>


    </div>

    <div className='manager_profile_bottom'>
        <div className='manager_profile_bottom_top'>
            <h2>Role</h2>
            <h2>Reporting Hierarchy</h2>
            <h2>Employee</h2>
        </div>
        <div><hr/></div>

        <div className='manager_profile_bottom_bottom'>
            <div onClick={() => {
                setShowModal(true)
                setTitle('Add Role')
            }} className='manager_profile_bottom_bottom_left'>
            <div>
                <AiOutlinePlus/>
            </div>
            <p>Add</p>
            </div>
            <div>
            <div className="searchbox">
         
         <div className="search-inbox">
           <input
            
             type="text"
             placeholder='search'
          
           />
         </div>
         <div className="search-icon">
           <AiOutlineSearch />
         </div>
       </div>
            </div>
            
        </div>
    </div>
     <table class="w-full mt-8 text-center border-collapse border border-gray-100 ...">
  <thead>
    <tr>
      <th class="border border-slate-600 p-4 ...">S.No</th>
      <th class="border border-slate-600 p-4 ...">Role</th>
      <th class="border border-slate-600 p-4 ...">Status</th>
      <th class="border border-slate-600 p-4 ...">Created By</th>
      <th class="border border-slate-600 p-4 ...">Created Date</th>
      <th class="border border-slate-600 p-4 ...">Action</th>
      <th class="border border-slate-600 p-4 ...">Manage State</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-700 p-4 ...">1</td>
      <td class="border border-slate-700 p-4 ...">Yash savasiya</td>
      <td class="border border-slate-700 p-4 text-green-700 ...">active</td>
      <td class="border border-slate-700 p-4 ...">Superadmin</td>
      <td class="border border-slate-700 p-4 ...">09/06/2023</td>
      <td class="border border-slate-700 p-4 ...">
              <div className='table-action'>
                <div onClick={() => {
                    setShowModal(true)
                    setTitle('Edit Role')

                }} className='edit-icon'>
                <LiaEditSolid color='white'/>
                </div>
                  <div onClick={() => {
                    setShowModal(true)
                    setTitle('View Role')
                    setView(true)
                  }} className='eye-icon'>
                  <AiOutlineEye color='white'/>
                  </div>
                  

              </div>

      </td>
      <td class="border border-slate-700 p-4 ..."><div className='setting-icon ml-auto mr-auto'>
           <AiOutlineSetting color='white'/>
        </div></td>
    </tr>
    <tr>
      <td class="border border-slate-700 p-4 ...">1</td>
      <td class="border border-slate-700 p-4 ...">Yash savasiya</td>
      <td class="border border-slate-700 p-4 text-green-700 ...">active</td>
      <td class="border border-slate-700 p-4 ...">Superadmin</td>
      <td class="border border-slate-700 p-4 ...">09/06/2023</td>
      <td class="border border-slate-700 p-4 ...">
              <div className='table-action'>
                <div onClick={() => {
                    setShowModal(true)
                    setTitle('Edit Role')

                }} className='edit-icon'>
                <LiaEditSolid color='white'/>
                </div>
                  <div onClick={() => {
                    setShowModal(true)
                    setTitle('View Role')
                    setView(true)
                  }} className='eye-icon'>
                  <AiOutlineEye color='white'/>
                  </div>
                  

              </div>

      </td>
      <td class="border border-slate-700 p-4 ..."><div className='setting-icon ml-auto mr-auto'>
           <AiOutlineSetting color='white'/>
        </div></td>
    </tr>
    <tr>
      <td class="border border-slate-700 p-4 ...">1</td>
      <td class="border border-slate-700 p-4 ...">Yash savasiya</td>
      <td class="border border-slate-700 p-4 text-green-700 ...">active</td>
      <td class="border border-slate-700 p-4 ...">Superadmin</td>
      <td class="border border-slate-700 p-4 ...">09/06/2023</td>
      <td class="border border-slate-700 p-4 ...">
              <div className='table-action'>
                <div onClick={() => {
                    setShowModal(true)
                    setTitle('Edit Role')

                }} className='edit-icon'>
                <LiaEditSolid color='white'/>
                </div>
                  <div onClick={() => {
                    setShowModal(true)
                    setTitle('View Role')
                    setView(true)
                  }} className='eye-icon'>
                  <AiOutlineEye color='white'/>
                  </div>
                  

              </div>

      </td>
      <td class="border border-slate-700 p-4 ..."><div className='setting-icon ml-auto mr-auto'>
           <AiOutlineSetting color='white'/>
        </div></td>
    </tr>
  </tbody>
</table>
  </div>
  )
}

export default ManageProfile