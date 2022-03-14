package io.github.com.pages.displaydata;

import com.epam.jdi.light.elements.composite.WebPage;
import com.epam.jdi.light.elements.pageobjects.annotations.locators.UI;
import com.epam.jdi.light.material.elements.displaydata.Divider;
import com.epam.jdi.light.material.elements.displaydata.List;

public class InsetDividerPage extends WebPage {

    @UI("li.MuiDivider-root")
    public static java.util.List<Divider> insetDividers;

    @UI("ul.MuiList-root")
    public static List itemList;
}
