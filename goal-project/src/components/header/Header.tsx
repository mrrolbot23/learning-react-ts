import {type ReactNode} from "react";
import "./Header.css"
interface HeaderProps {
    image: {
        src: string,
        alt: string
    };
    children: ReactNode;
}

const Header = ({image, children}: HeaderProps) => {
    return (
        <div className={"header-container"}>
            <img src={image.src} alt={image.alt}/>
            {children}
        </div>
    );
};

export default Header;