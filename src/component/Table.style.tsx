import styled, { css } from 'styled-components'
import { darken, rgba } from "polished"

const BASE_COLOR = "#FFFFFF";
const PRIMARY_COLOR = "#0e60dc";

type ContainerProps = {
  maxHeight?: Number
}

export const Main = styled.div`
  width: 100%;
  background-color: ${BASE_COLOR};
`

export const Container = styled.div<ContainerProps>`
  width: 100%;
  overflow-x: auto;
  border: solid ${darken(0.15, BASE_COLOR)} 1px;
  font-size: 1em;
  height: 100%;
  position: relative;

  ${props => props.maxHeight && css`
    max-height: ${String(props.maxHeight)}px;
  `}
`

export const Content = styled.table`
  font-family: inherit;
  width: 100%;
  background-color: ${BASE_COLOR};
  border-spacing: 0px;
  margin: 0 auto;
  border-collapse: separate;
  font-size: 0.9em;
  position: relative;
`

export const Head = styled.thead`
  width: 100%;
  top: 0;
`

export const Footer = styled.tfoot`
  width: 100%;
  top: 0;
`

type TitleProps = {
  footer?: boolean
}

export const Title = styled.th<TitleProps>`
  padding: 10px;
  border-bottom: solid ${darken(0.15, BASE_COLOR)} 1px;
  position: sticky;
  top: 0;
  text-align: left;
  background: ${BASE_COLOR};
  z-index: 1000;
  color: ${darken(1, BASE_COLOR)};

  ${props => props.footer && css`
    bottom: 0px;
    border-bottom: none;
    border-top: solid ${darken(0.15, BASE_COLOR)} 1px;
  `}
`

export const Body = styled.tbody`
  width: 100%;
`

type ItemProps = {
  selected?: boolean
}

export const Item = styled.tr<ItemProps>`
  color: ${darken(0.7, BASE_COLOR)};
  width: 100%;

  &:nth-child(even) {
    background-color: ${darken(0.04, BASE_COLOR)};
  }

  ${props => props.selected && css`
    background-color: ${rgba(PRIMARY_COLOR, 0.15)} !important;
    color: ${darken(1, BASE_COLOR)};
  `}
`

type ColProps = {
  selected?: boolean
}

export const Col = styled.td<ColProps>`
  padding: 8px 10px;
  border-right: solid ${darken(0.15, BASE_COLOR)} 1px;

  &:last-child{
    border-right: none;
  }

  ${props => props.selected && css`
    border-right: solid ${rgba(PRIMARY_COLOR, 0.4)} 1px;
  `}
`

type SelectProps = {
  selected?: boolean
  selectAll?: boolean
}

export const Select = styled.div<SelectProps>`
  width: 20px;
  height: 20px;
  border: solid ${darken(0.4, BASE_COLOR)} 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  ${props => props.selectAll && css `
    background: ${PRIMARY_COLOR};
    border: solid ${PRIMARY_COLOR} 2px;

    &:before {
      content: " ";
      width: 8px;
      height: 3px;
      background: ${BASE_COLOR};
    }
  `}

  ${props => props.selected && css `
    background: ${PRIMARY_COLOR};
    border: solid ${PRIMARY_COLOR} 2px;
  `}
`

// Controls

export const Controls = styled.footer`
  padding: 5px;
  position: relative;
  top: -1px;
  display: flex;
  gap: 20px;
  border: solid ${darken(0.15, BASE_COLOR)} 1px;
  justify-content: center;
  align-items: center;
`

export const PageIndicator = styled.span`
  font-weight: bold;
  color: black;
`

export const PageButton = styled.button`
  height: 36px;
  width: 36px;
  padding-bottom: 3px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  border-radius: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: solid ${darken(0.3, BASE_COLOR)} 1px;
`
