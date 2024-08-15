import React from 'react'

export default function Section({ children, title, desc, className }) {
    return <>
        <section className={`flex flex-col ${{ className }}`}>
            <h1>{title}</h1>
            <p>{desc}</p>
            {children}
        </section>
    </>
}
