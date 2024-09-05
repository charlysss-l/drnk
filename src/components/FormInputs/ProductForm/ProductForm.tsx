"use client"

import React from "react";
import { FieldValues, UseFormRegister } from 'react-hook-form';
import NavigationBar from '../../../components/AdminComponent/NavigationBar/NavigationBar';
import { useForm } from 'react-hook-form';

interface ProductFormProps {
    label: string;
    id: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    type?: string;
    isRequired?: boolean;
}

export default function ProductForm({
    label,
    name,
    register,
    type = "text",
    placeholder,
    isRequired = true
}: ProductFormProps) {

    return (
        <>
            <NavigationBar />

            <div>
                <label htmlFor={name}> {label} </label>
                <input
                    type={type}

                    {...register(name, { required: isRequired })}
                    id={name}
                    placeholder={placeholder}

                />

            </div>
        </>
    );
}