 
export  function generateYears(start:number, end:number) {
     const years: number[] =[];
    
    for (let year = start; year <= end; year++) {
      years.push(year)
    }
    return years
}

// 