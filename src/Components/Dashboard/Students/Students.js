import React, { useState } from 'react';
import avatar1 from '../../../Assect/avatar1.png'
import avatar2 from '../../../Assect/avatar2.png'
const Students = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div class="flex justify-between items-center pb-4 bg-white ">
                    <div className=' '>
                        <button onClick={() => setOpen(!open)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200  font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                            <span class="sr-only">Action button</span>
                            Action
                            <svg class="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownAction" class={`${open ? 'block' : 'hidden'} absolute top-10 left-0 z-10 w-44 bg-purple-200 backdrop-blur-lg bg-opacity-20 rounded divide-y divide-gray-300 shadow `}>
                            <ul class="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-300  ">Reward</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-300  ">Promote</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-300  ">Activate account</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-300   ">Delete User</a>
                            </div>
                        </div>
                    </div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Position
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Role
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-50 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src={avatar1} alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold text-gray-700">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                React Developer
                            </td>
                            <td class="py-4 px-6">
                                <div class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td class="py-4 px-6">
                                <button className=' w-20 py-1 bg-red-100 text-red-700 rounded-md text-xs hover:bg-green-100 hover:text-green-700 transition-all duration-300 ease-in-out'>Pandding</button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-50 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src={avatar2} alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold text-gray-700">Bonnie Green</div>
                                    <div class="font-normal text-gray-500">bonnie@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Designer
                            </td>
                            <td class="py-4 px-6">
                                <div class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td class="py-4 px-6">
                                <button className=' w-20 py-1 hover:bg-red-100 hover:text-red-700 rounded-md text-xs bg-green-100 text-green-700 transition-all duration-300 ease-in-out'>Approve</button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-50 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src={avatar1} alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold text-gray-700">Jese Leos</div>
                                    <div class="font-normal text-gray-500">jese@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Vue JS Developer
                            </td>
                            <td class="py-4 px-6">
                                <div class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td class="py-4 px-6">
                                <button className=' w-20 py-1 hover:bg-red-100 hover:text-red-700 rounded-md text-xs bg-yellow-100 text-yellow-700 transition-all duration-300 ease-in-out'>Delete</button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-50 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src={avatar2} alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold text-gray-700">Thomas Lean</div>
                                    <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                UI/UX Engineer
                            </td>
                            <td class="py-4 px-6">
                                <div class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td class="py-4 px-6">
                                <button className=' w-20 py-1 bg-red-100 text-red-700 rounded-md text-xs hover:bg-green-100 hover:text-green-700 transition-all duration-300 ease-in-out'>Pandding</button>
                            </td>
                        </tr>
                        <tr class="bg-white  hover:bg-gray-50 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src={avatar1} alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold text-gray-700">Leslie Livingston</div>
                                    <div class="font-normal text-gray-500">leslie@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                SEO Specialist
                            </td>
                            <td class="py-4 px-6">
                                <div class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td class="py-4 px-6">
                                <button className=' w-20 py-1 hover:bg-red-100 hover:text-red-700 rounded-md text-xs bg-green-100 text-green-700 transition-all duration-300 ease-in-out'>Approve</button>
                            </td>
                        </tr>

                        <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-50 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src={avatar2} alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold text-gray-700">Bonnie Green</div>
                                    <div class="font-normal text-gray-500">bonnie@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Designer
                            </td>
                            <td class="py-4 px-6">
                                <div class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td class="py-4 px-6">
                                <button className=' w-20 py-1 hover:bg-red-100 hover:text-red-700 rounded-md text-xs bg-green-100 text-green-700 transition-all duration-300 ease-in-out'>Approve</button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-50 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  " />
                                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src={avatar1} alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold text-gray-700">Jese Leos</div>
                                    <div class="font-normal text-gray-500">jese@flowbite.com</div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Vue JS Developer
                            </td>
                            <td class="py-4 px-6">
                                <div class="flex items-center">
                                    <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td class="py-4 px-6">
                                <button className=' w-20 py-1 hover:bg-red-100 hover:text-red-700 rounded-md text-xs bg-yellow-100 text-yellow-700 transition-all duration-300 ease-in-out'>Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Students;