import React from 'react';

const BlogSearch = () => {
    return (
        <div className=' max-w-7xl mx-auto px-5 mt-12'>
            <form class="flex items-center w-1/2 mx-auto">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-purple-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Search" required />
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-purple-600 rounded-lg border border-purple-600 hover:bg-transparent hover:text-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>
            <div className=' pb-10 pt-5 flex items-center justify-center gap-10'>
                <button className=' pt-1.5 pb-0.5 bg-purple-200 border hover:bg-transparent transition-all duration-150 ease-out border-purple-200 text-purple-800 px-6 rounded-3xl text-sm '>নাসিং</button>

                <button className=' pt-1.5 pb-0.5 bg-purple-200 border hover:bg-transparent transition-all duration-150 ease-out border-purple-200 text-purple-800 px-6 rounded-3xl text-sm '>বিএসসি নাসিং</button>

                <button className=' pt-1.5 pb-0.5 bg-purple-200 border hover:bg-transparent transition-all duration-150 ease-out border-purple-200 text-purple-800 px-6 rounded-3xl text-sm '>ডিপ্লোমা নার্সিং</button>

                <button className=' pt-1.5 pb-0.5 bg-purple-200 border hover:bg-transparent transition-all duration-150 ease-out border-purple-200 text-purple-800 px-6 rounded-3xl text-sm '>মিডওয়াইফারী নার্সিং</button>

                <button className=' pt-1.5 pb-0.5 bg-purple-200 border hover:bg-transparent transition-all duration-150 ease-out border-purple-200 text-purple-800 px-6 rounded-3xl text-sm '>নাসিং নিয়োগ</button>

                <button className=' pt-1.5 pb-0.5 bg-purple-200 border hover:bg-transparent transition-all duration-150 ease-out border-purple-200 text-purple-800 px-6 rounded-3xl text-sm '>গাইডলাইন</button>

                <button className=' pt-1.5 pb-0.5 bg-purple-200 border hover:bg-transparent transition-all duration-150 ease-out border-purple-200 text-purple-800 px-6 rounded-3xl text-sm '>নাসিং প্রস্তুতি</button>

            </div>
        </div>
    );
};

export default BlogSearch;