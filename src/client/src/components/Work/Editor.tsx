///<reference path= "../../../node_modules/react-froala-wysiwyg/lib/index.d.ts" />

import React from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import '../../styles/work-edit/work-editor.css';

export function Editor() {
    return (
        <div className="work-editor">
            <FroalaEditorComponent tag='textarea' />
        </div>
    )
}