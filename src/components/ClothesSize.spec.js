const clothes = require('./ClothesSize.vue')
const ProductsVue = require('./ProductsVue.vue')
const CartComp = require('./CartComp.vue')
// const vtl= require('@testing-library/vue')
import { fireEvent, render,screen} from '@testing-library/vue'
import '@testing-library/jest-dom'
import '@vue/test-utils'

// it('has input',async()=>{
//     const {container}=render(clothes);
//     const input = container.querySelector('h2')
//     expect(input).toBeInTheDocument()
// })
it('has input',async()=>{
    render(ProductsVue);
    const input = screen.queryByRole('button')
    expect(input).toBeEnabled()
})
describe('header',()=>{

    it('has input',async()=>{
        render(CartComp);
        const input = container.querySelector('div')
        expect(input).toBeInTheDocument()
    })
})