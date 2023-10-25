// first load the enrty of the loogind user
// then load the list of the entry

import { prisma } from '@/app/utils/db'
import Chart from '../../../components/chart'
import {databseUserId} from '../../utils/userId'
const Analysis =  async ()=>{
  const {id} = await databseUserId()
  console.log(id)
  const analysisOfuser = await prisma.analysis.findMany({
    where:{
      userId:id
    },
    select:{
      createdAt:true,
      sentimentScore:true,
    }
  })
  // console.log(analysisOfuser)
    return (
        <div>
            <h1>this is the analysie page</h1>
         <Chart data={analysisOfuser}/>
        </div>
   
    )
}

export default Analysis