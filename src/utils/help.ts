export default {
  formatBRL: (value: number) =>  +value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
}