package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Shopping_cart
{
	WebDriver driver;
	
	@FindBy(xpath = "//div/h1[contains (text() , 'Shopping cart')]")
	WebElement lblShopping_cart;
	
	public Shopping_cart(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public String getlblShopping_cart(WebDriver driver)
	{
		return lblShopping_cart.getText();
	}

}
