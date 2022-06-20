import { getFirstNKeywords } from '../../lib/keywords';

export default function PostHeader({
  data: { title, authorImage, authorName, category, publishedAt, keywords, imageUrl, imageAlt },
}: PostHeaderProps) {
  return (
    <div className='post-header'>
      <h1 className='post-title'>{title}</h1>
      <div className='post-info'>
        <div>
          <img src={authorImage} alt={`${authorName} avatar`} />
          <ul>
            <li>{authorName}</li>
            <li>{category}</li>
            <li>
              {new Date(publishedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
              })}
            </li>
          </ul>
        </div>
        <ul className='keywords'>
          {getFirstNKeywords(keywords, 2).map(keyword => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
      <img src={imageUrl} alt={imageAlt}></img>
    </div>
  );
}
