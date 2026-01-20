import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="sticky inset-0">
            <div className="flex justify-between items-center p-8 bg-pink-200">
                <div className="text-3xl font-bold"><Link to="/">To Do</Link></div>
                <div className="w-2/5 flex justify-between text-2xl">
                    <div className="linkNav"><Link to="/notepads">Блокноты</Link></div>
                    <div className="linkNav"><Link to="/lk">Профиль</Link></div>
                </div>
            </div>
        </div>
    )
}