import { mount } from '@vue/test-utils'
import Landing from './Landing.vue'

describe("landing component unit test", () => {

    it("it renders the landing", () => {
        //---------------------Arrange---------------------
        const wrapper = mount(Landing)
        //---------------------Assert---------------------
        expect(wrapper).toBeTruthy();
    });
});