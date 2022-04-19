package io.github.epam.material.tests.displaydata;

import com.epam.jdi.light.common.ElementArea;
import com.epam.jdi.light.material.elements.displaydata.table.ColumnSorting;
import com.jdiai.tools.Timer;
import io.github.epam.TestsInit;
import org.hamcrest.Matchers;
import org.openqa.selenium.Keys;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static io.github.com.StaticSite.muiTablePage;
import static io.github.com.pages.displaydata.MUITablePage.basicTable;
import static io.github.com.pages.displaydata.MUITablePage.collapsibleTable;
import static io.github.com.pages.displaydata.MUITablePage.dataTable;
import static io.github.com.pages.displaydata.MUITablePage.densePaddingSwitch;
import static io.github.com.pages.displaydata.MUITablePage.denseTable;
import static io.github.com.pages.displaydata.MUITablePage.purchaseTable;
import static io.github.com.pages.displaydata.MUITablePage.sortingSelectingTable;
import static io.github.com.pages.displaydata.MUITablePage.virtualizedTable;
import static org.hamcrest.Matchers.containsString;

public class MUITableTests extends TestsInit {

    private static final List<String> EXPECTED_TABLE_HEADERS = new ArrayList<>(Arrays.asList("Dessert (100g serving)",
            "Calories", "Fat (g)", "Carbs (g)", "Protein (g)"));

    private final Timer timer = new Timer(16000L);

    @BeforeMethod
    public void beforeTest() {
        muiTablePage.open();
        muiTablePage.isOpened();
    }

    @Test
    public void basicTableTest() {
        basicTable.show();
        basicTable.tableHeader().is().notExist();
        basicTable.tableFooter().is().notExist();
        basicTable.has().verticalSize(14)
                .and().has().horizontalSize(5)
                .and().has().columns(EXPECTED_TABLE_HEADERS);
        basicTable.row(1).cell(2).has().text("305");
    }

    @Test
    public void dataTableTest() {
        dataTable.show();
        dataTable.row(1).cell(1).checkbox().click();
        dataTable.row(1).cell(1).checkbox().is().checked();
        dataTable.row(0).cell(1).checkbox().is().checked();
        dataTable.row(0).cell(1).checkbox().click();
        dataTable.row(1).cell(1).checkbox().is().unchecked();
        dataTable.row(0).cell(1).checkbox().is().unchecked();
        dataTable.row(0).cell(1).checkbox().click();
        dataTable.column(1).cells().forEach(cell -> cell.checkbox().is().checked());

        dataTable.row(4).cell(3).has().text("Arya");

        dataTable.tableHeader().is().notExist();
        dataTable.tableFooter().is().exist();
        dataTable.tableFooter().has().selectedRows(9);
        dataTable.tableFooter().has().currentMinRowIndex(1);
        dataTable.tableFooter().has().currentMaxRowIndex(5);
        dataTable.tableFooter().has().maxRowAmount(9);
        dataTable.tableFooter().nextPageButton().click();
        dataTable.column(1).cells().forEach(cell -> cell.checkbox().is().checked());
        dataTable.row(0).cell(1).checkbox().click();
        dataTable.column(1).cells().forEach(cell -> cell.checkbox().is().unchecked());
        dataTable.tableFooter().has().selectedRows(0);
        dataTable.row(4).cell(6).has().text("Harvey Roxie");
        dataTable.tableFooter().previousPageButton().click();

        String age = "Age";
        dataTable.column(age).is().exist();

        dataTable.column(age).cell(0).button("Menu").click(ElementArea.JS);

        dataTable.columnMenu().item("Unsort").is().disabled();
        dataTable.columnMenu().item("Sort by ASC").click();
        dataTable.column(age).is().sorted();
        dataTable.column(age).has().sorting(ColumnSorting.ASCENDING);

        dataTable.column(age).cell(0).button("Menu").click(ElementArea.JS);
        dataTable.columnMenu().item("Sort by DESC").click();
        dataTable.column(age).is().sorted();
        dataTable.column(age).has().sorting(ColumnSorting.DESCENDING);

        dataTable.column(age).cell(0).button("Menu").click(ElementArea.JS);
        dataTable.columnMenu().item("Unsort").is().enabled();
        dataTable.columnMenu().item("Unsort").click();
        dataTable.column(age).is().unsorted();

        dataTable.column(age).cell(0).button("Menu").click(ElementArea.JS);
        dataTable.columnMenu().item("Hide").click();
        dataTable.column(age).is().notExist();

        dataTable.column(2).cell(0).button("Menu").click(ElementArea.JS);
        dataTable.columnMenu().item("Show columns").click();

        dataTable.columnConfig().is().exist();
        dataTable.columnConfig().getSwitch("Age").is().unchecked();
        dataTable.columnConfig().getSwitch("Age").check();
        dataTable.column(age).is().exist();
        dataTable.columnConfig().searchField().sendKeys("ID");
        dataTable.columnConfig().has().switchElements(1)
                .and().has().switchElements(Collections.singletonList("ID"));
        dataTable.columnConfig().hideAllButton().click();
        dataTable.is().empty();
        dataTable.columnConfig().showAllButton().click();
        dataTable.is().notEmpty();

        dataTable.column(2).cell(0).button("Menu").click(ElementArea.JS);
        dataTable.columnMenu().item("Filter").click();

        dataTable.columnFilter().columnsSelect().select("Last name");
        dataTable.columnFilter().operatorsSelect().select("starts with");
        dataTable.columnFilter().valueField().sendKeys("Lan", Keys.ENTER);
        dataTable.has().verticalSize(3)
                .and().has().rows(row -> row.cell(4).getText().startsWith("Lan"), Matchers.equalTo(2));
        dataTable.tableFooter().has().maxRowAmount(2);
        dataTable.columnFilter().clearFilterButton().click();
        dataTable.tableFooter().has().maxRowAmount(9);
    }

    @Test
    public void denseTableTest() {
        denseTable.show();
        denseTable.tableHeader().is().notExist();
        denseTable.tableFooter().is().notExist();
        denseTable.has().verticalSize(6)
                .and().has().horizontalSize(5)
                .and().has().columns(EXPECTED_TABLE_HEADERS);
        denseTable.row(0).cell(2).has().text("Calories")
                .and().has().classValue(containsString("sizeSmall"));
        denseTable.row(1).cell(2).has().text("159")
                .and().has().classValue(containsString("sizeSmall"));
    }

    @Test
    public void sortingAndSelectingTableTest() {
        sortingSelectingTable.show();

        sortingSelectingTable.row(0).cell(1).checkbox().click();
        sortingSelectingTable.column(1).cells().forEach(cell -> cell.checkbox().is().checked());
        sortingSelectingTable.tableHeader().is().exist().and().has().selectedRows(13);

        sortingSelectingTable.has().verticalSize(6);
        sortingSelectingTable.tableFooter().is().exist();
        sortingSelectingTable.tableFooter().has().currentMaxRowIndex(5);
        sortingSelectingTable.tableFooter().rowsPerPageSelect().select("10");
        sortingSelectingTable.tableFooter().has().currentMaxRowIndex(10);
        sortingSelectingTable.has().verticalSize(11);

        sortingSelectingTable.column("Calories").is().sorted();
        sortingSelectingTable.column("Fat (g)").is().unsorted();
        sortingSelectingTable.column("Fat (g)").cell(0).click();
        sortingSelectingTable.column("Fat (g)").has().sorting(ColumnSorting.ASCENDING);
        sortingSelectingTable.column("Fat (g)").cell(0).click();
        sortingSelectingTable.column("Fat (g)").has().sorting(ColumnSorting.DESCENDING);

        densePaddingSwitch.check();
        densePaddingSwitch.is().checked();
    }

    @Test
    public void collapsibleTableTest() {
        collapsibleTable.show();
        collapsibleTable.row(1).cell(3).has().text("159");
        purchaseTable.is().notExist();
        collapsibleTable.row(1).cell(1).button("expand row").click();
        purchaseTable.is().exist();
        Timer.waitCondition(() -> purchaseTable.verticalSize() >= 3);
        purchaseTable.row(1).cell(2).has().text("11091700");
        collapsibleTable.row(1).cell(1).button("expand row").click();
        purchaseTable.is().notExist();
    }

    @Test
    public void spanningTableTest() {
        //TODO: implement after discussion how column headers should be implemented
    }

    @Test
    public void virtualizedTableTest() {
        virtualizedTable.show();
        //TODO: implement scrolling for table
    }

}
