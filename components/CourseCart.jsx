import React from 'react';
import Image from "next/image";
import imgLogo from '../public/assets/images/deadPHP.jpg'
const CourseCart = () => {
    return (
        <>
            <div className="cart-holder">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
					<Image class="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imgLogo} />
					<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Курс по металообработке в пхп</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Цена: прикол</p>
					</div>
			</a>
            </div>
        </>
    )
}

export {CourseCart}