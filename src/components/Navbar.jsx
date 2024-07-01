import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 pl-8 pr-8 bg-green-500">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-3xl text-black">
                       Welcome to my EMPTY pages :) ...
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className="text-2xl text-black ">Pages</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 text-xl">
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Log in</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Log Out (Register)</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
