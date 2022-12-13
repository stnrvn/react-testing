const taxCut = (salary) => {
  const tax = 10/100
  const netSalary = salary - (tax * salary)
  return `Your net salary is Rp${netSalary}`
}

const greeting = (name) => {
  return `Hi ${name}`
}

export {
  taxCut,
  greeting
}