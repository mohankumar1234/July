package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Register 
{
	WebDriver driver;
	
	@FindBy(xpath = "//div/h1[contains (text() , 'Register')]")
	WebElement lblRegister;
	
	public Register(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public String getlblRegister(WebDriver driver)
	{
		return lblRegister.getText();
	}

}
