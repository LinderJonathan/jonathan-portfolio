import '../App.css'

export type containerBlockProps = {
    description: string
    subtitle?: string    // optional
    imageSource?: string // optional
}

function ContainerBlock({description, subtitle, imageSource}:containerBlockProps) {
    return (
        <>
            {imageSource && (
                <img
                    src={imageSource}
                    alt="../assets/profileCropped.jpg"
                />
            )}
            {subtitle && (<div>{subtitle}</div>)}

            <div className="containerBlockDescription">
                { description }
            </div>
        </>
    )
}

export default ContainerBlock