import styled from 'styled-components'

export const MemeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
export const DetailsContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 15px;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 24px;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
`
export const InputElement = styled.input`
  height: 35px;
  width: 90%;
  border: 1px solid #5a7184;
  margin-top: 10px;
`
export const SelectElement = styled.select`
  height: 35px;
  width: 90%;
  border: 1px solid #5a7184;
  margin-top: 10px;
`

export const OptionElement = styled.option`
  font-size: 18px;
`

export const ButtonElement = styled.button`
  height: 35px;
  width: 120px;
  background-color: #0b69ff;
  color: white;
  border: none;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
`
export const DisplayImageElement = styled.div`
  height: 350px;
  width: 90%;
  background-image: url(${props => props.bgUrl});
  @media screen and (max-width: 767px) {
    height: 200px;
    width: 90%;
  }
`
export const TopTextElement = styled.h1`
  color: white;
  font-size: ${props => props.activeOptionId};
`
export const BottomTextElement = styled.h1`
  color: white;
  font-size: ${props => props.activeOptionId};
`
