'use client'
import Image from 'next/image'
import botonCalibrarMouse from '../../public/5.jpg'
import botonTiempoAct from '../../public/6.jpg'
import botonAplicaciones from '../../public/7.jpg'
import botonControlCentral from '../../public/8.jpg'
import botonControlVolumen from '../../public/9.jpg'
import botonSuspender from '../../public/10.jpg'
import botonUrgencia from '../../public/11.jpg'
import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"

const menus = [botonCalibrarMouse, botonTiempoAct, botonAplicaciones, botonControlCentral, botonControlVolumen, botonSuspender, botonUrgencia]

const Sidebar = () =>{
    return (
      <div className="w-1/6 bg-zinc-800 flex flex-col items-center justify-between h-full">
        <div className="flex h-full items-center flex-col gap-4 p-4">
          <ScrollArea className="flex h-full w-full rounded-md">
            <div className="p-2 gap-1 flex flex-col">
              {menus.map((menu, i) => (
                  <Image src={menu} alt={`${menu}`} key={i} width={115} height={115} className="text-sm"/>
              ))}
            </div>
          </ScrollArea>
          <button className=" z-10 border rounded-lg text-white w-1/2 text-center">Salir</button>
        </div>
      </div>
    );
  };
  
export default Sidebar;