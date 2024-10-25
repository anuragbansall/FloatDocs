import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addDoc } from '../ReduxSlices/DocsSlice';

function AddDocForm({ onClose }) {
    const dispatch = useDispatch();
    const formRef = useRef(null);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('primary');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newDoc = {
            title: title,
            content: description,
            type: type,
            createdAt: new Date().toISOString(),
        };

        dispatch(addDoc(newDoc));
        onClose();
        setTitle('');
        setDescription('');
        setType('primary');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className='absolute flex justify-center items-center h-full w-full bg-[#000000b3]'>
            <form 
                ref={formRef}
                onSubmit={handleFormSubmit} 
                className='w-[30rem] max-w-full flex flex-col gap-4 bg-[#1A1A1A] p-8 rounded-xl'
            >
                <input
                    required
                    maxLength="15"
                    type="text"
                    className='w-full bg-zinc-800 px-4 py-2 text-2xl text-white border-none rounded-md'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select
                    required
                    defaultValue={type}
                    className='w-full bg-zinc-800 text-white text-2xl px-4 py-2 rounded-md'
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                </select>
                <textarea
                    required
                    maxLength={105}
                    className='w-full bg-zinc-800 text-white text-2xl px-4 py-2 rounded-md resize-none'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className='w-full px-4 py-2 text-white bg-blue-500 font-semibold text-2xl rounded-md'>
                    Add Docs
                </button>
            </form>
        </div>
    );
}

export default AddDocForm;
