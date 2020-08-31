///<reference path= "../../../node_modules/react-froala-wysiwyg/lib/index.d.ts" />

import React, {useEffect, useState} from 'react';
import '../../styles/work-edit/work-form.css'
import {inject, observer} from 'mobx-react';
import {Stores} from '../../stores/Stores';
import {IChangeEdit} from '../../interfaces/entities/Change';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import {ChangeStore} from '../../stores/ChangeStore';
import {UserStore} from '../../stores/UserStore';

interface IChangeEditFormProps {
    changeId: number;
    ChangeStore?: ChangeStore;
    UserStore?: UserStore;
}

const stripHTMLTags = (str: string) => str.replace(/(<([^>]+)>)/gi, "");

export const ChangeEditForm = inject(Stores.CHANGE_STORE)(observer((props: IChangeEditFormProps) => {
    const [name, setName] = useState("")
    const [model, setModel] = useState("")

    useEffect(() => {
        const load = async () => {
            await props.UserStore?.login();
            await props.ChangeStore?.find(props.changeId);
            if (props.ChangeStore?.change !== undefined) {
                setName(props.ChangeStore.change.name)
                setModel(props.ChangeStore.change.content)
            }
        }
        load().then()
    }, [props.ChangeStore, props.UserStore, props.changeId])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (name === undefined || model === undefined) {
            return
        }

        const changeEdit: IChangeEdit = {
            id: +props.changeId,
            name: name,
            content: stripHTMLTags(model),
            workId: props.ChangeStore?.change?.work?.id!
        }

        await props.ChangeStore?.editChange(changeEdit);
    }

    return (
        <div>
            {!props.ChangeStore?.change ?
                <p>Loading...</p> : (
                    <>
                        <div className="work-editor">
                            <FroalaEditor
                                tag='textarea'
                                model={model}
                                onModelChange={(newModel: any) => setModel(newModel)}
                            />
                        </div>
                        <form className="work-form">
                            <input className="work-form__input" onChange={e => setName(e.target.value)}
                                   value={name} placeholder="Edit Change Name" type="text"/>
                            <button onClick={handleSubmit} className="work-form__link" type="submit"
                                    style={{color: "black"}}>
                                Edit Change
                            </button>
                        </form>
                    </>
                )
            }
        </div>
    )
}))
