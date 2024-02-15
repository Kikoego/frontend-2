import React from 'react';
import Image from "next/image";
import imgLogo from '../public/assets/images/deadPHP.jpg'

const CoursePage = () => {
	return (
		<div>
			<div className='courseHead p-10 flex items-center justify-around gap-x-40 dark:border-gray-700 dark:bg-gray-800 m-auto' >

				<div>
					<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Course Name
					</h2>
					<h2 className='mb-2 font-bold tracking-tight text-gray-700 dark:text-gray-400 text-sm'>
						Short Discription
					</h2>
				</div>

				<Image class="object-contain h-96 hidden lg:flex" src={imgLogo} />
				
			</div>
			
			<div className='courseMain p-5 m-auto flex bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-400 bg-cover min-w-full min-h-screen'>
				<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio inventore odit iste accusamus quaerat, ratione iusto, odio sequi est ab quasi aut voluptas quod quam quis aspernatur incidunt ullam nam?</div>
				<div className='ml-20'>
				<button type="button" class="text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sky-700 dark:hover:bg-sky-800 dark:focus:ring-sky-800">Course Redirect</button>
				</div>
			</div>
		</div>
	);
};

export default CoursePage;