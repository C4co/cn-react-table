import React, { useState, useEffect } from 'react'
import * as S from './Table.style'
import { CNTableProps } from './Table.type'
import { chunk } from './helpers'

export function Table(props: CNTableProps){
  const labels = Object.keys(props.data[0])
  const [selectedItems, setSelectedItems] = useState(new Set())
  const [page, setPage] = useState(0)
  const [tableItems, setTableItems] = useState<Array<Array<any>>>([[]])

  useEffect(() => {
    if(props.onSelectItems){
      props.onSelectItems(Array.from(selectedItems))
    }

    setTableItems(chunk(props.data, props.limitOfItems))
  })

  function toggleSelection(item: any){
    const clonedItems = selectedItems

    if(selectedItems.has(item)){
      clonedItems.delete(item)

      setSelectedItems(new Set([...Array.from(clonedItems)]))
    }else{
      setSelectedItems(new Set([...Array.from(clonedItems)]).add(item))
    }
  }

  function toggleAllItems(){
    if(selectedItems.size){
      setSelectedItems(new Set())
    }else{
      setSelectedItems(new Set([...Array.from(props.data)]))
    }
  }

  function prevPage(){
    if(page > 0){
      setPage(page - 1)
    }
  }

  function nextPage(){
    if(page < (tableItems.length - 1)){
      setPage(page + 1)
    }
  }

  return (
    <S.Main>
      <S.Container maxHeight={props.maxHeigth || 0}>
        <S.Content>

          <S.Head>
            <tr>
              {
                props.dynamicTable &&
                <S.Title>
                  <S.Select
                    selectAll={Boolean(selectedItems.size)}
                    onClick={props.dynamicTable ? toggleAllItems : undefined}
                  />
                </S.Title>
              }

              {
                labels.map((label, index) => {
                  return(
                    <S.Title key={index}> { label } </S.Title>
                  )
                })
              }
            </tr>
          </S.Head>

          <S.Body>
            { tableItems[page].map((element: any, index: any) => {
              return (
                <S.Item
                  selected={selectedItems.has(element)}
                  onClick={props.dynamicTable ? () => {toggleSelection(element)} : undefined}
                  key={index}
                >

                  {
                    props.dynamicTable &&
                    <S.Col selected={selectedItems.has(element)}>
                      <S.Select selected={selectedItems.has(element)} />
                    </S.Col>
                  }

                  {
                    Object.entries(element).map((item: any, index: any) => {
                      return (
                        <S.Col
                          selected={selectedItems.has(element)}
                          data-label={item[0] + ":"}
                          key={index}
                        >
                          { item[1] }
                        </S.Col>
                      )
                    })
                  }

                </S.Item>
                )
              })
            }
          </S.Body>

          <S.Footer>
            <tr>
              {
                props.dynamicTable &&
                <S.Title footer>
                  <S.Select
                    selectAll={Boolean(selectedItems.size)}
                    onClick={toggleAllItems}
                  />
                </S.Title>
              }

              {
                labels.map((label, index) => {
                  return(
                    <S.Title footer key={index}> { label } </S.Title>
                  )
                })
              }
            </tr>
          </S.Footer>

        </S.Content>
      </S.Container>

      <S.Controls>
        <S.PageButton onClick={ prevPage }> {'«'} </S.PageButton>
          <S.PageIndicator> { page + 1 } / { tableItems.length } </S.PageIndicator>
        <S.PageButton onClick={ nextPage }> {'»'} </S.PageButton>
      </S.Controls>

    </S.Main>
  )
}

Table.defaultProps = {
  limitOfItems: 25
}
