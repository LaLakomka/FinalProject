export const searchSum = (data) => {
    const items = data[0];

   if (!items) return [];

    return items.data.map(item=>({
        date:item.date,
        total:item.value,
        risk:data[1].data.find(riskItem=>(item.date===riskItem.date)).value
    }))   
}
