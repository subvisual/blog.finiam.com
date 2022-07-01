import ReactMarkdown from 'react-markdown';

type PostBodyProps = {
  data: {
    body: string;
  };
};

export default function PostBody({ data: { body } }: PostBodyProps) {
  return (
    <article className='post-body'>
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
  );
}
