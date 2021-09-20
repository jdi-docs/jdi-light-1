package com.epam.jdi.light.vuetify.elements.input;

import com.epam.jdi.light.common.JDIAction;
import com.epam.jdi.light.elements.base.UIBaseElement;
import com.epam.jdi.light.elements.common.UIElement;
import com.epam.jdi.light.elements.interfaces.base.HasClick;
import com.epam.jdi.light.vuetify.asserts.input.ButtonAssert;

/**
 * To see the example of Buttons web element please visit https://vuetifyjs.com/en/components/buttons/
 */

public class Button extends UIBaseElement<ButtonAssert> implements HasClick {

    Button() {}

    public Button(UIElement element) {
        core().setCore(element);
    }

    @Override
    public ButtonAssert is() {
        return new ButtonAssert().set(this);
    }

    @Override
    public ButtonAssert has() {
        return this.is();
    }

    @JDIAction("Check if '{name}' is loading")
    public boolean isLoading() {
        return core().hasClass("v-btn--loading");
    }

    @JDIAction("Check if {name} is disabled")
    @Override
    public boolean isDisabled() {
        return core().hasClass("v-btn--disabled");
    }
}
