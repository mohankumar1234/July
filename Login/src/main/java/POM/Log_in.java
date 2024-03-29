package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Log_in
{
	WebDriver driver;
	
	@FindBy(xpath = "//div/h1[contains (text() , 'Welcome, Please Sign In!')]")
	WebElement lblwelcome;
	@FindBy(xpath = "//div/label[contains (text() , 'Email:' )]")
	WebElement lblEmail;
	@FindBy(xpath = "//div/label[contains (text() , 'Password:')]")
	WebElement lblPassword;
	@FindBy(xpath = "//div/label[contains (text() , 'Remember me?')]")
	WebElement lblRememberMe;
	@FindBy(xpath = "//span/a[contains(text() , 'Forgot password?')]")
	WebElement lnkForgotpassword;
	@FindBy(xpath = "//div/input[@value = 'Log in']")
	WebElement cmdLogin;
	@FindBy(xpath = "//div/input[@id = 'Email']")
	WebElement txtEmail;
	@FindBy(xpath = "//div/input[@id = 'Password']")
	WebElement txtPassword;
	@FindBy(xpath = "//li/a[contains (text() , 'Log out')]")
	WebElement lnkLog_out;
	@FindBy(xpath = "//div/span[contains (text() , 'Login was unsuccessful. Please correct the errors and try again.')]")
	WebElement lblmessage1;
	@FindBy(xpath = "//form/div/div/ul/li")
	WebElement lblmessage2;
	
	public Log_in(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void clicklnkLog_out(WebDriver driver)
	{
		lnkLog_out.click();
	}
	
	public String getlblwelcome(WebDriver driver2)
	{
		return lblwelcome.getText();
	}
	
	public String getlblEmailText(WebDriver driver)
	{
		return lblEmail.getText();
	}
	
	public String getlblPasswordText(WebDriver driver)
	{
		return lblPassword.getText();
	}
	
	public String getlblRememberMeText(WebDriver driver)
	{
		return lblRememberMe.getText();
	}
	
	public boolean getlnkForgotpasswordStatus(WebDriver driver)
	{
		return lnkForgotpassword.isDisplayed();
	}
	
	public boolean getcmdLoginStatus(WebDriver driver)
	{
		return cmdLogin.isEnabled();
	}
	
	public void clickcmdLogin(WebDriver driver)
	{
		cmdLogin.click();
	}
	
	public boolean getEmailStatus(WebDriver driver)
	{
		return txtEmail.isEnabled();
	}
	
	public boolean getPasswordStatus(WebDriver driver)
	{
		return txtPassword.isEnabled();
	}
	
	public void settxtEmail(WebDriver driver , String username)
	{
		txtEmail.sendKeys(username);
	}
	
	public void settxtPassword(WebDriver driver , String password)
	{
		txtPassword.sendKeys(password);
	}
	
	public String getlblmessage1(WebDriver driver)
	{
		return lblmessage1.getText();
	}
	
	public String getlblmessage2(WebDriver driver)
	{
		return lblmessage2.getText();
	}


}
