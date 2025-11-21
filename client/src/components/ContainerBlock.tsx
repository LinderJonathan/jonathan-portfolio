import '../App.css'

export type containerBlockProps = {
    description: string
    link?: string
    linkLabel   ?: string
    subtitle?: string
    imageSource?: string
    align?: 'left' | 'right'
}

function ContainerBlock({ description, link, subtitle, imageSource, align }: containerBlockProps) {
    
    const hasImage = !!imageSource
    const hasSubtitle = !!subtitle
    const hasLink = !!link
    const blockClass = `containerBlock ${!hasLink && !hasImage && !hasSubtitle ? 'simple' : ''} ${align ?? ''}`


    return (
        <>
            <div className={blockClass}>
                {imageSource && (
                    <img
                        src={imageSource}
                        alt="../assets/profileCropped.jpg"
                    />
                )}
                {subtitle && (<h2 className='subtitle'>{subtitle}</h2>)}

                <div className='description'>
                    { description }
                </div>
                {subtitle && (<a href={link}>Github Link</a>)}
            </div>

        </>
    )
}

export default ContainerBlock