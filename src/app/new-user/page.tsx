import {prisma} from '../utils/db'
import { currentUser } from '@clerk/nextjs'
const NewUserPage = () => {
    const user = currentUser()
    console.log(user)
    // const createUser = async () => {
    //     const user = await currentUser()
    //     const data = {
    //         email: user?.emailAddresses[0].emailAddress,
    //         clerkId: user.id
    //     }
    //     const newUser = await prisma.user.create({data})
    //     console.log(newUser)
    // }
    return <div> New User Page</div>
}

export default NewUserPage
