import { getShoppingCart } from "../Utilities/fakedb"



const customLoader = async () => {
    const loaderData = await fetch("/CompanyData.json")
    const data = await loaderData.company.json()
    // return data
    
    let savedCart = []

    const storedCart = getShoppingCart()
    if (storedCart) {
        for(const id in storedCart) {
            const exixtingJob = data.find(job => job.id == id)
            if (exixtingJob) {
                savedCart.push(exixtingJob)
            }
        }
    }

    return savedCart
}
export {customLoader}