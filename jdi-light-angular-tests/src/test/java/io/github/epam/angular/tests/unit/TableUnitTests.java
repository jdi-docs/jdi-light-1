package io.github.epam.angular.tests.unit;

import io.github.epam.TestsInit;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.List;

import static io.github.com.StaticSite.angularPage;
import static io.github.com.pages.sections.TableSection.basicTable;
import static io.github.com.pages.sections.TableSection.flexTable;
import static io.github.epam.site.steps.States.shouldBeLoggedIn;
import static org.testng.Assert.assertEquals;

public class TableUnitTests extends TestsInit {

    @BeforeMethod(alwaysRun = true)
    public void before() {
        shouldBeLoggedIn();
        angularPage.shouldBeOpened();
    }

    @Test
    public void verifyMatTablesTest() {
        basicTable.show();
        assertEquals(basicTable.is().name, "Basic Table");
        assertEquals(flexTable.is().name, "Flex Table");
    }

    @Test
    public void checkMatTablesTest() {
        int row = 3;
        basicTable.show();
        List<String> baseHeader = basicTable.header();
        List<String> flexHeader = flexTable.header();
        assertEquals(baseHeader,flexHeader);
        List<String> baseRow = flexTable.getRow(row).getValuesFast();
        List<String> flexRow = flexTable.getRow(row).getValuesFast();
        assertEquals(baseRow,flexRow);
    }
}
