import Link from 'next/link';
import Image from 'next/image';


const Nav = () => {
    return (
        <nav className='nav bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-600'>
					<div className='logo'>
					<Image
              src='/assets/icons/logo.svg'
              alt='logo'
              width={250}
              height={41}
              className='object-contain'
              />
					</div>
					<div className='link'>
						<Link href='/' className='outline_btn'>
              Главная
            </Link>

            <Link href="/User/1" className='outline_btn'>
              страница пользователя
            </Link>

            <Link href="/User/SignIn" className='outline_btn'>
              Регистрация/логин
            </Link>

            <Link href="/Course/1" className='outline_btn'>
              страница курса
            </Link>

            <Link href="/Course/1/paragraph/1" className='outline_btn'>
              страница урока
            </Link>
					</div>
					{/*<button className="inline-block md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>*/}
				</nav>
    )
}

export default Nav