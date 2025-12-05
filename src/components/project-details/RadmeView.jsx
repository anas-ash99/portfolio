import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your theme

const ReadmeViewer = ({ content }) => {
    return (
        <div className="readme-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <ReactMarkdown
                // 1. Plugins: Enable tables, checkboxes, etc.
                remarkPlugins={[remarkGfm]}

                // 2. Components: Custom renderers for specific elements
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={dracula} // Theme (dracula, atomDark, vs, etc.)
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default ReadmeViewer;