
import { useEffect, useRef, useState } from 'react';
import model from './main_not_apply_animmate2.glb';
import model2 from './piar_main_apply_mod_not_compress.glb';

import { ModelViewerElement } from '@google/model-viewer';
import {ChairRounded,SwapHorizRounded,SwapVertRounded,SettingsApplicationsRounded} from '@mui/icons-material';


export default function Main() {
    const modelRef = useRef(null);
    const [mech,setMech]=useState(true);

    // console.log(process.env.PUBLIC_URL+'/models/main_not_apply_animmate2.glb');
    const func = () => {
        modelRef.current.currentTime = 1;
        modelRef.current.play({ repetitions: 1 })
    }

    const close = () => {
        modelRef.current.timeScale = 3
        modelRef.current.play({ repetitions: 1 });

    }

    const open = () => {
        modelRef.current.play({ repetitions: 1 });
        setTimeout(() => { modelRef.current.pause() }, 10);
    }

    useEffect(()=>{
        if(modelRef.current)
        mech?open():close();
    },[mech])


    useEffect(() => {
        modelRef.current = document.querySelector('#model')

        if (false) {
            //if (!document.querySelector('#model')) {

            const ModelV = new ModelViewerElement();
            ModelV.src = process.env.PUBLIC_URL + '/models/main_not_apply_animmate2.glb';
            ModelV.id = 'model';
            ModelV.cameraControls = true;
            ModelV.touchAction = 'pan-y'
            ModelV.style.width = '100%';
            ModelV.style.height = window.innerHeight + 'px';
            ModelV.skyboxImage = 'https://img1.akspic.ru/attachments/crops/0/4/9/6/46940/46940-priroda-peyzash-gornyj_relef-pejzazhi_gor-prirodnyj_landshaft-1920x1080.jpg';
            //ModelV.skyboxImage=process.env.PUBLIC_URL+'/hdr/studio_small_09_2k.hdr';
            ModelV.environmentImage = process.env.PUBLIC_URL + '/hdr/studio_small_09_2k.hdr';
            ModelV.shadowIntensity = 2;
            ModelV.exposure = 0.4;
            console.dir(ModelV);
            document.body.append(ModelV);


            //hotspots
            const hot = <button className="Hotspot" slot="hotspot-2" data-position="-1.4399351179489668m 1.1406069248984008m -1.1392397707947488m" data-normal="-0.000028054431529858084m 0.8208496742273328m 0.5711443000974716m" data-visibility-attribute="visible">
                <div class="HotspotAnnotation">sofa</div>
            </button>
            ModelV.appendChild(hot);
        }
    }, [])
    return (
        <div>
            {/* <model-viewer  src={process.env.PUBLIC_URL+'/models/main_not_apply_animmate2.glb'} >

            </model-viewer> */}

            {/* <button onClick={func} >test</button> */}


            <model-viewer
                id='model'
                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                src={process.env.PUBLIC_URL + '/models/main_not_apply_animmate2.glb'}
                style={{ width: '100%', height: window.innerHeight }}
                shadow-intensity="1"
                exposure='0.8'
                camera-controls touch-action="pan-y"
            >

                {/* <button className="Hotspot" onClick={close} slot="hotspot-1" data-position="-2.748651468153117m 0.046285011237234386m 0.3757749892397485m" data-normal="-0.9999987544611684m -0.0015782836896502622m 0.000009833981887485949m" data-visibility-attribute="visible"> close</button> */}
                <div className="Hotspot" slot="hotspot-2" data-position="-2.8140934351260607m 0.761338305241824m -1.2321293347717752m" data-normal="-0.2575113734299055m 0.09673429501666629m -0.9614210153319265m" data-visibility-attribute="visible">
                    <SwapVertRounded/> 108см
                </div>
                <div className="Hotspot" slot="hotspot-3" data-position="-1.3963396049280101m 0.02640505346629496m -1.143022377395683m" data-normal="1.8332931335305843e-7m -0.41417086662470903m -0.9101991503178323m" data-visibility-attribute="visible">
                    <SwapHorizRounded/>305см
                </div>
                <div className="Hotspot" slot="hotspot-4" data-position="-2.748657559229545m 0.0500448307977015m 0.06885907396562024m" data-normal="-0.9999987544788925m -0.0015782724653392102m 0.00000983305126881772m" data-visibility-attribute="visible">
                    <SwapHorizRounded/>185см
                </div>
                <div className="Hotspot" slot="hotspot-6" data-position="-1.0037568982053475m 0.44061587692612436m -0.6744677367739165m" data-normal="0m 1m 0m" data-visibility-attribute="visible">
                    <SwapHorizRounded/>132см
                </div>
                <div className="Hotspot" slot="hotspot-7" data-position="-1.8089105009251005m 0.4406158945671656m 0.0975265415279446m" data-normal="0m 1m 0m" data-visibility-attribute="visible">
                    <SwapHorizRounded/>182см
                </div>
                <div className="Hotspot" slot="hotspot-8" data-position="-2.8770956729506425m 0.012432043258507663m -0.5719994250075642m" data-normal="-0.6100196668299576m -0.7911199382018207m -0.04478001183804356m" data-visibility-attribute="visible">
                    <SwapHorizRounded/>105см
                </div>
                <div className="Hotspot logo" slot="hotspot-9" data-position="-1.5220861525109648m 1.6392757482193492m -1.1373230097987106m" data-normal="0.00020855919501248392m 0.8208484947964637m 0.5711459577843846m" data-visibility-attribute="visible">
                <ChairRounded/> 
                <h3>"Орлеан"</h3>
                <h5>наполнение ППУ HS3530, каркас: ФАНЕРА,СОСНА</h5> 
                </div>
                <div className="Hotspot btn" slot="hotspot-10" data-position="-1.0880715143165984m 0.4034639795765117m 1.3727287935720711m" data-normal="0m 0.2541729920626052m 0.9671587719221405m" data-visibility-attribute="visible"
                onClick={()=>setMech(state=>!state)}
                >
                <SettingsApplicationsRounded/>"Ифагрид"
                </div>

            </model-viewer>


        </div>
    )
}