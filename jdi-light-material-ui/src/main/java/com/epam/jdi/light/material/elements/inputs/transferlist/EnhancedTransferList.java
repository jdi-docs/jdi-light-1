package com.epam.jdi.light.material.elements.inputs.transferlist;

import com.epam.jdi.light.common.JDIAction;

/**
 * Represents Enhanced transfer list MUI component on GUI.
 *
 * @see <a href="https://mui.com/components/transfer-list/#enhanced-transfer-list">Enhanced Transfer List MUI documentation</a>
 * @see <a href="https://jdi-testing.github.io/jdi-light/material">MUI test page</a>
 */
public class EnhancedTransferList extends TransferList {

    /**
     * Selects Card Header checkbox and moves all items to the left list.
     */
    @Override
    @JDIAction("Move all '{name}' elements left")
    public void moveAllElementsLeft() {
        core().find(allItemsRightCheckbox).click();
        core().find(moveLeftButton).click();
    }

    /**
     * Selects Card Header checkbox and moves all items to the right list.
     */
    @Override
    @JDIAction("Move all '{name}' elements right")
    public void moveAllElementsRight() {
        core().find(allItemsLeftCheckbox).click();
        core().find(moveRightButton).click();
    }
}
