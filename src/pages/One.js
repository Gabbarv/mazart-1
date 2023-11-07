import React from 'react'
import {LiaEditSolid,LiaFileImportSolid} from 'react-icons/lia'
import {AiOutlineEye,AiOutlineSetting,AiOutlineDownload,AiOutlinePlus,AiOutlineSearch} from 'react-icons/ai'

const hello = () => {
  return (
    <div className='p-10'>

    <div className='manager_profile_header'>
        <div className='manager_profile_header_top'>
            <h1>Role Permissions</h1>
            <h3>ADMINISTRATOR</h3>
        </div>
        <div>
            <hr/>
        </div>
      


    </div>

    <div className='manager_profile_bottom'>
        <div className='manager_profile_bottom_top'>
            <h2>Website Application</h2>
            <h2>Mobile App Application</h2>
            
        </div>
        <div><hr/></div>

        <div className='manager_one_btn'>
            
            <p>Back</p>
            </div>

        </div>

        <div className='manager_one_bottom'>
          <label>is All Checked?</label>
          <input type='checkbox'/>
        </div>

        <table class="w-full mt-8 text-center border-collapse border border-gray-100 ...">
  <thead>
    <tr>
      <th class="border border-slate-600 p-4 ...">S.No</th>
      <th class="border border-slate-600 p-4 ...">Permission Name</th>
      <th class="border border-slate-600 p-4 ...">
        <label>View?</label>
        <input type='checkbox'/>
      </th>
      <th class="border border-slate-600 p-4 ...">
        <label>Add?</label>
        <input type='checkbox'/>
      </th>
      <th class="border border-slate-600 p-4 ...">
        <label>Edit?</label>
        <input type='checkbox'/>
      </th>
     

    </tr>
  </thead>
  <tbody>
  <tr>
      <td class="border border-slate-700 p-4 ...">1</td>
      <td class="border border-slate-700 p-4 ...">qweertfc</td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>

      </tr>
      <tr>
      <td class="border border-slate-700 p-4 ...">1</td>
      <td class="border border-slate-700 p-4 ...">qweertfc</td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>

      </tr>
      <tr>
      <td class="border border-slate-700 p-4 ...">1</td>
      <td class="border border-slate-700 p-4 ...">qweertfc</td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>

      </tr>
      <tr>
      <td class="border border-slate-700 p-4 ...">1</td>
      <td class="border border-slate-700 p-4 ...">qweertfc</td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>
      <td class="border border-slate-700 p-4 ...">
        <input type='checkbox'/>
      </td>

      </tr>
  </tbody>

  </table>

  <div className='manage_one_bottom_btn'>
    <div className='submit-btn'>
      <h3>Back</h3>
    </div>
    <div className='submit-btn'>
      <h3>Update</h3>
    </div>
  </div>
        </div>
  )
}

export default hello
