import React from "react";
import Cart from "./cart/Cart";

const Scroll = ()=>{

    const muchachos = [
        {
            name: "Sebastián Ciare",
            profesion: "FullStack Developer",
            linkedin: "https://www.linkedin.com/in/sebastianciare/",
            github: "https://github.com/Eduardo871",
            image: "https://media-exp3.licdn.com/dms/image/C5603AQEqgLzLxJlg8A/profile-displayphoto-shrink_800_800/0/1622405518406?e=1631145600&v=beta&t=q-GUJXJSj75pt9-dZIebMpCEIU86k-EaFQXutClWzo8"
        },
        {
            name: "Francisco Granja",
            profesion: "FullStack Developer",
            linkedin: "https://www.linkedin.com/in/francisco-granja/",
            github: "https://github.com/FranG14",
            image: "https://media-exp3.licdn.com/dms/image/C4E03AQHCARVrq5Hu9A/profile-displayphoto-shrink_800_800/0/1621107710947?e=1631145600&v=beta&t=zUKWqNCyrPIp3PTBR0bHUyHV66zeX227K9QYY2iU6p0"
        },
        {
            name: "Diego Lanesan",
            profesion: "FullStack Developer",
            linkedin: "https://www.linkedin.com/in/diegolanesan/",
            github: "https://github.com/diegolanesan",
            image: "https://media-exp3.licdn.com/dms/image/C4E03AQFS4oOxIwIWYw/profile-displayphoto-shrink_800_800/0/1550205032993?e=1631145600&v=beta&t=JIGvMpJzn6UihHARK0mxwX8PsU5UNYcAPZof4_Q8RdY"
        },
        {
            name: "Lautaro Lorenzo Alcoba",
            profesion: "FullStack Developer",
            linkedin: "https://www.linkedin.com/in/lautaro-lorenzo-alcoba-full-stack-developer/",
            github: "https://github.com/lautaroalcoba",
            image: "https://avatars.githubusercontent.com/u/75595353?v=4"
        },
        {
            name: "Matías Sciutto",
            profesion: "FullStack Developer",
            linkedin: "https://www.linkedin.com/in/sciuttomatias/",
            github: "https://github.com/Sciuttomatias",
            image: "https://media-exp3.licdn.com/dms/image/C4E03AQFcZ351E0LJuA/profile-displayphoto-shrink_800_800/0/1618324148773?e=1631145600&v=beta&t=ucOdUpkQPqMGaPj_gcNJe6VmvfV0dU4co1f0AwFgQ7I"
        },

        {
            name: "Luis Herrera Mantilla",
            profesion: "FullStack Developer",
            linkedin: "https://www.linkedin.com/in/luis-angel-herrera-mantilla/",
            github: "https://github.com/Lmanti",
            image: "https://media-exp3.licdn.com/dms/image/C5603AQF0Y3QggjUAXA/profile-displayphoto-shrink_800_800/0/1610725277318?e=1631145600&v=beta&t=S9DPyWZExm-vu_kAoMMgbSsKp0oBwa2GQZiQhOABKRg"
        },
        {
            name: "Alexander Mina",
            profesion: "FullStack Developer",
            linkedin: "https://www.linkedin.com/in/alexander-mina/",
            github: "https://github.com/aquisies",
            image: "https://media-exp3.licdn.com/dms/image/C4D03AQHJEHkQVlUWCQ/profile-displayphoto-shrink_800_800/0/1622836006862?e=1631145600&v=beta&t=gkm8ZrFAagfclu3zFrkpd8nxXXMocEkdsGiwQ1YRMR8"
        },
        
    ]

    return (
        <div className="containerCart">
                    {
                        muchachos.map((m)=>{
                            return <Cart info={m} />
                        })
                    }
          </div>
    )
};

export default Scroll;