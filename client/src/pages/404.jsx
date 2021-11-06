import React from 'react';
import NotFound from '../components/NotFound';
import PartnersImg from '../components/UI/partnersImg/PartnersImg'

export default function Page404() {
    return (
        <section className="py-26">
            <div className="container">
                <NotFound />

                <div className="mt-124 mb-30">
                    <PartnersImg />
                </div>
            </div>
        </section>
    )
}
