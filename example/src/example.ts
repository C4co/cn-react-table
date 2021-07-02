export const EXAMPLE = `
import React from 'react'
import { Table } from 'cn-react-table'
import Faker from 'faker'
import styled from 'styled-components'

const data: Object[] = []
const items: number[] = [...Array.from(Array(1000).keys())]

const Image = styled.img\`
  border-radius: 200px;
  width: 40px;
  height: 40px;
\`

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

function App(){
  return (
    // cn-react-table
    <Table data={data} />
  )
}
`
