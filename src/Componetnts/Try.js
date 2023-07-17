import { createRoot } from 'react-dom/client';
// import './index.css';
import { useState,useEffect,useRef } from 'react';
import { updateSampleSection } from './sample-base';

import { PropertyPane } from './property-pane';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
 import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
// // import { useEffect, useRef, useState } from 'react';
const Default = () => {
    
    useEffect(() => {
        updateSampleSection();
    }, []);
    const [isAutoUpload, setIsAutoUpload] = useState(true);
    const [isSequentialUpload, setIsSequentialUpload] = useState(false);
    let uploadObj = useRef(null);
    let asyncSettings;
    let dropContainerRef;
    let dropContainerEle = null;
    dropContainerEle = null;
    dropContainerRef = element => {
        dropContainerEle = element;
    };
    asyncSettings = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
    const rendereComplete = () => {
        uploadObj.current.dropArea = dropContainerEle;
        uploadObj.current.element.setAttribute('name', 'UploadFiles');
        uploadObj.current.dataBind();
    };
    const onChange = (args) => {
        setIsAutoUpload(args.checked);
        uploadObj.current.clearAll();
    };
    const onChanged = (args) => {
        setIsSequentialUpload(args.checked);
        uploadObj.current.clearAll();
    };
    const onRemoveFile = (args) => {
        args.postRawFile = false;
    };
    return (<div className='control-pane' ref={dropContainerRef}>
            <div className='control-section row uploadpreview'>
            <div className='col-lg-9'>
            <div className='upload_wrapper'>
                {/* Render Uploader */}
                <UploaderComponent id='fileUpload' type='file' ref={uploadObj} asyncSettings={asyncSettings} removing={onRemoveFile.bind(this)} autoUpload={isAutoUpload} sequentialUpload={isSequentialUpload}></UploaderComponent>
            </div>
            </div>
            <div className='property-section col-lg-3' id="uploader">
                <PropertyPane title='Properties'>
                    <div className='panel-style'>
                        <CheckBoxComponent checked={true} label='Auto Upload' change={onChange.bind(this)}></CheckBoxComponent>
                    </div>
                    <div className='panel-style'>
                        <CheckBoxComponent checked={false} label='Sequential Upload' change={onChanged.bind(this)}></CheckBoxComponent>
                    </div>
                </PropertyPane>
            </div>
            </div>
        </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);