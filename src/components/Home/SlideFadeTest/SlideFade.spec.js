import { mount } from '@vue/test-utils'
import SlideFade from './SlideFade.vue'

describe("SlideFade component unit test", () => {

    it("it renders the SlideFade", () => {
        //---------------------Arrange---------------------
        const wrapper = mount(SlideFade)
        //---------------------Assert---------------------
        expect(wrapper).toBeTruthy();
    });
});