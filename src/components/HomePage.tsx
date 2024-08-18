'use client'
// import Sidebar from "../components/Sidebar";
import logoFacebook from '../../public/icon-facebook.png'
import logoWhatsapp from '../../public/icon-whatsapp.png'
import logoInstagram from '../../public/icon-instagram.png'
import logoTikTok from '../../public/icon-tiktok.png'
// import logoGmail from '../../public/icon-gmail.svg'
import logoNetflix from '../../public/icon-netflix.png'
import logoMax from '../../public/icon-max.png'
import logoYoutube from "../../public/icon-youtube.png"
import logoPrimeVideo from '../../public/icon-primevideo.png'
// import logoMensseger from '../../public/icon-mensseger.svg'
// import logoX from '../../public/icon-x.svg'
// import logoSpotify from '../../public/icon-spotify.svg'
import logoSensacionCorp from '../../public/icon-sens-corporal.png'
import logoComunicacion from '../../public/icon-comunicacion.png'
import logoEscritura from '../../public/icon-escritura.png'
import logoEscrituraIA from '../../public/icon-escritura-ia.png'
// import flechaDerecha from '../../public/flecha-derecha.png'
import ButtonAnimation from "./ButtonAnimation";

const HomePage = () => {
    return (
        <div className="flex justify-between w-full h-screen bg-zinc-900">
            <div className="flex justify-start p-6 w-4/5">
                <div className="flex flex-col justify-around gap-4 w-full">
                    <div className="flex flex-row justify-around px-20 items-center relative">
                        <ButtonAnimation navigation="sensacion-corporal" propClass="w-[250px] h-[250px]" imagen={{ src: logoSensacionCorp, width: 250, height: 250 }} />
                        <ButtonAnimation navigation="senal-comunicacion" propClass="w-[250px] h-[250px]" imagen={{ src: logoComunicacion, width: 250, height: 250 }} />
                        <ButtonAnimation navigation="teclado" propClass="w-[250px] h-[250px]" imagen={{ src: logoEscritura, width: 250, height: 250 }} />
                        <ButtonAnimation navigation="teclado" propClass="w-[250px] h-[250px]" imagen={{ src: logoEscrituraIA, width: 250, height: 250 }} />
                    </div>
                    <div className="flex justify-around relative px-20 w-full">
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoWhatsapp, width: 250, height: 250 }} />
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoInstagram, width: 250, height: 250 }} />
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoFacebook, width: 250, height: 250 }} />
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoTikTok, width: 250, height: 250 }} />
                    </div>
                    <div className="flex justify-around relative px-20 w-full">
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoYoutube, width: 250, height: 250 }} />
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoNetflix, width: 250, height: 250 }} />
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoPrimeVideo, width: 250, height: 250 }} />
                        <ButtonAnimation propClass="w-[250px] h-[250px]" imagen={{ src: logoMax, width: 250, height: 250 }} />
                    </div>
                </div>
            </div>
            {/* <Sidebar /> */}
        </div>
    );
};

export default HomePage;
