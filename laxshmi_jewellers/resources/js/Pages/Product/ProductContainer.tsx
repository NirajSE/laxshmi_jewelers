import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ProductContainer = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white">
                    Product
                </h2>
            }
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto border border-gray-200 rounded-md p-8">
                                <div className='flex justify-between mb-8'>
                                    <h1 className="text-3xl font-semibold leading-tight text-slate-900">Products</h1>
                                    <Link 
                                        className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        href='/product-create'>Add Product</Link>
                                </div>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-gray-900 dark:text-gray-900 font-black text-base">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Tag
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Image
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Weight
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Labour Charge
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Stone Weight
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Wastage
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Carat
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Types
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Gem
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-800">
                                                Apple MacBook Pro 17"
                                            </th>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default ProductContainer;