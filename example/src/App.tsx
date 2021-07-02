import React from 'react'
import { Table } from 'cn-react-table'
import Faker from "faker"
import styled from "styled-components"
import { Coda } from "cn-react-coda"
import { EXAMPLE } from './example'

const data: Object[] = []
const items: number[] = [...Array.from(Array(1000).keys())]

const Image = styled.img`
  border-radius: 200px;
  width: 40px;
  height: 40px;
`

const Wrapper = styled.div`
  padding: 50px 10px;
  max-width: 1200px;
  margin: 0 auto;
`

items.forEach(() => {
  data.push({
    "Avatar": <Image src={Faker.image.avatar()}/>,
    "Name": <b> {Faker.name.findName()} </b>,
    "Email": Faker.internet.email(),
    "Phone": Faker.phone.phoneNumber(),
    "City": Faker.address.city(),
    "Company": Faker.company.companyName(),
    "Commerce": Faker.commerce.department()
  })
})

const App = () => {
  return (
    <Wrapper>
      <h2> Basic table </h2>
      <br/>

      <Table data={data} />

      <br/>

      <Coda lang="javascript" theme="dark" code={EXAMPLE} />

      <br/><br/><br/><br/><br/>

      <h2> Dynamic Table </h2>

      <br/>

      <Table data={data} dynamicTable onSelectItems={(items: any) => { console.log(items) }} />
    </Wrapper>
  )
}

export default App
