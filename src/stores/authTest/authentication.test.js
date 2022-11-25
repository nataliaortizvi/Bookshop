import { createPinia, setActivePinia } from "pinia";
import { describe, vi, vitest, expect, beforeEach, it } from "vitest";
import { useAuthenticationStore } from "./authentication";


describe("Auth store", () => {

    vi.mock("firebase/auth", () => {
        const signInWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const createUserWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const signOut = vitest.fn(() => Promise.resolve(undefined));

        return {
            signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
            signOut,
        };
    });

    vi.mock("../../firebase/config", () => ({ auth: "mock" }))

    beforeEach(() => {
        setActivePinia(createPinia());
    });


    it("sign Up fn", async () => {
        const authentication = useAuthenticationStore();
        //console.log = vitest.fn();

        await authentication.signUp('email', 'pass', 'name');
       
        expect(authentication.user.name).toEqual('name');
        expect(authentication.user.email).toEqual('email');
    });

    it("sign In fn", async () => {
        const authentication = useAuthenticationStore();

            await authentication.signIn('email', 'pass');

            //await expect(authentication.signIn()).rejects.toThrow(Error);
    });

    it("log out fn", () => {
        const authentication = useAuthenticationStore();

        authentication.logOut();
    });


    it("load current user fn", async () => {
        const authentication = useAuthenticationStore();

        await authentication.signIn('email', 'pass');
        await authentication.loadCurrentUser();

        expect(authentication.currentUse).toBeFalsy();
    });

    it("user is null", () => {
        const authentication = useAuthenticationStore();

        expect(authentication.user).toBeNull();
    });
})