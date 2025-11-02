import '../App.css'

type containerBlockProps = {
    description: string
    subtitle?: string    // optional
    imageSource?: string // optional
}

function ContainerBlock({description, subtitle, imageSource}:containerBlockProps) {
    return (
        <>
            <div className="containerBlock">
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

            </div>
        </>
    )
}

export default ContainerBlock