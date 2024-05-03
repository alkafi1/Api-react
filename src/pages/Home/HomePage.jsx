import React from 'react';

const HomePage = () => {
    return (
        <div>
            <!-- Logo Section -->
            <div class="bg-gray-800 text-white h-16 flex items-center justify-center">
                <img src="logo.png" alt="Logo" class="h-8">
            </div>

            <!-- Sidebar -->
            <div id="sidebar" class="bg-gray-800 text-white w-64 fixed flex flex-col lg:w-16 lg:static">
                <!-- Sidebar content -->
                <div class="p-4">
                    <!-- Sidebar toggle button -->
                    <button id="sidebarToggleBtn" class="block lg:hidden focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <!-- Dashboard -->
                    <a href="#" class="block py-2 px-4 text-sm">Dashboard</a>
                    <!-- Product menu with dropdown -->
                    <div class="relative">
                        <button class="block w-full py-2 px-4 text-sm">Product</button>
                        <div class="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg hidden lg:block">
                            <a href="#" class="block py-2 px-4 text-sm">Category</a>
                            <a href="#" class="block py-2 px-4 text-sm">Subcategory</a>
                            <a href="#" class="block py-2 px-4 text-sm">Product</a>
                            <a href="#" class="block py-2 px-4 text-sm">Inventory</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div id="mainContent" class="lg:ml-64">
                <!-- Header -->
                <header class="bg-white shadow p-4">
                    <!-- Header content -->
                    <div class="flex justify-between items-center">
                        <h1 class="text-xl font-bold">Dashboard</h1>
                        <!-- Search bar -->
                        <div class="hidden lg:flex items-center space-x-4">
                            <input type="text" placeholder="Search..." class="border border-gray-300 px-2 py-1 rounded-md">
                                <!-- Profile button with dropdown -->
                                <div class="relative">
                                    <button id="profileBtn" class="flex items-center space-x-2 focus:outline-none">
                                        <img src="profile.jpg" alt="Profile" class="h-8 w-8 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                <path fill-rule="evenodd" d="M7 8a1 1 0 112 0v.293l.354-.354a3 3 0 114.292 0L13 8.293V8a1 1 0 112 0v.586a3.98 3.98 0 01-.293 1.526l-.757 1.892A2.992 2.992 0 0110 14a2.99 2.99 0 01-2.707-1.707l-.757-1.892A3.98 3.98 0 015 8.586V8a1 1 0 112 0z" clip-rule="evenodd" />
                                            </svg>
                                    </button>
                                    <!-- Dropdown menu -->
                                    <div id="profileDropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
                                        <a href="#" class="block py-2 px-4 text-sm">Profile</a>
                                        <a href="#" class="block py-2 px-4 text-sm">Logout</a>
                                    </div>
                                </div>
                                <!-- Notification icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 3a2 2 0 00-2 2v1H7a4 4 0 00-4 4v4a1 1 0 001 1h12a1 1 0 001-1v-4a4 4 0 00-4-4h-1V5a2 2 0 00-2-2zM5 12v3a2 2 0 002 2h6a2 2 0 002-2v-3H5zm10 1H5v-1h10v1z" />
                                </svg>
                                <!-- Message icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H3zm3.293 4.293a1 1 0 011.414 0l1.732 1.732 3.536-3.536a1 1 0 011.414 1.414l-4.243 4.243a1 1 0 01-1.415 0L5.293 9.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                        </div>
                    </div>
                </header>

                <!-- Main content area -->
                <div class="container mx-auto p-4">
                    <!-- Breakdown and heading -->
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-lg font-semibold">Product</h2>
                        <p class="text-sm text-gray-500">Breakdown: ...</p>
                    </div>

                    <!-- Product table -->
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full border-collapse border border-gray-200">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="px-4 py-2">ID</th>
                                    <th class="px-4 py-2">Name</th>
                                    <th class="px-4 py-2">Description</th>
                                    <th class="px-4 py-2">Price</th>
                                    <th class="px-4 py-2">Stock</th>
                                    <th class="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border px-4 py-2">1</td>
                                    <td class="border px-4 py-2">Product 1</td>
                                    <td class="border px-4 py-2">Description 1</td>
                                    <td class="border px-4 py-2">$10.00</td>
                                    <td class="border px-4 py-2">100</td>
                                    <td class="border px-4 py-2">
                                        <button class="text-blue-500 hover:text-blue-700">Edit</button>
                                        <button class="text-red-500 hover:text-red-700">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;