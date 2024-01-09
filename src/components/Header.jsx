const Header = () => {
    return (
        <div className="w-[95%] mx-auto overflow-hidden ">
        <header>
       <nav className="flex h-32 items-center justify-between">
        <a href="" className="w-1/2  max-w-[400px] text-4xl text-cyan-500 font-bold ">
        🐲ANIMEWORLD
        </a>
        <input type="checkbox" id="menu" className=" peer/menu hidden" />
        <label htmlFor="menu" className="w-10 h-10  bg-open-menu bg-cover bg-center rounded-lg bg-green-800 cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden "></label>
        <ul className="fixed inset-0 bg-violet-900/50 font-bold text-3xl text-gray-300 px-[5%] grid auto-rows-max gap-8 content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">News</a>
            </li>
            <li>
                <a href="#">Anime</a>
            </li>
            <li>
                <a href="#">Store</a>
            </li>
           
           
        </ul>
       </nav>
        </header>
        </div>
    )
}
export default Header