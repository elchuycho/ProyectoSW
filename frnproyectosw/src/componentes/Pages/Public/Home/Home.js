import React from 'react';
import Page from '../../Page';

import {Link} from 'react-router-dom';
import { DiCss3,DiHtml5,DiPhp } from "react-icons/di";
export default ({auth})=>{
    return (
        <Page pageURL="WELCOME?" auth={auth}>
            <section className="page-landing">
                <div className="landing-photo col-s-12 col-m-9 col-10 no-padding">
                    <h2 className="col-s-12">Bienvenidos al Futuro del Aprendizaje</h2>
                    <Link className="button-3 col-s-8 col-m-5 col-3" to="/courses">Ver Cursos</Link>
                </div>
                <h2 className="col-s-12">Populares</h2>
                <section className="courses col-s-12 col-m-3 col-2 no-padding">
                    <h2 className="col-s-12">Populares</h2>
                    <div className="info"><span><DiHtml5/></span></div>
                    <div className="info"><span><DiCss3/></span></div>
                    <div className="info"><span><DiPhp/></span></div>
                </section>
            </section>
        </Page>
    );
}

/*
export default ({auth})=>{
  return (
    <Page pageTitle="Home Page" auth={auth}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia vel? Iure eaque ipsam, magni animi debitis sapiente consequuntur quos repudiandae. Consequatur perferendis accusantium voluptatum harum, aliquid dolor repellendus facere.</p>
    </Page>
  )
}
*/