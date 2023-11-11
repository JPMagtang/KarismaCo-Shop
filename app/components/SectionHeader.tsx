export default function SectionHeader(props: any) {
    return (
        <div className="section-header flex text-xl max-w-full w-full items-center justify-center mb-35px">
            <div className="section-liner w-full border-gold-digger border-solid border-1.5px" />
            <div>&nbsp;&nbsp;&#10044;</div>
            <h3 className="w-4/12 text-center justify-center">{props.headerTitle}</h3>
            <div>&#10044;&nbsp;&nbsp;</div>
            <div className="section-liner w-full border-gold-digger border-solid border-1.5px" />
        </div>
    );
}