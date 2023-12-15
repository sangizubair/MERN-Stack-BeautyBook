
export const formateDate = (date, config)=>{

    const defaultOptions ={day:'numeric', month:'long', year:'numeric'}
    const optinos= config ? config : defaultOptions

    return new  Date(date).toLocaleDateString('en-US', optinos)

}