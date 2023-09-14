export default function SectionHeader(props: any) {
    return (
        <div className="section-header">
            <div className="section-liner" />
            <div>&nbsp;&nbsp;&#10044;</div>
            <h3>{props.headerTitle}</h3>
            <div>&#10044;&nbsp;&nbsp;</div>
            <div className="section-liner" />
        </div>
    );
}