package com.epam.jdi.light.material.elements.displaydata.table;

import com.epam.jdi.light.asserts.generic.HasAssert;
import com.epam.jdi.light.common.JDIAction;
import com.epam.jdi.light.common.TextTypes;
import com.epam.jdi.light.driver.WebDriverFactory;
import com.epam.jdi.light.elements.base.UIBaseElement;
import com.epam.jdi.light.elements.complex.WebList;
import com.epam.jdi.light.elements.complex.dropdown.Dropdown;
import com.epam.jdi.light.material.annotations.JMUITableColumnFilter;
import com.epam.jdi.light.material.asserts.displaydata.table.MUITableColumnFilterAssert;
import com.epam.jdi.light.material.elements.inputs.Select;
import com.epam.jdi.light.material.elements.inputs.TextField;
import com.epam.jdi.light.ui.html.elements.common.Button;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class MUITableColumnFilter extends UIBaseElement<MUITableColumnFilterAssert> implements HasAssert<MUITableColumnFilterAssert> {

    private final JMUITableColumnFilter columnFilter;
    private Button deleteButton;
    private Dropdown columnsDropdown;
    private Dropdown operatorsDropdown;
    private TextField valueField;

    public MUITableColumnFilter(JMUITableColumnFilter columnFilter) {
        this.columnFilter = columnFilter;
        base().setLocator(columnFilter.root());
    }

    @JDIAction("Get '{name}' 'Clear filter' button")
    public Button clearFilterButton() {
//        if (deleteButton == null) {
//            deleteButton = new Button().setCore(Button.class, core().find(columnFilter.deleteButton()));
//        }
        //html Button seems not working properly by using class field
        return new Button().setCore(Button.class, core().find(columnFilter.deleteButton()));
    }

    @JDIAction("Get '{name}' 'Columns' select")
    public Select columnsSelect() {
//        if (columnsDropdown == null) {
//            columnsDropdown = new Dropdown().setCore(Dropdown.class, core().find(columnFilter.columnsSelect()));
//        }
        //html Dropdown seems not working properly by using class field
        return createSelect(columnFilter.columnsSelect());
    }

    @JDIAction("Get '{name}' 'Operators' select")
    public Select operatorsSelect() {
//        if (operatorsDropdown == null) {
//            operatorsDropdown = new Dropdown().setCore(Dropdown.class, core().find(columnFilter.operatorsSelect()));
//        }
        //html Dropdown seems not working properly by using class field
        return createSelect(columnFilter.operatorsSelect());
    }

    @JDIAction("Get '{name}' 'Value' field'")
    public TextField valueField() {
        if (valueField == null) {
            valueField = new TextField() {
                @Override
                @JDIAction("Send text to '{name}' text area")
                public void sendKeys(CharSequence... text) {
                    super.sendKeys(text);
                    try {
                        WebDriverWait webDriverWait = new WebDriverWait(WebDriverFactory.getDriver(), Duration.ofSeconds(3));
                        WebElement svg = webDriverWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(columnFilter.valueField() + "/following-sibling::*[local-name()='svg']")));
                        webDriverWait.until(ExpectedConditions.stalenessOf(svg));
                    } catch (WebDriverException e) {
                        //TODO: Ask, how to log this properly
                    }
                }
            }.setCore(TextField.class, core().find(columnFilter.valueField()));
        }
        return valueField;
    }

    @Override
    public MUITableColumnFilterAssert is() {
        return new MUITableColumnFilterAssert().set(this);
    }

    private Select createSelect(String rootLocator) {
        String filterListLocator = rootLocator.substring(rootLocator.lastIndexOf("/")).contains("/select") ? "option" : "li";
        return new Select() {
            @Override
            public void toggle() {
                base().getWebElement().click();
            }

            @Override
            public WebList list() {
                return linkedList(filterListLocator, "list").setUIElementName(TextTypes.INNER);
            }
        }.setCore(Select.class, core().find(rootLocator));
    }

}
