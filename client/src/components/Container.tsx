import '../App.css'
import '../components/ContainerBlock'

import type {containerBlockProps} from "../components/ContainerBlock"
import ContainerBlock from '../components/ContainerBlock'

type containerProps = {
  pageMessage: string
  blocks: ({ id: string } & containerBlockProps)[]
}

function Container({pageMessage, blocks}: containerProps) {

  const renderedBlocks = []
  var k = 0

  // TODO: see if this works, give styling
  for (const block of blocks) {

    renderedBlocks.push(
    <div className={k%2 === 0 ? "ContainerBlockLeft" : "ContainerBlockRight"}>
      <ContainerBlock 
        key={block.id} 
        description={block.description}
        subtitle={block.subtitle}
        imageSource={block.imageSource}
      />
    </div>
    )
    k++
  }
  
  return (
    <>
      <div className="Container">
        <h1 id="message" className="pageMessage">{pageMessage}</h1>
      </div>
      {renderedBlocks}
    </>
  )
}

export default Container