export default function Navbar(){
    return(
        <div id="conteinerNav" className="sticky inset-0">
            <div id="navbar" className="flex justify-between items-center p-8 bg-pink-200">
                <div id="logoNav" className="text-3xl font-bold cursor-pointer">To Do</div>
                <div id="linksNav" className="w-2/5 flex justify-between text-2xl">
                    <div className="linkNav cursor-pointer">Блокноты</div>
                    <div className="linkNav cursor-pointer">Профиль</div>
                </div>
            </div>
        </div>
    )
}