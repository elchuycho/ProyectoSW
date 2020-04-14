import React, { Component } from "react";
import { Link } from "react-router-dom";
import Page from "../../Page";

export default ({auth})=>{
    return (
        <Page pageURL="WELCOME?" auth={auth}>
            <section className="page-landing">
                <div className="landing-photo col-s-12 col-m-9 col-10 no-padding">
                    <h2 className="col-s-12">Sobre Nosotros</h2>
                </div>
                <h2 className="col-s-12">Populares</h2>
                <section className="courses col-s-12 col-m-3 col-2 no-padding">
                    <h2 className="col-s-12">Populares</h2>
                </section>
            </section>
        </Page>
    );
}
