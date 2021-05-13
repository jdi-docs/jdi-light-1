package io.github.epam.material.tests.surfaces;

import com.epam.jdi.light.elements.composite.WebPage;
import com.epam.jdi.tools.Timer;
import io.github.epam.TestsInit;
import org.testng.annotations.Test;

import static io.github.com.StaticSite.simpleAppBarPage;
import static io.github.com.StaticSite.hideAppBarPage;
import static io.github.com.StaticSite.elevateAppBarPage;
import static io.github.com.StaticSite.backToTopPage;
import static io.github.com.StaticSite.bottomAppBarPage;
import static io.github.com.pages.surfaces.AppBarPage.*;
import static  org.hamcrest.Matchers.containsString;

/**
 * To see an example of App Bar web element please visit https://material-ui.com/components/app-bar/
 */
public class AppBarTests extends TestsInit {
    private final Timer timer = new Timer(2000L);

    @Test
    public void simpleAppBarTest() {
        simpleAppBarPage.open();
        simpleAppBarPage.shouldBeOpened();
        simpleMenu.isDisplayed();
        appBarMenu.isDisplayed();
        prominentMenu.isDisplayed();
        simpleText.has().text("News");
        appBarText.has().text("Photos");
        prominentText.has().text("Material-UI");
        simpleButton.isDisplayed();
        appBarIcon.isDisplayed();
        prominentSearch.isDisplayed();
        prominentSecondMenu.isDisplayed();

        logoutSwitchButton.click();
        timer.wait(() -> appBarIcon.is().notVisible());
        logoutSwitchButton.click();
        timer.wait(() -> appBarIcon.isDisplayed());
        appBarIcon.click();
        timer.wait(() -> appBarIconOptions.get(1).isDisplayed());
        appBarIconOptions.get(1).click();
        timer.wait(() -> {
            appBarIconOptions.get(1).is().notVisible();
            appBarIcon.is().visible();
        });
    }

    @Test
    public void bottomAppBarTest() {
        bottomAppBarPage.open();
        bottomAppBarPage.shouldBeOpened();
        bottomButton.isDisplayed();
        bottomMenuButton.isDisplayed();
        bottomSearchButton.isDisplayed();
        bottomSecondMenuButton.isDisplayed();

    }

    @Test
    public void hideAppBarTest() {
        hideAppBarPage.open();
        hideAppBarPage.shouldBeOpened();
        topAppBar.isDisplayed();
        WebPage.scrollToBottom();
        timer.wait(() -> topAppBar.is().hidden());
    }

    @Test
    public void elevateAppBarTest() {
        elevateAppBarPage.open();
        elevateAppBarPage.shouldBeOpened();
        elevateAppBar.has().classValue(containsString("MuiPaper-elevation0"));
        WebPage.scrollToBottom();
        timer.wait(() -> elevateAppBar.has().classValue(containsString("MuiPaper-elevation4")));
    }

    @Test
    public void backToTopTest() {
        backToTopPage.open();
        backToTopPage.shouldBeOpened();
        scrollBackText.is().visible();
        scrollBackToTopButton.is().hidden();
        WebPage.scrollToBottom();
        timer.wait(() -> scrollBackText.is().notVisible());
        scrollBackToTopButton.click();
        timer.wait(() -> {
            scrollBackToTopButton.is().hidden();
            scrollBackText.is().visible();
        });
    }
}
