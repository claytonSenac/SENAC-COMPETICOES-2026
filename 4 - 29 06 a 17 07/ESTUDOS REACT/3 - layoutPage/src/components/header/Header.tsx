// import { useEffect, useState } from "react";
// import getConfiguration from "../../utils/configurationService";
import './header.css'


function HeaderComponent(){
    // const [config,setConfig] = useState({});

    // useEffect(() => {
    //         const fetchData = async () => {
    //             const res = await getConfiguration();
    //             setConfig(res);
    //         }
    //         fetchData();
    //         console.log(config)
    //     }
    // ,[])



    return (
        <>
            <header>
                <div className="containerLogo">
                    <div className='image'></div>
                </div>
                <nav className="navigationHeader">
                    <a href="#" className="navItem">Link A</a>
                    <a href="#" className="navItem">Link B</a>
                    <a href="#" className="navItem">Link C</a>
                </nav>
            </header>
        </>
    )
}

export default HeaderComponent;