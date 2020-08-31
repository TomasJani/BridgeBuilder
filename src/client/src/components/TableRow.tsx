import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";
import "../styles/TableRow.css"

export const RouterLink = (props: {
    content: ReactNode
    to: string
}) => <Link className={"table-row__link"} to={props.to} children={props.content}/>

export const RegularLink = (props: {
    content: ReactNode
    onClick: any
}) => <a onClick={props.onClick} className={"table-row__link"}>{props.content}</a>

const BodyRow = (props: { content: ReactNode }) => <li className="table-row__item">{props.content}</li>

export const TableRow = (props: {
    items: ReactNode[]
    date?: string
}) => {
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
