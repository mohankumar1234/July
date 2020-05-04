package StepDefinitions;

import static org.testng.Assert.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import POM.HomePage;
import POM.Log_in;
import POM.Register;
import POM.Shopping_cart;
import POM.Wishlist;
import cucumber.api.java.en.*;

public class WebShop 
{
WebDriver driver;



	@Given ("^I launch \"(.*)\"$")
	public void launchurl(String url)
	{
		System.setProperty("webdriver.chrome.driver" , "D:\\Mohan\\Softwares\\Jar\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
	}
	
	@Then ("^I validate the link \"(.*)\" exist in top menu$")
	public void validateLinkTop(String linkname)
	{
		HomePage home1 = new HomePage(driver);
		Register register1 = new Register(driver);
		Log_in log_in1 = new Log_in(driver);
		Wishlist wishlist1 = new Wishlist(driver);
		Shopping_cart shopping_cart1 = new Shopping_cart(driver);
		switch (linkname)
		{
		case "Register":
			assertTrue (home1.getlnkRegisterStatus(driver));
			break;
		case "Log in":
			assertTrue (home1.getlnkLog_inStatus(driver));
			break;
		case "Shopping cart":
			assertTrue (home1.getlnkShopping_cartStatus(driver));
			break;
		case "Wishlist":
			assertTrue (home1.getlnkWishlistStatus(driver));
			break; 
		}
		
	}
	@Then ("^I click the link \"(.*)\" exist in top menu$")
	public void clickLinkTop(String linkname)
	{
		HomePage home1 = new HomePage(driver);
		Register register1 = new Register(driver);
		Log_in log_in1 = new Log_in(driver);
		Wishlist wishlist1 = new Wishlist(driver);
		Shopping_cart shopping_cart1 = new Shopping_cart(driver);
		switch (linkname)
		{
		case "Register":
			home1.clicklnkRegister(driver);
			break;
		case "Log in":
			home1.clicklnkLogin(driver);
			break;
		case "Shopping cart":
			home1.clicklnkShopping_cart(driver);
			break;
		case "Wishlist":
			home1.clicklnkWishlist(driver);
			break; 
		case "Log out":
			log_in1.clicklnkLog_out(driver);
			break;
		}
		
	}
		
	
	@Then ("^I validate the Label \"(.*)\" exist in login page$")
	public void validateLabelLogin(String label)
	{
		Log_in log_in1 = new Log_in(driver);
		switch (label)
		{
		case "Welcome, Please Sign In!":
			assertEquals (log_in1.getlblwelcome(driver), label);
			break;
		case "Email:":
			assertEquals (log_in1.getlblEmailText(driver) , label);
			break;
		case "Password:":
			assertEquals (log_in1.getlblPasswordText(driver) , label);
			break;
		case "Remember me?":
			assertEquals (log_in1.getlblRememberMeText(driver) , label);
			break;
		}		
	}
	
	@Then ("^I validate the Label \"(.*)\" exist in register page$")
	public void validateLabelRegister(String label)
	{
		
		Register register1 = new Register(driver);
		
		switch (label)
		{
		
		case "Register":
			assertEquals (register1.getlblRegister(driver) , label);
			break;
		
		}		
	}
	

	
	@Then ("^I validate the link \"(.*)\" exist in login page$")
	public void validateLinkLogin(String links)
	{
		Log_in log_in1 = new Log_in(driver);
		switch (links)
		{
		case "Forgot password?":
			assertTrue (log_in1.getlnkForgotpasswordStatus(driver));
		}
	}
	@Then ("^I validate the Label \"(.*)\" exist in shopping cart page$")
	public void validateLabelShoppingCart(String label)
	{
		Shopping_cart shopping_cart1 = new Shopping_cart(driver);
		switch (label)
		{
		case "Shopping cart":
			assertEquals (shopping_cart1.getlblShopping_cart(driver), label);
			break;
		}		
	}
	@Then ("^I validate the Label \"(.*)\" exist in wishlist page$")
	public void validateLabelWishList(String label)
	{
		Wishlist wishlist1 = new Wishlist(driver);
		switch (label)
		{
		case "Wishlist        ":
			assertEquals (wishlist1.getlblWishlist(driver) , label);
			break;
		}		
	}
	
	
	@Then ("^I validate the command button \"(.*)\" enabled in login page$")
	public void validateCmdLogin(String name)
	{
		Log_in log_in1 = new Log_in(driver);
		switch (name)
		{
		case "Log in":
			assertTrue (log_in1.getcmdLoginStatus(driver));
		}
	}
	
	@Then ("^I validate textbox \"(.*)\" enabled in login page$")
	public void validateTextboxLogin(String textbox)
	{
		Log_in log_in1 = new Log_in(driver);
		switch (textbox)
		{
		case "Email":
			assertTrue (log_in1.getEmailStatus(driver));
			break;
		case "Password":
			assertTrue (log_in1.getPasswordStatus(driver));
			break;
		}
	}
	
	@When ("^I enter \"(.*)\" in the \"(.*)\" textbox in login page$")
	public void enterUsernameLogin(String credential , String textbox)
	{
		Log_in log_in1 = new Log_in(driver);
		switch (textbox)
		{
			case "Email:":
				log_in1.settxtEmail(driver, credential);
				break;
			case "Password:":
				log_in1.settxtPassword(driver, credential);
				break;
		}
		
	}
	
	@And ("^I click the button \"(.*)\" in login page$")
	public void clickButtonLogin(String button)
	{
		Log_in log_in1 = new Log_in(driver);
		switch(button)
		{
		case "Log in":
			log_in1.clickcmdLogin(driver);
			break;
		}
	}
	
	@Then ("^I validate the \"(.*)\" displayed in login page$")
	public void validateErrorLogin(String error)
	{
		Log_in log_in1 = new Log_in(driver);
		switch(error)
		{
		case "No customer account found":
			assertEquals (log_in1.getlblmessage1(driver) , error);
			break;
		case "The credentials provided are incorrect":
			assertEquals (log_in1.getlblmessage2(driver) , error);
			break;
		}
	}
	
	@Then ("^I wait 10 s$")
	public void wait10s() throws InterruptedException
	{
		driver.wait(10);
	}

	@Then ("^I navigate back the browser$")
	public void navigateback()
	{
		driver.navigate().back();
	}
	
	@Then ("^I quit browser$")
	public void quitbrowser()
	{
		driver.quit();
	}
}
