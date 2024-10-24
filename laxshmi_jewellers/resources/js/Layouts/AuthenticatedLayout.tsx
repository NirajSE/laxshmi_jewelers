import { usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [currentRoute, setCurrentRoute] = useState<string>('');

    const { url } = usePage();

    useEffect(() => {
        const currentRoute: string = url.replace('/', '');
        setCurrentRoute(currentRoute);
    }, [url]);

    return (
        <div className="min-h-screen flex">

            <aside className="w-64 bg-gray-800 text-gray-100">
                <div className="px-6 py-4">
                    Laxmshi Jewellers
                </div>
                <nav className="mt-5 flex flex-col">
                    <NavLink
                        href={route('dashboard')}
                        active={currentRoute === 'dashboard' ? route().current(currentRoute) : false}
                        className='px-2 py-2 mx-5 my-3 text-white'
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
</svg> Dashboard
                    </NavLink>
                    <NavLink
                        href={route('product')}
                        active={currentRoute === 'product' ? route().current(currentRoute) : false}
                        className='px-2 py-2 mx-5 my-3 text-white hover:text-slate-100'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
 Products
                    </NavLink>
                </nav >
            </aside >

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-md p-4">
                    <div className="max-w-7xl mx-auto flex justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className='inline-flex rounded-md'>
                                    <button
                                        type='button'
                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none">
                                        {user.name}
                                        <svg
                                            className="-me-0.5 ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link
                                    href={route('profile.edit')}
                                >
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>
                <main>{children}</main>
            </div>
        </div >
    );
}