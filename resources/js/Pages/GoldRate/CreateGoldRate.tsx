import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Checkbox } from '@headlessui/react';
import { FormEventHandler } from 'react';

const CreateGoldRate = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        rate: '',
        date: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
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
                                    <h1 className="text-3xl font-semibold leading-tight text-slate-900">Add Gold Rates</h1>
                                    <Link
                                        className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        href='/gold-rates'>View Gold Rates</Link>
                                </div>
                                <form onSubmit={submit}>
                                   
                                    <div className='flex gap-2 '>
                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="rate " value="Rate" />

                                            <TextInput
                                                id="rate"
                                                type="number"
                                                name="rate"
                                                step="0.01"
                                                value={data.rate}
                                                className="mt-1 block w-full"
                                                autoComplete="rate"
                                                isFocused={true}
                                                onChange={(e) => setData('rate', e.target.value)}
                                            />

                                            <InputError message={errors.rate} className="mt-2" />
                                        </div>

                                        <div className="mt-4 w-full">
                                            <InputLabel htmlFor="date " value="Date" />

                                            <TextInput
                                                id="date"
                                                type="date"
                                                name="date"
                                                step="0.01"
                                                value={data.date}
                                                className="mt-1 block w-full"
                                                autoComplete="date"
                                                isFocused={true}
                                            onChange={(e) => setData('date', e.target.value)}
                                            />

                                            <InputError message={errors.date} className="mt-2" />
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

export default CreateGoldRate;