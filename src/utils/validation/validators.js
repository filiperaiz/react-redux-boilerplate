import * as Yup from 'yup'

import { validatorsTests } from './validatorsTests'

const validators = {
  password: Yup.string()
    .required('Campo obrigatório')
    .min(6, 'Mínimo de 6 caracteres'),
  cpf: Yup.string()
    .required('Campo obrigatório')
    .test('testCpf', 'CPF Inválido', validatorsTests.isValidCpf),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  mobile_number: Yup.string()
    .required('Campo obrigatório')
    .test({
      name: 'Mobile Number',
      message: 'Celular inválido.',
      test: (value) =>
        value &&
        Number.isInteger(Math.abs(value.replace(/[^0-9]/g, ''))) &&
        value.replace(/[^0-9]/g, '').length === 11
    }),
  cep: Yup.string()
    .max(9, 'Deve conter no máximo 8 caracteres')
    .nullable()
    .required('Informe o seu cep'),
  required: (type = 'string', msg = 'Campo obrigatório') =>
    Yup[type]().required(msg),
  requiredNullable: (type = 'string', msg = 'Campo obrigatório') =>
    Yup[type]().nullable().required(msg),
  requiredBool: Yup.bool()
    .required('Campo obrigatório')
    .test('requiredBool', 'Campo obrigatório', validatorsTests.isChecked),
  onlyText: Yup.string()
    .required('Campo obrigatório')
    .test(
      'only-text',
      'Campo não pode conter números',
      validatorsTests.onlyText
    ),
  onlyNumber: Yup.string()
    .required('Campo obrigatório')
    .test(
      'only-number',
      'Campo só pode conter números',
      validatorsTests.onlyNumber
    ),
  fullName: Yup.string()
    .trim()
    .required('Campo obrigatório')
    .test('only-text', 'Não pode conter número', validatorsTests.onlyText)
    .test(
      'first-name',
      'Nome deve conter no mínimo 2 caracteres',
      validatorsTests.firstName
    )
    .test(
      'last-name',
      'Sobrenome deve conter no mínimo 2 caracteres',
      validatorsTests.lastName
    ),
  birth_dt: Yup.string()
    .required('Campo obrigatório')
    .test('test-date', 'Data inválida', validatorsTests.isValidDate)
    .test('test-age', 'Deve ser maior que 18 anos', validatorsTests.isValidAge),
  cpf_or_email: Yup.lazy((value) => {
    if (value === undefined) {
      return validators.required()
    }

    const field = value.replace(/[.-]/g, '')
    const isCpf = validatorsTests.onlyNumber(field)
    const isEmail = field.includes('@')

    if (isCpf) {
      return validators.cpf
    }

    if (isEmail) {
      return validators.email
    }

    return Yup.string().test('default', 'Campo inválido', () => false)
  })
}

export default validators
