import '../components/ContainerBlock'
import ContainerBlock from '../components/ContainerBlock'

function Portfolio() {
    return (
        <>
            <div className="main-message">Past Projects</div>
            <ContainerBlock
                description='Project description 1'
                imageSource='../src/assets/profileCropped.jpg'
                subtitle='Project title 1'
            />
            <ContainerBlock
                description='Project description 1'
                imageSource='../src/assets/profileCropped.jpg'
                subtitle='Project title 1'
            />
            <ContainerBlock
                description='Project description 1'
                imageSource='../src/assets/profileCropped.jpg'
                subtitle='Project title 1'
            />
        </>
    )
}

export default Portfolio