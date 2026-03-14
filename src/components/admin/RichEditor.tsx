"use client";

import { useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import('react-quill');
        // Forward ref to ReactQuill instance
        return function ForwardedQuill(props: any) {
            return <RQ {...props} forwardedRef={props.quillRef} />;
        };
    },
    { ssr: false }
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
                        // Get quill instance
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
        <div className="bg-white rounded-3 overflow-hidden border">
            <style jsx global>{`
                .ql-container {
                    font-family: inherit;
                    font-size: 16px;
                }
                .ql-editor {
                    min-height: 400px;
                    max-height: 600px;
                }
                .ql-toolbar.ql-snow {
                    border: none;
                    border-bottom: 1px solid #dee2e6;
                    background: #f8f9fa;
                    padding: 10px;
                }
                .ql-container.ql-snow {
                    border: none;
                }
            `}</style>
            <ReactQuill
                quillRef={quillRef}
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
