import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SmartTextViewer = ({ rawText }) => {
    // 🪄 Magic Function: Converts your plain text to Markdown
    const formatToMarkdown = (text) => {
        if (!text) return "";

        return text.split('\n').map(line => {
            const trimmed = line.trim();

            // 1. Detect Headers: If line starts with an Emoji, make it an H3
            // (Regex checks for common emoji ranges)
            if (/^[\p{Extended_Pictographic}]/u.test(trimmed)) {
                return `### ${trimmed}`;
            }

            // 2. Detect Key-Value lists: If line has "something: description"
            // We make the key Bold and turn it into a bullet point
            if (trimmed.includes(':') && !trimmed.startsWith('http')) {
                const parts = trimmed.split(':');
                const key = parts[0];
                const val = parts.slice(1).join(':'); // Rejoin rest in case description has colons
                // Only format if the key isn't too long (avoids formatting regular sentences)
                if (key.length < 50) {
                    return `- **${key.trim()}:** ${val.trim()}`;
                }
            }

            // 3. Detect Code/Filenames: If it looks like a file extension, wrap in code block
            if (/\.(xml|yaml|json|java|kt)$/.test(trimmed)) {
                return `\`${trimmed}\``;
            }

            // Return regular text
            return line;
        }).join('\n');
    };

    const markdownContent = formatToMarkdown(rawText);

    return (
        <div className="text-slate-300 px-6 pb-6">
            {/* Use Tailwind's 'prose' class if you have @tailwindcss/typography installed, 
           otherwise style manually as below */}
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-white mt-6 mb-2" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-1" {...props} />,
                    li: ({ node, ...props }) => <li className="text-slate-400" {...props} />,
                    strong: ({ node, ...props }) => <span className="text-sky-400 font-semibold" {...props} />, // Colors the "Keys"
                    code: ({ node, ...props }) => <code className="bg-slate-700 text-yellow-300 px-1 rounded text-sm" {...props} />
                }}
            >
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
};

export default SmartTextViewer;