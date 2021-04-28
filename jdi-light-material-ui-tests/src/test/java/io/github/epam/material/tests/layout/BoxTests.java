package io.github.epam.material.tests.layout;

import com.epam.jdi.tools.Timer;
import io.github.epam.TestsInit;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import static io.github.com.MaterialNavigator.openSection;
import static io.github.com.StaticSite.*;
import static org.hamcrest.Matchers.hasToString;

public class BoxTests extends TestsInit {

    private static Timer timer = new Timer(1000L);

    @BeforeTest
    public void before() {
        openSection("Box");
    }

    @Test
    public void containedBoxTest() {
        timer.wait(() -> defaultBoxPage.containedBox.isEnabled());
        defaultBoxPage.containedBox.is().enabled();
        defaultBoxPage.containedBox.click();
        defaultBoxPage.containedBox.is().text(hasToString("FIRST BUTTON"));
        defaultBoxPage.lastClickContent.is().text(hasToString("You clicked First button"));
    }

    @Test
    public void outlinedBoxTest() {
        defaultBoxPage.outlinedBox.is().enabled();
        defaultBoxPage.outlinedBox.click();
        defaultBoxPage.outlinedBox.is().text(hasToString("SECOND BUTTON"));
        defaultBoxPage.lastClickContent.is().text(hasToString("You clicked Second button"));
    }

    @Test
    public void disabledBoxTest() {
        defaultBoxPage.disabledBox.is().text(hasToString("THIRD BUTTON"));
        defaultBoxPage.disabledBox.is().disabled();
    }
}
