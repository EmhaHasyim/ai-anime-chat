import {Link} from "@tanstack/react-router";

const NavigationBarFooter = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBarFooter