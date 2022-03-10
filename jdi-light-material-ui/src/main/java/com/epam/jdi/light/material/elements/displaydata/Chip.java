package com.epam.jdi.light.material.elements.displaydata;

import com.epam.jdi.light.common.JDIAction;
import com.epam.jdi.light.elements.base.UIBaseElement;
import com.epam.jdi.light.elements.common.Label;
import com.epam.jdi.light.elements.interfaces.base.HasClick;
import com.epam.jdi.light.elements.interfaces.base.HasLabel;
import com.epam.jdi.light.material.asserts.displaydata.ChipAssert;
import com.epam.jdi.light.material.interfaces.base.CanBeDisabled;
import com.epam.jdi.light.material.interfaces.base.HasColor;

import static com.epam.jdi.light.common.Exceptions.runtimeException;

/**
 * To see an example of Chip web element please visit
 * https://mui.com/components/chips/
 */

public class Chip extends UIBaseElement<ChipAssert> implements HasClick, CanBeDisabled, HasLabel {

    @Override
    @JDIAction("Get '{name}' label")
    public Label label() {
        return new Label().setCore(Label.class, find(".MuiChip-label"));
    }

    @JDIAction("Get '{name}' delete icon")
    public Icon deleteIcon() {
        return new Icon().setCore(Icon.class, find(".MuiChip-deleteIcon"));
    }

    @JDIAction("Get '{name}' avatar")
    public Avatar avatar() {
        return new Avatar().setCore(Avatar.class, find(".MuiChip-avatar"));
    }

    @JDIAction("Get '{name}' icon")
    public Icon icon() {
        return new Icon().setCore(Icon.class, find(".MuiChip-icon"));
    }

    @JDIAction("Get '{name}' href")
    public String href() {
        if (isLink()) {
            return core().attr("href");
        } else {
            throw runtimeException("Element is not a link");
        }
    }

    @JDIAction("Delete '{name}'")
    public void delete() {
        if (deleteIcon().isDisplayed()) {
            deleteIcon().click();
        } else {
            throw runtimeException("Chip does not have delete icon");
        }
    }

    @JDIAction("Check that '{name}' is outlined")
    public boolean isOutlined() {
        return core().hasClass("MuiChip-outlined");
    }

    @JDIAction("Check that '{name}' is clickable")
    public boolean isClickable() {
        return core().hasClass("MuiChip-clickable");
    }

    @JDIAction("Check that '{name}' is deletable")
    public boolean isDeletable() {
        return core().hasClass("MuiChip-deletable") && deleteIcon().isDisplayed();
    }

    @JDIAction("Check that '{name}' is link")
    public boolean isLink() {
        return core().hasAttribute("href") && core().getTagName().equals("a");
    }

    @JDIAction("Check that '{name}' is disabled")
    @Override
    public boolean isDisabled() {
        return this.containsDisabled();
    }

    @Override
    public ChipAssert is() {
        return new ChipAssert().set(this);
    }
}
