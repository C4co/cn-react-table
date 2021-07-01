import React from 'react'
import { Table } from 'cn-react-table'
import Faker from "faker"
import styled from "styled-components"
import { Coda } from "cn-react-coda"

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

const example = `
<Table data={data} maxHeigth={400} />
`

const App = () => {
  return (
    <Wrapper>
      <h2> Table </h2>
      <br/>
      <Table
        maxHeigth={500}
        data={data}
      />

      <br/>

      <Coda lang="jsx" theme="dark" code={example} />

      <br/><br/>

      <h2> Dynamic Table </h2>
      <br/>

      <Table
        data={data}
        dynamicTable
        onSelectItems={(items: any) => { console.log(items) }} />
    </Wrapper>
  )
}

export default App
