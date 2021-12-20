import { isValid, differenceInYears } from 'date-fns'

export const validatorsTests = {
  onlyText: (value) => /^[^\d]+$/.test(value),
  onlyNumber: (value) => /^[\d]+$/.test(value),
  firstName: (value) => {
    if (value) {
      const splitName = value.split(' ')

      return splitName[0]?.length >= 2
    }
  },
  lastName: (value) => {
    if (value) {
      const splitName = value.split(' ')

      return splitName[1]?.length >= 2
    }
  },
  isChecked: (value) => /true/i.test(value),
  isValidDate: (value = '') => {
    const newDate = value.split('/').reverse().join('/')

    if (!isValid(new Date(newDate))) {
      return false
    }

    return true
  },
  isValidAge: (value = '') => {
    const newDate = value.split('/').reverse().join('/')
    const diff = differenceInYears(new Date(), new Date(newDate))

    if (diff < 18) {
      return false
    }

    return true
  },
  isValidCpf: (number) => {
    if (number === undefined) {
      return true
    }

    const cpf = number.replace(/[^\d]+/g, '')
    if (cpf.length !== 11) {
      return false
    }

    // http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
    let sum = 0
    let mod

    const repeat = cpf[0].repeat(cpf.length)
    if (cpf === repeat) {
      return false
    }

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i), 0) * (11 - i)
    }

    mod = (sum * 10) % 11

    if (mod === 10 || mod === 11) {
      mod = 0
    }

    if (mod !== parseInt(cpf.substring(9, 10), 0)) {
      return false
    }

    sum = 0

    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i), 0) * (12 - i)
    }

    mod = (sum * 10) % 11

    if (mod === 10 || mod === 11) {
      mod = 0
    }

    if (mod !== parseInt(cpf.substring(10, 11), 0)) {
      return false
    }

    return true
  },
  isValidMinDate: (value, minDate) => {
    if (value === undefined) {
      return true
    }

    const formattedValue = value.split('/').reverse().join('/')

    const d1 = new Date(formattedValue)

    const d2 = new Date(`${minDate.split('-').join('/')} 00:00:00`)

    if (d1 < d2) {
      return false
    }

    return true
  },
  isValidMaxDate: (value, maxDate) => {
    if (value === undefined) {
      return true
    }

    const formattedValue = value.split('/').reverse().join('/')

    const d1 = new Date(formattedValue)

    const d2 = maxDate

    if (d1 > d2) {
      return false
    }

    return true
  }
}
