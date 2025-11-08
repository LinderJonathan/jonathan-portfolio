import '../App.css'

export type containerBlockProps = {
    description: string
    subtitle?: string
    imageSource?: string
    align?: 'left' | 'right'
}

function ContainerBlock({ description, subtitle, imageSource, align }: containerBlockProps) {
    
    const hasImage = !!imageSource
    const hasSubtitle = !!subtitle
    const blockClass = `containerBlock ${!hasImage && !hasSubtitle ? 'simple' : ''} ${align ?? ''}`


    return (
        <>
            <div className={blockClass}>
            {imageSource && (
                    <img
                        src={imageSource}
                        alt="../assets/profileCropped.jpg"
                    />
                )}
                {subtitle && (<div className='subtitle'>{subtitle}</div>)}

                <div className='description'>
                    { description }
                </div>
            </div>

        </>
    )
}

export default ContainerBlock