"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import style from "./page.module.scss";
import NavigationBar from '../../../../components/AdminComponent/NavigationBar/NavigationBar';
import { useForm } from 'react-hook-form';
import ProductForm from '../../../../components/FormInputs/ProductForm/ProductForm'

export default function NewProduct() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        console.log(data);
        reset()
    }
    return (
        <>
            <NavigationBar />

            <div className={style.form_container}>
                <h1>New Product</h1>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <ProductForm
                        label="Name"
                        id=""
                        name="name"
                        placeholder="Enter name"
                        register={register}
                    />
                    <ProductForm
                        label="Price"
                        id="price"
                        name="price"
                        placeholder="₱ 00.00"
                        register={register}
                    />
                    <ProductForm
                        label="Volume"
                        id="volume"
                        name="volume"
                        placeholder="Enter volume in ml"
                        register={register}
                    />
                    <ProductForm
                        label="Brand"
                        id="brand"
                        name="brand"
                        placeholder="Enter brand"
                        register={register}
                    />
                    <ProductForm
                        label="SKU"
                        id="sku"
                        name="sku"
                        placeholder="Enter sku"
                        register={register}
                    />
                    <div className={style.container_input}>
                        <label htmlFor="category"> Select a category: </label>
                        <select id="category"
                            {...register("category", { required: true })}
                        >
                            <option value={"gin"}> Gin </option>
                            <option value={"beer"}> Beer </option>
                            <option value={"brandy"}> Brandy  </option>
                            <option value={"mix"}> Mix </option>
                        </select>
                    </div>

                    <div className={style.action_button}>
                        <Link href="/admin/product"><button className={style.cancel}>Cancel</button></Link>
                        <button className={style.submit} type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}