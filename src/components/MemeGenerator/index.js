import {Component} from 'react'
import {
  MemeContainer,
  LayoutContainer,
  DetailsContainer,
  Heading,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  ButtonElement,
  DisplayImageElement,
  TopTextElement,
  BottomTextElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topInput: '',
    bottomInput: '',
    activeId: '',
  }

  getBackgroundImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onSubmittingDetails = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, activeOptionId} = this.state
    this.setState({
      backgroundImageUrl: imageUrl,
      topInput: topText,
      bottomInput: bottomText,
      activeId: activeOptionId,
    })
  }

  renderFinalPart = () => {
    const {backgroundImageUrl, topInput, bottomInput, activeId} = this.state
    return (
      <DisplayImageElement bgUrl={backgroundImageUrl}>
        <TopTextElement size={activeId}>{topInput}</TopTextElement>
        <BottomTextElement size={activeId}>{bottomInput}</BottomTextElement>
      </DisplayImageElement>
    )
  }

  renderMemeGenerator = () => {
    const {backgroundImageUrl, topInput, bottomInput, activeId} = this.state
    return (
      <DetailsContainer onSubmit={this.onSubmittingDetails}>
        <Heading>Meme Generator</Heading>
        <LabelElement htmlFor="backgroundImageInput">Image URL</LabelElement>
        <InputElement
          type="text"
          placeholder="Enter the Image Url"
          id="backgroundImageInput"
          value={backgroundImageUrl}
          onChange={this.getBackgroundImage}
        />
        <LabelElement htmlFor="topTextInput">Top Text</LabelElement>
        <InputElement
          type="text"
          placeholder="Enter the Top Text"
          id="topTextInput"
          value={topInput}
          onChange={this.changeTopText}
        />
        <LabelElement htmlFor="bottomTextInput">Bottom Text</LabelElement>
        <InputElement
          type="text"
          id="bottomTextInput"
          placeholder="Enter the Bottom Text"
          value={bottomInput}
          onChange={this.changeBottomText}
        />
        <LabelElement htmlFor="fontSizeChange">Font Size</LabelElement>
        <SelectElement id="fontSizeChange">
          {fontSizesOptionsList.map(eachItem => (
            <OptionElement key={eachItem.optionId} value={activeId}>
              {eachItem.displayText}
            </OptionElement>
          ))}
        </SelectElement>
        <ButtonElement type="submit">Generate</ButtonElement>
      </DetailsContainer>
    )
  }

  render() {
    return (
      <MemeContainer>
        <LayoutContainer>
          {this.renderMemeGenerator()}
          {this.renderFinalPart()}
        </LayoutContainer>
      </MemeContainer>
    )
  }
}

export default MemeGenerator
