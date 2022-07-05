import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';

import styles from './post-body.module.scss';

type PostBodyProps = {
  data: {
    body: string;
  };
};

export default function PostBody({ data: { body } }: PostBodyProps) {
  return (
    <article className={styles['post-body']}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        className={styles.reactMarkdown}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                customStyle={{
                  backgroundColor: '#272727',
                }}
                language={match[1]}
                PreTag='div'
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </article>
  );
}
