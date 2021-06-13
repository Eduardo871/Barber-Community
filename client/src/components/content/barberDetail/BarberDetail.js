import {React, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {barberDetail} from "../../../redux/action/barberDetail"
import {getBarbers} from "../../../redux/action/barbers"
import './BarberDetail.modules.css';

function BarberDetail (props) {
   const dispatch = useDispatch()
   const {resp} = useSelector(state => state.barberDetail)
   const id = props.match.params.id;
   console.log(props)
   useEffect(() => {
      console.log(id + "")
      dispatch(barberDetail(id))
      dispatch(getBarbers())
   }, [])

   return <div class="bg-gray-100 max-w-6xl  mx-auto my-20">
      {!resp ? <div class="loader"></div> :
      <div class="container mx-auto my-5 p-5">
         <div class="md:flex no-wrap md:-mx-2 ">
              {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
                  {/* <!-- Profile Card --> */}
                  <div class="bg-white p-3 border-t-4 border-blue-400 ">
                     <div class="image overflow-hidden">
                        <img class="h-auto w-full rounded mx-auto"
                              src={resp.image}
                              alt=""/>
                     </div>
                     <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{resp.name} {resp.lastname}</h1>
                     <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">{resp.resume}</p>
                     <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                              <span>Status</span>
                              <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                        <button
                        class="block w-full text-blue-800 bg-green-500 py-1 px-2 rounded text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 h-1">
                        Get an apointment</button>
                        </li>
                     </ul>
                  </div>
                  {/* <!-- End of profile card --> */}
                  <div class="my-4"></div>
            </div>
              {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2 h-64">
                  {/* <!-- About Section --> */}
                  <div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
                     <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                     </div>
                     <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">First Name</div>
                                 <div class="px-4 py-2">{resp.name}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">Last Name</div>
                                 <div class="px-4 py-2">{resp.lastname}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">Type</div>
                                 <div class="px-4 py-2">{resp.type}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">Contact No.</div>
                                 <div class="px-4 py-2">{resp.mobile}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">Address</div>
                                 <div class="px-4 py-2">{resp.location}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">Alias</div>
                                 <div class="px-4 py-2">{resp.alias}</div>
                              </div>
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">Email.</div>
                                 <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">{resp.email}</a>
                                 </div>
                              </div>
                              <div class="grid grid-cols-2">
                                 <div class="px-4 py-2 font-semibold">Rating</div>
                                 <div class="px-4 py-2">{resp.rating}</div>
                              </div>
                        </div>
                     </div>
                  </div>
                  {/* <!-- End of about section --> */}
                  <div class="my-4"></div>
                  {/* <!-- Types --> */}
                  <div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
                     <div class="grid grid-cols-3">
                        <div>
                              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                 <span class="tracking-wide">Face Types</span>
                              </div>
                              <ul class="list-inside space-y-2">
                                 {resp.faceTypes ? resp.faceTypes.map(n => (
                                    <li>
                                       <div class="text-teal-600 bg-blue-500 py-1 px-2 rounded text-white text-sm">{n}</div>
                                    </li>
                                 )) : "waiting"}
                              </ul>
                        </div>
                        <div>
                              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                 <span class="tracking-wide">Styles</span>
                              </div>
                              <ul class="list-inside space-y-2">
                                 {resp.styles ? resp.styles.map(n => (
                                    <li>
                                       <div class="text-teal-600 bg-blue-500 py-1 px-2 rounded text-white text-sm">{n}</div>
                                    </li>
                                 )) : "waiting"}
                              </ul>
                        </div>
                        <div>
                              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                 <span class="tracking-wide">Hair Types</span>
                              </div>
                              <ul class="list-inside space-y-2">
                                 {resp.hairTypes ? resp.hairTypes.map(n => (
                                    <li>
                                       <div class="text-teal-600 bg-blue-500 py-1 px-2 rounded text-white text-sm">{n}</div>
                                    </li>
                                 )) : "waiting"}
                              </ul>
                        </div>
                     </div>
                      {/* <!-- End of Types --> */}
                  </div>
                  {/* <!-- End of profile tab --> */}
                  <div class="my-4"></div>
                  {/* <!-- Services --> */}
                  <div class="bg-white p-3 shadow-sm rounded-sm border-t-4 border-blue-400">
                     <div class="grid grid-cols-3">
                        <div>
                              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                 <span class="tracking-wide">Services</span>
                              </div>
                              <ul class="list-inside space-y-2">
                                 {resp.services ? resp.hairTypes.map(n => (
                                    <li>
                                       <div class="text-teal-600 bg-blue-500 py-1 px-2 rounded text-white text-sm">{n}</div>
                                    </li>
                                 )) : "waiting"}
                              </ul>
                        </div>
                     </div>
                      {/* <!-- End of Services --> */}
                  </div>
            </div>
         </div>
      </div> 
      }
</div>
}

export default BarberDetail

