//@ts-nocheck
//@ts-ignore

describe('Login Test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have button', async () => {
        await expect(element(by.id('loginButton'))).toBeVisible();
    });
});
