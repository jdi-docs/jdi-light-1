package com.epam.jdi.light.angular.elements.complex;

import com.epam.jdi.light.angular.asserts.BottomSheetAssert;
import com.epam.jdi.light.elements.base.UIBaseElement;
import com.epam.jdi.light.elements.common.UIElement;
import com.epam.jdi.light.elements.complex.WebList;
import com.epam.jdi.light.ui.html.elements.common.Button;
import org.openqa.selenium.By;

import java.util.List;

public class BottomSheet extends UIBaseElement<BottomSheetAssert> {
    private static final String BOTTOM_SHEET_VALUES_CSS_SELECTOR = "#bottom-sheet-container .mat-list-text span:first-child";
    private Button bottomSheet;
    private UIElement bottomSheetContainer;

    public BottomSheet() {
        bottomSheet = new Button();
    }

    @Override
    public BottomSheetAssert is() {
        return new BottomSheetAssert().set(this);
    }

    public List<String> values() {
        return new WebList(By.cssSelector(BOTTOM_SHEET_VALUES_CSS_SELECTOR)).values();
    }

    public void open() {
        bottomSheet.click();
    }

    public void close() {
        if (isOpened()) {
            bottomSheetContainer.core().click();
            bottomSheetContainer.waitFor().disappear();
        }
    }

    public boolean isOpened() {
        return bottomSheetContainer.isDisplayed();
    }

    public boolean isClosed() {
        return !isOpened();
    }
}
