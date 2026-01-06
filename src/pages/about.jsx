import Footer from "../compenents/footer";
import Navbar from "../compenents/navbar";
export default function About() {
    return (<>
        <Navbar textColor="text-black" borderColor="border-black/30"/>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen px-4 py-20">
                
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://i.fbcd.co/products/resized/resized-750-500/wm-creative-cartoon-happy-kids-0469093eeb3aa4b10d96064805dac2a4afb9c455ff29788a8ab0573ee8d7661b.jpg"/>
                    </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mb-8"></div>
                    <p className="mt-4">Hna Wahd team maktdir walo gha galsin <br /> kola wahd fina kaytsna lakhr ibda walakin lghalb lah . </p>
                </div></section><Footer/></>);}