import "./section.css";

const Section = ({ children, scrollId }) => {
  return (
    <section className={`section-seprator`} id={scrollId}>
      {children}
    </section>
  );
};

export const SectionWithTitle = ({ children, title, scrollId }) => {
  return (
    <section className={`section-seprator`} id={scrollId}>
      {title ? <div className="section-title">{title}</div> : null}
      {children}
    </section>
  );
};

export const SectionWithTitleAndDescription = ({
  children,
  title,
  scrollId,
  shortDescription,
  reverse,
}) => {
  return (
    <section
      className={`section-seprator with-description ${
        reverse === true ? "section-reverse" : ""
      }`}
      id={scrollId}
    >
      {/* {title ? ( */}
        <div className="flex column item-detail">
          <div className="section-title">{title}</div>
          {shortDescription ? (
            <p className="tag-line description"> {shortDescription} </p>
          ) : null}
        </div>
      {/* ) : null} */}
      {children}
    </section>
  );
};

export const Spacer = ({ half }) => {
  return <div className={`spacer ${half ? "half" : ""}`}></div>;
};

export default Section;
