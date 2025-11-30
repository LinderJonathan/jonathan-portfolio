import '../App.css'

export type containerBlockProps = {
    description: string
    link?: string
    linkLabel?: string
    title?: string
    subtitle?: string
    imageSource?: string
    align?: 'left' | 'right'
}

function ContainerBlock({ description, link, title, subtitle, imageSource, align }: containerBlockProps) {
    
    const hasImage = !!imageSource
    const hasTitle = !!title
    const hasSubtitle = !!subtitle
    const hasLink = !!link
    const blockClass = `containerBlock ${!hasLink && !hasImage && !hasTitle && !hasSubtitle ? 'simple' : ''} ${align ?? ''}`


    return (
        <>
            <div className={blockClass}>
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