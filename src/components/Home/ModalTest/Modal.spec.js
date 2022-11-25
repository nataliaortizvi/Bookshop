import { mount } from '@vue/test-utils'
import { expect, describe} from 'vitest'
import Modal from './Modal.vue'

describe("modal component unit test", () => {

    it("it renders the modal", () => {
        //---------------------Arrange---------------------
        const wrapper = mount(Modal, {
            props: {
                showButton: true,
            },
        })
        //---------------------Assert---------------------
        expect(wrapper).toBeTruthy();
    });

    it("it renders the modal with button", () => {
        //---------------------Arrange---------------------
        const wrapper = mount(Modal, {
            props: {
                showButton: true,
            },
        })
        //---------------------Act---------------------
        const button = wrapper.find('button');
        //---------------------Assert---------------------
        expect(button.exists()).toBeTruthy();
    });

    it("it renders the modal without button", () => {
        //---------------------Arrange---------------------
        const wrapper = mount(Modal, {
            props: {
                showButton: false,
            },
        })
        //---------------------Act---------------------
        const button = wrapper.find('button');
        //---------------------Assert---------------------
        expect(button.exists()).toBeFalsy();
    });

    it("it clicks on the button and emits an event", () => {
        //---------------------Arrange---------------------
        const wrapper = mount(Modal, {
            props: {
                showButton: true,
            },
        })
        //---------------------Act---------------------
        const button = wrapper.find('button');
        button.trigger('click');
        //---------------------Assert---------------------
        expect(wrapper.emitted()).toHaveProperty('close')
    });
});