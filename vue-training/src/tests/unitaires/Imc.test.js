import { mount, shallowMount} from '@vue/test-utils'
import Imc from '@/components/math/Imc.vue'
import jest from 'jest'

test('should call imcCalcul when button is clicked', () => {
    const wrapper = mount(Imc)
    const imcCalcul = jest.fn
    
})