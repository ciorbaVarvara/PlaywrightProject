import { expect, Page, test } from "@playwright/test";
import { SocietyNameReservation } from "../../page-objects/pages/serviceDetails/SRS_SYSTEM/SocietyNameReservation";
import exp from "constants";

export async function validateServiceDetails(
    page: Page,
    msg: string,
    requiredList: string
) {
    const form = new SocietyNameReservation(page)

    await test.step('Name of Society Field + Query', async () => {
        const randomtext = form.societyNameField.generateRandomText(10);
        await form.societyNameField.enterText(randomtext);

        await form.societyNameField.clickButton();
        await form.societyNameField.getMessageRed();

        const feedback = await form.societyNameField.getMessageGreen();
        expect(feedback).toContain(msg);

    });

    await test.step('Type of Society Combobox Options', async () => {
        const list = await form.societyTypeCombobox.getComboboxAPIResponse();
        expect(list).toEqual(requiredList);

    });
    await test.step('Select a Type', async () => {
        const selectedOption = await form.societyTypeCombobox.selectOption();
        const receivedOption = await form.societyTypeCombobox.getText();
        expect(selectedOption).toContain(receivedOption)
        
    });
}

