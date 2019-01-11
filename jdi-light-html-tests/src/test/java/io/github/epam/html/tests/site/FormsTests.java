package io.github.epam.html.tests.site;

import io.github.epam.TestsInit;
import io.github.epam.html.tests.site.steps.Preconditions;
import org.testng.annotations.Test;

import static io.github.com.StaticSite.*;
import static io.github.com.entities.Users.DEFAULT_CONTACT;
import static io.github.com.entities.Users.DEFAULT_USER;
import static io.github.com.pages.ContactFormPage.main;
import static io.github.com.pages.Header.loginForm;
import static io.github.com.pages.Header.userIcon;

public class FormsTests extends TestsInit {

    @Test
    public void loginTest() {
        Preconditions.shouldBeLoggedOut();
        userIcon.click();
        loginForm.loginAs(DEFAULT_USER);
        homePage.checkOpened();
    }

    @Test
    public void fillContactFormTest() {
        Preconditions.shouldBeLoggedIn();
        contactFormPage.shouldBeOpened();
        main.contactForm.submit(DEFAULT_CONTACT);
        main.contactForm.check(DEFAULT_CONTACT);
    }
}
