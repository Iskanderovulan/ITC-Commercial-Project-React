import React from 'react';
import './ForBackGround.css'
import Action from "../Action/Action";
import Program from "../Program/Program";
import videoBg from '../../img/v1.webm';
import Modalui from "../../pages/Main/Modal/Modal-ui/Modal-ui";
import ThanksModal from "../ThanksModal/ThanksModalUi";


// const changeGif = () =>{
//     let b = props.info?.weather[0].main
//     setGif(b)
// }
//
// useEffect(()=>{
//     changeGif()
// })

// {gif==='Clouds'?
//     <img src={clouds} alt=""/>
//     :gif==='Clear'?
//         <img src={sunny} alt=""/>
//         :gif==='Rain'?
//             <img src={sunny} alt=""/>
//             : <h2>dont have a gif for this weather</h2>
// }


const ForBackGround = (props) => {
    return (

       <div className={'forBackGround'}>
            <div className="front__opacity">
                <video autoPlay playsInline loop muted className={'forBackGround__video'}>
                    <source src={videoBg} type={'video/mp4'}/>
                </video>


                {
                    props.OpenModal === true ? <Modalui setOpenModal={props.setOpenModal} OpenModal={props.OpenModal}
                                                        ThanksModal={props.ThanksModal} setThanksModal={props.setThanksModal}/> : null
                }
                {
                    props.ThanksModal === false ? <ThanksModal/> : null
                }
                 <Action setOpenModal={props.setOpenModal}/>
                <Program/>
            </div>
        </div>


    );
};

export default ForBackGround;