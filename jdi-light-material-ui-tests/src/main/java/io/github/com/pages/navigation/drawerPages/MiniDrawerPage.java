package io.github.com.pages.navigation.drawerPages;

import com.epam.jdi.light.elements.composite.WebPage;
import com.epam.jdi.light.elements.pageobjects.annotations.locators.UI;
import com.epam.jdi.light.material.elements.navigation.Drawer;
import com.epam.jdi.light.ui.html.elements.common.Button;
import com.epam.jdi.light.ui.html.elements.common.Text;

import java.util.List;

public class MiniDrawerPage extends WebPage {

    @UI("//div[contains(@class,'MuiPaper-root')]")
    public static Drawer drawer;

    @UI("//ul[contains(@class,'MuiList-padding')]//div[@class='MuiListItemText-root']/span")
    public static List<Button> drawerElementsText;

    @UI("//ul[contains(@class,'MuiList-padding')]//div[@class='MuiListItemIcon-root']")
    public static List<Drawer> drawerElementsIcon;

    @UI("//p[contains(@class,'MuiTypography-root')]")
    public static List<Text> drawerContent;

    @UI("//button[@aria-label='open drawer']")
    public static Button drawerSandwichMenuButton;

    @UI("//div[contains(@class,'MuiDrawer-paper')]//button[contains(@class,'MuiButtonBase-root')]")
    public static Button drawerBackMenuButton;
}
