import styled from 'styled-components'

export const Title = styled.h2 `
    font-family: system-ui;
    color: #FFFFFF;
    text-align:center;
    margin-top: 12px;
    letter-spacing: 0.22em;
`

export const Image = styled.img `
    margin-top: 35px;
    display:block;
`

export const TextInput = styled.textarea `
    display:block;
    width:342px;
    height: 100px;
    border-radius: 10px;
    background: #FFFFFF;
    margin-top: 12px;
    padding: 5px;
    resize: none;
    flex-shrink: 0;
`
export const Button = styled.button`
    width:342px;
    height: 64px;
    padding: 22px 113px 22px 113px;
    gap: 0px;
    border-radius: 10px;
    background: ${props => props.isOn ? '#000000' : '#CDCDCD'};
    margin-top: 24px;
    margin-bottom: 22px;
    color: ${props => props.isOn ? '#FFFFFF' : '#000000'};
`
export const Text = styled.text`
    font-family: system-ui;
    font-size: 17px;
    font-weight: 500;
    line-height: 2.5px;
    text-align: center;
    padding-left: 4px;
`
export const Container = styled.div`
    width: 414px;
    height: 896px;
    gap: 0px;
    opacity: 0px;
    background: #3936C0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ListBox = styled.div`
    gap: 0px;
    opacity: 0px;
    background: #3936C0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`
