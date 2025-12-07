import '../App.css'

export type containerBlockProps = {
    description: React.ReactNode
    link?: string
    linkLabel?: string
    header?: string
    title?: string
    subtitle?: string
    imageSource?: string
    isCentered?: boolean
    align?: 'left' | 'right'
}

function ContainerBlock({
    description,
    link,
    linkLabel,
    header,
    title,
    subtitle,
    imageSource,
    isCentered,
    align }: containerBlockProps) {
    
    const hasImage = !!imageSource
    const hasSubtitle = !!subtitle
    const hasLink = !!link

    let classes = ['containerBlock'];
    if (!hasLink && !hasImage && !hasSubtitle)
    {
        classes.push("simple");
    }
    if (isCentered)
    {
        classes.push("center");
    }
    else if (align)
    {
        classes.push(align);
    }

    const blockClass = classes.join(" ");

    return (
        <>
            <div className={blockClass}>
                <div className="headerField">
                    {header && (<h1 className='header'>{header}</h1>)}
                </div>
                <div className="projectTitle">
                    {title && (<h2 className='title'>{title}</h2>)}
                    {subtitle && (<h3 className='subtitle'>{subtitle}</h3>)}
                </div>
                {imageSource && (
                    <img
                        src={imageSource}
                        alt="../assets/profileCropped.jpg"
                    />
                )}
                <div className='description'>
                    { description }
                </div>
                {link && (<a href={link}>Github Link</a>)}
            </div>

        </>
    )
}

export default ContainerBlock