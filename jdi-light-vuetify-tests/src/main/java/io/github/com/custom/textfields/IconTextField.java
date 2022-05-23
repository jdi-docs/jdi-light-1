package io.github.com.custom.textfields;

import com.epam.jdi.light.common.JDIAction;
import com.epam.jdi.light.vuetify.elements.common.Icon;
import com.epam.jdi.light.vuetify.elements.complex.TextField;

import java.util.List;
import java.util.stream.Collectors;

public class IconTextField extends TextField {

    /**
     * Locator for prepend outer icon
     */
    private static final String PREPEND_OUTER_ICON = ".v-input__prepend-outer";

    /**
     * Locator for prepend inner icon
     */
    private static final String PREPEND_INNER_ICON = ".v-input__prepend-inner";

    /**
     * Locator for append outer icon
     */
    private static final String APPEND_OUTER_ICON = ".v-input__append-outer";

    /**
     * Locator for append inner icon
     */
    private static final String APPEND_INNER_ICON = "div:last-child.v-input__append-inner";

    /**
     * Locator for clear text icon
     */
    private static final String CLEAR_ICON = ".v-input__append-inner";

    @JDIAction("Get '{name}' list icons by locator")
    protected List<Icon> getIconsByLocator(String locator) {
        return finds(locator).stream().map(icon -> icon.find(".v-icon")).map(icon -> new Icon().setCore(Icon.class, icon)).collect(Collectors.toList());
    }

    @JDIAction("Get '{name}' icon by locator")
    protected Icon getIconByLocator(String locator) {
        return new Icon().setCore(Icon.class, find(locator));
    }

    @JDIAction("Get '{name}' prepend outer icons")
    public List<Icon> prependOuterIcons() {
        return getIconsByLocator(PREPEND_OUTER_ICON);
    }

    @JDIAction("Get '{name}' prepend inner icons")
    public List<Icon> prependInnerIcons() {
        return getIconsByLocator(PREPEND_INNER_ICON);
    }

    @JDIAction("Get '{name}' append inner icons")
    public List<Icon> appendInnerIcons() {
        return getIconsByLocator(APPEND_INNER_ICON);
    }

    @JDIAction("Get '{name}' append outer icons")
    public List<Icon> appendOuterIcons() {
        return getIconsByLocator(APPEND_OUTER_ICON);
    }

    @JDIAction("Get '{name}' clear icons")
    public Icon clearIcon() {
        return getIconByLocator(CLEAR_ICON);
    }

    @JDIAction("Get '{name}' prepend outer icon")
    public Icon getPrependOuterIcon() {
        return prependOuterIcons().get(0);
    }

    @JDIAction("Get '{name}' prepend inner icons")
    public Icon getPrependInnerIcon() {
        return prependInnerIcons().get(0);
    }

    @JDIAction("Get '{name}' append inner icons")
    public Icon getAppendInnerIcon() {
        return appendInnerIcons().get(0);
    }

    @JDIAction("Get '{name}' append outer icons")
    public Icon getAppendOuterIcon() {
        return appendOuterIcons().get(0);
    }
}
