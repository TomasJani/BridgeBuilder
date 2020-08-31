import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";
import "../styles/TableMenu.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";

interface ITableMenuProps {
    headings: string[]
    date?: string
}

interface IHeaderRowProps {
    content: ReactNode
}

export const HeaderRow = (props: IHeaderRowProps) =>
    <li className="table-menu__item"><span className={"table-menu__link"}>{props.content}</span></li>

export const TableMenu = (props: ITableMenuProps) => {
    return (
        <div className="table-menu">
            <ul className="table-menu__items">
                {props.headings.map((heading: string) => <HeaderRow content={heading}/>)}
            </ul>
            <Link to="#" className="table-menu__item table-menu__settings">
                <FontAwesomeIcon icon={faEllipsisV}/>
            </Link>
        </div>
    )
}
