import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Checkbox } from '@headlessui/react';
import { FormEventHandler } from 'react';

const CreateProduct = () => {

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log(e);

    };

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
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto border border-gray-200 rounded-md p-8">
                                <div className='flex justify-between mb-8'>
                                    <h1 className="text-3xl font-semibold leading-tight text-slate-900">Add Product</h1>
                                    <Link
                                        className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        href='/product'>View Products</Link>
                                </div>
                                <form onSubmit={submit}>
                                    <div>
                                        <InputLabel htmlFor="tag" value="Tag" />

                                        <TextInput
                                            id="tag"
                                            type="text"
                                            name="tag"
                                            // value={data.email}
                                            className="mt-1 block w-full"
                                            autoComplete="tag"
                                            isFocused={true}
                                        // onChange={(e) => setData('email', e.target.value)}
                                        />

                                        {/* <InputError message={errors.email} className="mt-2" /> */}
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel htmlFor="image" value="Image" />
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                                </svg>
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-2 '>
                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="weight " value="Weight" />

                                            <TextInput
                                                id="weight"
                                                type="number"
                                                name="weight"
                                                step="0.01"
                                                // value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="weight"
                                                isFocused={true}
                                            // onChange={(e) => setData('email', e.target.value)}
                                            />

                                            {/* <InputError message={errors.email} className="mt-2" /> */}
                                        </div>

                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="labourCharge " value="LabourCharge" />

                                            <TextInput
                                                id="labourCharge"
                                                type="number"
                                                name="labourCharge"
                                                step="0.01"
                                                // value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="labourCharge"
                                                isFocused={true}
                                            // onChange={(e) => setData('email', e.target.value)}
                                            />

                                            {/* <InputError message={errors.email} className="mt-2" /> */}
                                        </div>
                                    </div>

                                    <div className='flex gap-2 '>
                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="stoneWeight " value="StoneWeight" />

                                            <TextInput
                                                id="stoneWeight"
                                                type="number"
                                                step="0.01"
                                                name="stoneWeight"
                                                // value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="stoneWeight"
                                                isFocused={true}
                                            // onChange={(e) => setData('email', e.target.value)}
                                            />

                                            {/* <InputError message={errors.email} className="mt-2" /> */}
                                        </div>

                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="wastage" value="Wastage" />

                                            <TextInput
                                                id="wastage "
                                                type="number"
                                                step="0.01"
                                                name="wastage"
                                                // value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="wastage"
                                                isFocused={true}
                                            // onChange={(e) => setData('email', e.target.value)}
                                            />

                                            {/* <InputError message={errors.email} className="mt-2" /> */}
                                        </div>
                                    </div>

                                    <div className='flex gap-2'>
                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="carat " value="Carat" />

                                            <TextInput
                                                id="carat"
                                                type="number"
                                                name="carat"
                                                step="0.01"
                                                // value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="carat"
                                                isFocused={true}
                                            // onChange={(e) => setData('email', e.target.value)}
                                            />

                                            {/* <InputError message={errors.email} className="mt-2" /> */}
                                        </div>

                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="gemPrice " value="GemPrice" />

                                            <TextInput
                                                id="gemPrice"
                                                type="number"
                                                name="gemPrice"
                                                step="0.01"
                                                // value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="gemPrice"
                                                isFocused={true}
                                            // onChange={(e) => setData('email', e.target.value)}
                                            />

                                            {/* <InputError message={errors.email} className="mt-2" /> */}
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-center">
                                        <PrimaryButton className="w-full" >
                                            Create
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default CreateProduct;