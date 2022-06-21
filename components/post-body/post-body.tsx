import ReactMarkdown from 'react-markdown';

export default function PostBody({ data: { body } }: PostBodyProps) {
  return (
    <article className='post-body'>
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
  );
}
