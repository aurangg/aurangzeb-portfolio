export default async function ProjectTags({ i }) {
  return (
    <div className="tags-flex">
      {i.data.tags.map((k, index) => (
        <div className="tags-inner" key={index}>
          <p className="project-tags">{k.text}</p>
          {index !== i.data.tags.length - 1 ? (
            <div className="dot"></div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
