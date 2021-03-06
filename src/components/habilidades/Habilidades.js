import React from 'react';
import {Animator, Fade} from 'react-scroll-motion'
import IcoLeng from '../ico-leng/IcoLeng'
import dataHabiPrin from '../../json/habilidadesPrin.json'
import dataHabi from '../../json/habilidades.json'
import './Habilidades.css'

const Habilidades = () =>
{
    return(
        <Animator animation={Fade()}>
            <div className="container-habilidades-info">
                <h2>Habilidades</h2>
                <p>Estas son algunas de las tecnología con las que trabajo:</p>       
                <div className="container-habilidades">
                    <div className="container-header-habilidades">
                        <IcoLeng tipo={dataHabiPrin}/>
                    </div>
                    <div className="container-body-habilidades">
                        <IcoLeng tipo={dataHabi}/>
                    </div>
                </div>                
            </div>
        </Animator>
    )
}

export default Habilidades