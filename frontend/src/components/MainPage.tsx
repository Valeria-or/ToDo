import { Link } from "react-router-dom";

export default function MainPage (){
    return(
        <div className="w-screen h-250 flex flex-col justify-center items-center">
            <div className="text-4xl">Добро пожаловать в To Dо!</div>
            <div className="flex flex-col text-justify text-2xl w-6/12  my-14">Организуйте свои дела легко и эффективно!
            Создавайте задачи, устанавливайте сроки и приоритеты, отмечайте выполненное — всё в одном месте.
            <span>✨ Управляйте временем — достигайте целей быстрее!</span>
            <span>📅 Планируйте день, неделю и месяц без лишних усилий.</span>
            <span>🔔 Получайте напоминания, чтобы не пропустить важное.</span>
            Начните создавать первую задачу прямо сейчас и сделайте свой день продуктивнее!</div>
            <Link to="/lk" className="px-10 py-4 bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all"><button>Начать работу!</button></Link>
        </div>
    )
}