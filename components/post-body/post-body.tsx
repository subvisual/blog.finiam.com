/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unstable-nested-components */
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGrm from "remark-gfm";

import styles from "./post-body.module.scss";

type PostBodyProps = {
  data: {
    body: string;
  };
};

export default function PostBody({ data: { body } }: PostBodyProps) {
  return (
    <article className={styles["post-body"]}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGrm]}
        className={styles.reactMarkdown}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                customStyle={{
                  backgroundColor: "#272727",
                }}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table({ children }) {
            return (
              <div className={styles["table-container"]}>
                <table>{children}</table>
              </div>
            );
          },
          img({ src, alt, title }) {
            if (title) {
              return (
                <figure>
                  <img src={src} alt={alt} title={title} />
                  <figcaption>{title}</figcaption>
                </figure>
              );
            }

            return <img src={src} alt={alt} />;
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </article>
  );
}
