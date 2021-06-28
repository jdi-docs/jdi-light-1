package io.github.epam.material.tests.inputs;

import io.github.epam.TestsInit;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static io.github.com.StaticSite.buttonGroupPage;
import static io.github.com.StaticSite.splitButtonGroupFrame;

public class ButtonGroupTests extends TestsInit {

    @BeforeMethod
    public void before(){

        buttonGroupPage.open();
        //buttonGroupPage.isOpened();
    }

    @Test
    public void basicButtonGroupTest() {

        buttonGroupPage.basicButtonGroup.getButtonByIndex(1).click();
        buttonGroupPage.basicButtonGroup.getButtonByIndex(2).click();
        buttonGroupPage.basicButtonGroup.getButtonByIndex(3).click();

        buttonGroupPage.basicButtonGroup.getButtonByText("Three").click();
        buttonGroupPage.basicButtonGroup.getButtonByText("Two").click();
        buttonGroupPage.basicButtonGroup.getButtonByText("One").click();

        buttonGroupPage.basicButtonGroup.getButtonByIndex(1).is().enabled();
        buttonGroupPage.basicButtonGroup.getButtonByIndex(1).has().text("ONE");
    }

    @Test
    public void verticalButtonGroupTest() {

        buttonGroupPage.verticalButtonGroup.getButtonByIndex(2).click();
        buttonGroupPage.verticalButtonGroup.getButtonByIndex(3).click();

        buttonGroupPage.verticalButtonGroup.getButtonByText("Two").click();
        buttonGroupPage.verticalButtonGroup.getButtonByText("One").click();

        buttonGroupPage.basicButtonGroup.getButtonByIndex(2).is().enabled();
        buttonGroupPage.basicButtonGroup.getButtonByIndex(2).has().text("TWO");
    }

    /*@Test
    public void disabledButtonGroupTest() {

        buttonGroupPage.basicButtonGroup.getButtonByIndex(1).is().disabled();
        buttonGroupPage.basicButtonGroup.getButtonByText("Two").is().disabled();
    }*/

    @Test
    public void splitButtonGroupTest() {

        /*buttonGroupPage.splitButtonGroup.getMainButton().click();
        buttonGroupPage.splitButtonGroup.getMainButton()
                .has().text("SQUASH AND MERGE");
        buttonGroupPage.splitButtonGroup.select("Create a merge commit");
        buttonGroupPage.splitButtonGroup.getMainButton()
                .has().text("CREATE A MERGE COMMIT");*/

        splitButtonGroupFrame.buttonGroup.getMainButton().click();
        splitButtonGroupFrame.buttonGroup.getMainButton()
                .has().text("SQUASH AND MERGE");
        splitButtonGroupFrame.buttonGroup.select("Create a merge commit");
        splitButtonGroupFrame.buttonGroup.getMainButton()
                .has().text("CREATE A MERGE COMMIT");

    }
}
