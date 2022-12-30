/**
 * @vite-environnement jsdom
 */
import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import Imc from '@/components/math/Imc.vue'

describe('Imc Tests', () => {
    it('should render', () => {
       const wrapper = mount(Imc)  
       expect(wrapper.find('h2').exists()).toBeTruthy()
       expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
    })
})