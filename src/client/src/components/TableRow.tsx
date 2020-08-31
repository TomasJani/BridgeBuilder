import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";
import "../styles/TableRow.css"

interface ITableProps {
    items: ReactNode[]
    date?: string
}

interface IBodyRowProps {
    content: ReactNode
}

interface IRouterLinkProps {
    content: ReactNode
    to: string
}

interface IRegularLinkProps {
    content: ReactNode
    onClick: any
}

export const RouterLink = (props: IRouterLinkProps) =>
    <Link className={"table-row__link"} to={props.to} children={props.content}/>

export const RegularLink = (props: IRegularLinkProps) =>
    <a onClick={props.onClick} className={"table-row__link"}>{props.content}</a>

const BodyRow = (props: IBodyRowProps) => <li className="table-row__item">{props.content}</li>

export const TableRow = (props: ITableProps) => {
    return (
        <>
            <div className="table-row">
                <ul className="table-row__items">
                    {props.items.map((item: ReactNode) => <BodyRow content={item}/>)}
                </ul>
                {props.date !== undefined && <span className="table-row__link table-row__date">{props.date}</span>}
            </div>
        </>
    )
}
