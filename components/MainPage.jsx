import React from 'react';
import Image from "next/image";
import imgLogo from '../public/assets/images/deadPHP.jpg'
import { CourseCart } from './CourseCart';

const MainPage = () => {
	return (
		<div className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-400 bg-cover min-w-full min-h-screen'>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-center p-10'>
			
			<CourseCart/>


			<CourseCart/>


			<CourseCart/>


			<CourseCart/>
			
		</div>
		</div>
	);
};

export default MainPage;