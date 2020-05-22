///<reference path= "../../node_modules/react-froala-wysiwyg/lib/index.d.ts" />

import React from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import '../styles/file-editor.css';

export function FileEditor() {
    return (
        <div className="file-editor">
            <FroalaEditorComponent tag='textarea' />
        </div>
    )
}