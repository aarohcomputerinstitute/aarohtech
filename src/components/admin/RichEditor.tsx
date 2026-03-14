"use client";

import { useMemo, useRef, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import ReactDOM from 'react-dom';
import 'react-quill/dist/quill.snow.css';

// HACK: Polyfill findDOMNode for React 18 / react-quill compatibility
if (typeof window !== 'undefined' && !(ReactDOM as any).findDOMNode) {
    (ReactDOM as any).findDOMNode = (instance: any) => {
        if (!instance) return null;
        if (instance instanceof HTMLElement) return instance;
        return null;
    };
}

// We create a wrapper that handles the ref correctly for dynamic loading
const ReactQuillBase = dynamic(
    async () => {
        const { default: RQ } = await import('react-quill');
        // eslint-disable-next-line react/display-name
        return forwardRef((props: any, ref: any) => <RQ ref={ref} {...props} />);
    },
    { 
        ssr: false,
        loading: () => <div className="bg-light rounded-3" style={{ height: '400px' }} />
    }
);

interface RichEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function RichEditor({ value, onChange }: RichEditorProps) {
    const quillRef = useRef<any>(null);

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            if (input.files && input.files[0]) {
                const file = input.files[0];
                const formData = new FormData();
                formData.append('image', file);

                try {
                    const res = await fetch('/api/admin/upload', {
                        method: 'POST',
                        body: formData,
                    });

                    if (res.ok) {
                        const data = await res.json();
                        // Get quill instance from the ref
                        const quill = quillRef.current?.getEditor();
                        if (quill) {
                            const range = quill.getSelection(true);
                            quill.insertEmbed(range.index, 'image', data.url);
                        }
                    } else {
                        console.error('Failed to upload image');
                        alert("Failed to upload image. Please try again.");
                    }
                } catch (error) {
                    console.error('Image upload error:', error);
                }
            }
        };
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }, { 'align': [] }],
                ['link', 'image', 'video'],
                ['clean']
            ],
            handlers: {
                image: imageHandler
            }
        }
    }), []);

    const formats = [
        'header', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script', 'super', 'sub',
        'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'direction', 'align',
        'link', 'image', 'video'
    ];

    return (
        <div className="bg-white rounded-3 overflow-hidden border custom-quill-editor">
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-quill-editor .ql-container {
                    font-family: inherit;
                    font-size: 16px;
                }
                .custom-quill-editor .ql-editor {
                    min-height: 400px;
                    max-height: 600px;
                }
                .custom-quill-editor .ql-toolbar.ql-snow {
                    border: none;
                    border-bottom: 1px solid #dee2e6;
                    background: #f8f9fa;
                    padding: 10px;
                }
                .custom-quill-editor .ql-container.ql-snow {
                    border: none;
                }
                /* Quill 2.0+ specific fixes */
                .ql-snow .ql-picker.ql-size .ql-picker-label::before,
                .ql-snow .ql-picker.ql-size .ql-picker-item::before {
                    content: 'Normal';
                }
                .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
                .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
                    content: 'Small';
                }
                .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
                .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
                    content: 'Large';
                }
                .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
                .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
                    content: 'Huge';
                }
            `}} />
            <ReactQuillBase
                ref={quillRef}
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder="Write your amazing blog content here..."
            />
        </div>
    );
}
