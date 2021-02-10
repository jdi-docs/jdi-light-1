package com.epam.jdi.light.material.asserts.displaydata;

import com.epam.jdi.light.asserts.generic.UIAssert;
import com.epam.jdi.light.common.JDIAction;
import com.epam.jdi.light.material.elements.displaydata.Badge;
import org.hamcrest.Matcher;
import org.hamcrest.Matchers;

import static com.epam.jdi.light.asserts.core.SoftAssert.jdiAssert;

public class BadgeAssert extends UIAssert<BadgeAssert, Badge> {

    @JDIAction("Assert that '{name}' badge content is '{0}'")
    public BadgeAssert badgeContent(Matcher<String> condition) {
        jdiAssert(element().getBadgeContent(), condition);
        return this;
    }

    @JDIAction("Assert that '{name}' is invisible")
    public BadgeAssert invisible() {
        jdiAssert(element().isInvisible(), Matchers.is(true));
        return this;
    }

    @JDIAction("Assert that '{name}' is dot")
    public BadgeAssert dot() {
        jdiAssert(element().isDot(), Matchers.is(true));
        return this;
    }

}
