import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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
            const match = /language-(\w+)/.exec(className || 'latex');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                customStyle={{
                  backgroundColor: 'white',
                }}
                language={match[1]}
                PreTag='div'
              />
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
