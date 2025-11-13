import { ReactNode } from 'react';

interface RichTextContentProps {
  content: string;
  className?: string;
}

const RichTextContent = ({ content, className = '' }: RichTextContentProps) => {
  return (
    <div 
      className={`prose max-w-none prose-headings:font-display prose-headings:text-2xl prose-headings:font-bold prose-headings:text-navy-900 prose-p:mb-4 prose-p:text-gray-600 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:font-semibold prose-strong:text-navy-900 ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextContent;
